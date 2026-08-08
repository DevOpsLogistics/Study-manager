const state = {
  data: null,
  view: location.hash.slice(1) || "dashboard",
  query: "",
  selectedCourseId: "",
  deadlineFilter: "all",
  modal: null,
  saving: false,
  quizFile: null,
  quizGenerating: false,
  quizSettings: { courseId: "", questionCount: 10, difficulty: "medium", questionType: "mixed", language: "vi", focus: "" },
  selectedQuizId: "",
  quizAnswers: {},
  quizRevealed: {},
  scheduleDate: "",
};

const VIEW_META = {
  dashboard: ["TRUNG TÂM HỌC TẬP", "Tổng quan", "Theo dõi học kỳ trong một màn hình.", "+ Thêm deadline"],
  courses: ["NỘI DUNG HỌC TẬP", "Môn học", "Module, ghi chú, công cụ và tiến độ từng môn.", "+ Thêm môn"],
  quizzes: ["LUYỆN TẬP TỪ SLIDE", "Bài kiểm tra", "Tạo câu hỏi có đáp án và giải thích từ PDF hoặc PowerPoint.", "+ Chọn slide"],
  schedule: ["THỜI GIAN BIỂU", "Lịch học", "Lịch cố định và các buổi học sắp tới.", "+ Thêm lịch chính thức"],
  deadlines: ["VIỆC CẦN HOÀN THÀNH", "Deadline", "Quản lý hạn nộp, mức ưu tiên và khối lượng việc.", "+ Thêm deadline"],
  grades: ["KẾT QUẢ HỌC TẬP", "Điểm số", "Theo dõi điểm thành phần, trọng số và mục tiêu.", "+ Thêm điểm"],
  planner: ["KẾ HOẠCH CÁ NHÂN", "Kế hoạch học", "Lập phiên tự học và kiểm soát mục tiêu mỗi tuần.", "+ Lên lịch học"],
};

const WEEKDAYS = ["Chủ nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
const SHORT_WEEKDAYS = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
const COURSE_STATUS_LABELS = { upcoming: "Sắp học", active: "Đang học", completed: "Đã kết thúc" };
const TERMINAL_SOFTWARE = new Set(["Python 3.12", "Git & Git LFS", "Arduino CLI", "PlatformIO", "Mosquitto MQTT", "CBC & GLPK", "Pandoc", "ROS 2 Jazzy"]);

const elements = {
  nav: document.querySelector("#mainNav"),
  root: document.querySelector("#viewRoot"),
  loading: document.querySelector("#loadingState"),
  search: document.querySelector("#searchInput"),
  title: document.querySelector("#pageTitle"),
  eyebrow: document.querySelector("#pageEyebrow"),
  primaryAction: document.querySelector("#primaryAction"),
  secondaryAction: document.querySelector("#secondaryAction"),
  saveStatus: document.querySelector("#saveStatus"),
  today: document.querySelector("#todayLabel"),
  semesterName: document.querySelector("#semesterName"),
  semesterDates: document.querySelector("#semesterDates"),
  semesterProgressText: document.querySelector("#semesterProgressText"),
  semesterProgressBar: document.querySelector("#semesterProgressBar"),
  courseNavCount: document.querySelector("#courseNavCount"),
  quizNavCount: document.querySelector("#quizNavCount"),
  deadlineNavCount: document.querySelector("#deadlineNavCount"),
  exportButton: document.querySelector("#exportButton"),
  importButton: document.querySelector("#importButton"),
  importInput: document.querySelector("#importInput"),
  menuButton: document.querySelector("#menuButton"),
  scrim: document.querySelector("#scrim"),
  modal: document.querySelector("#modal"),
  modalBackdrop: document.querySelector("#modalBackdrop"),
  modalClose: document.querySelector("#modalClose"),
  cancelButton: document.querySelector("#cancelButton"),
  modalForm: document.querySelector("#modalForm"),
  dialogTitle: document.querySelector("#dialogTitle"),
  dialogEyebrow: document.querySelector("#dialogEyebrow"),
  dialogBody: document.querySelector("#dialogBody"),
  deleteButton: document.querySelector("#deleteButton"),
  toast: document.querySelector("#toast"),
};

function h(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function uid(prefix) {
  return `${prefix}-${globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
}

function slugify(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/đ/g, "d").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function localDate(value) {
  if (!value) return null;
  const [datePart, timePart = "12:00"] = String(value).split("T");
  const [year, month, day] = datePart.split("-").map(Number);
  const [hour = 12, minute = 0] = timePart.split(":").map(Number);
  return new Date(year, month - 1, day, hour, minute);
}

function isoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(value, options = {}) {
  const date = value instanceof Date ? value : localDate(value);
  if (!date || Number.isNaN(date.getTime())) return "Chưa xác định";
  const formatterOptions = { day: "2-digit", month: "2-digit" };
  if (options.year) formatterOptions.year = "numeric";
  if (options.weekday) formatterOptions.weekday = options.weekday;
  return new Intl.DateTimeFormat("vi-VN", formatterOptions).format(date);
}

function formatDateTime(value) {
  const date = localDate(value);
  if (!date) return "Chưa xác định";
  return `${WEEKDAYS[date.getDay()]}, ${formatDate(date, { year: true })} · ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function datetimeLocalValue(value) {
  return value ? String(value).slice(0, 16) : "";
}

function courseById(id) {
  return state.data.courses.find((course) => course.id === id);
}

function courseProgress(course) {
  const modules = course.modules || [];
  if (!modules.length) return 0;
  return Math.round((modules.filter((module) => module.status === "done").length / modules.length) * 100);
}

function semesterProgress() {
  const start = localDate(state.data.meta.semesterStart);
  const end = localDate(state.data.meta.semesterEnd);
  const now = new Date();
  if (!start || !end || now <= start) return 0;
  if (now >= end) return 100;
  return Math.round(((now - start) / (end - start)) * 100);
}

function gradeStats(courseId) {
  const items = state.data.grades.filter((grade) => grade.courseId === courseId);
  const scored = items.filter((grade) => grade.score !== null && grade.score !== "" && Number.isFinite(Number(grade.score)));
  const weightTotal = items.reduce((sum, grade) => sum + (Number(grade.weight) || 0), 0);
  const scoredWeight = scored.reduce((sum, grade) => sum + (Number(grade.weight) || 0), 0);
  const weightedPoints = scored.reduce((sum, grade) => sum + Number(grade.score) * (Number(grade.weight) || 0), 0);
  const current = scoredWeight ? weightedPoints / scoredWeight : null;
  const target = Number(state.data.meta.targetScore) || 8;
  const remainingWeight = Math.max(0, 100 - scoredWeight);
  const needed = remainingWeight ? (target * 100 - weightedPoints) / remainingWeight : null;
  return { items, scored, weightTotal, scoredWeight, current, needed };
}

function gradeLetter(score) {
  if (score === null || !Number.isFinite(score)) return "—";
  if (score >= 9) return "A+";
  if (score >= 8.5) return "A";
  if (score >= 8) return "B+";
  if (score >= 7) return "B";
  if (score >= 6.5) return "C+";
  if (score >= 5.5) return "C";
  if (score >= 5) return "D+";
  if (score >= 4) return "D";
  if (score >= 3) return "F+";
  return "F";
}

function courseSessions(course, from = new Date(), limitDate = null) {
  const result = [];
  const start = localDate(course.startDate);
  const end = localDate(course.endDate);
  if (!start || !end) return result;
  const cursor = new Date(Math.max(start.getTime(), new Date(from.getFullYear(), from.getMonth(), from.getDate()).getTime()));
  while (cursor.getDay() !== Number(course.weekday)) cursor.setDate(cursor.getDate() + 1);
  const hardEnd = limitDate && limitDate < end ? limitDate : end;
  while (cursor <= hardEnd) {
    const [hour, minute] = course.startTime.split(":").map(Number);
    const date = new Date(cursor.getFullYear(), cursor.getMonth(), cursor.getDate(), hour, minute);
    if (date >= from) result.push({ course, date });
    cursor.setDate(cursor.getDate() + 7);
  }
  return result;
}

function upcomingClasses(limit = 20) {
  const now = new Date();
  return state.data.courses.flatMap((course) => courseSessions(course, now)).sort((a, b) => a.date - b.date).slice(0, limit);
}

function deadlineState(deadline) {
  if (deadline.status === "done") return "done";
  const due = localDate(deadline.dueAt);
  if (due && due < new Date()) return "overdue";
  return deadline.status || "planned";
}

function deadlineLabel(deadline) {
  const labels = { done: "Đã xong", overdue: "Quá hạn", in_progress: "Đang làm", planned: "Sắp tới" };
  return labels[deadlineState(deadline)] || "Sắp tới";
}

function startOfWeek(date = new Date()) {
  const copy = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const offset = copy.getDay() === 0 ? -6 : 1 - copy.getDay();
  copy.setDate(copy.getDate() + offset);
  return copy;
}

function weeklyStudyMinutes() {
  const start = startOfWeek();
  const end = new Date(start); end.setDate(end.getDate() + 7);
  return state.data.studySessions
    .filter((session) => session.status === "done")
    .filter((session) => { const date = localDate(session.startAt); return date >= start && date < end; })
    .reduce((sum, session) => sum + (Number(session.durationMinutes) || 0), 0);
}

function matchesQuery(...values) {
  const query = state.query.trim().toLocaleLowerCase("vi");
  if (!query) return true;
  return values.some((value) => String(value || "").toLocaleLowerCase("vi").includes(query));
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => elements.toast.classList.remove("visible"), 2200);
}

function setSaveStatus(label, className = "") {
  elements.saveStatus.textContent = label;
  elements.saveStatus.className = `save-status ${className}`.trim();
}

async function persistData(message = "Đã lưu dữ liệu") {
  if (state.saving) return;
  state.saving = true;
  setSaveStatus("ĐANG LƯU", "saving");
  try {
    const response = await fetch("/api/study-data", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(state.data),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`);
    state.data.meta.updatedAt = result.updatedAt;
    setSaveStatus("ĐÃ LƯU");
    showToast(message);
  } catch (error) {
    setSaveStatus("LỖI LƯU", "error");
    showToast(`Không thể lưu: ${error.message}`);
  } finally {
    state.saving = false;
  }
}

function updateShell() {
  const progress = semesterProgress();
  elements.semesterName.textContent = state.data.meta.semester;
  elements.semesterDates.textContent = `${formatDate(state.data.meta.semesterStart)}–${formatDate(state.data.meta.semesterEnd)}`;
  elements.semesterProgressText.textContent = `${progress}%`;
  elements.semesterProgressBar.style.width = `${progress}%`;
  elements.courseNavCount.textContent = state.data.courses.length;
  elements.quizNavCount.textContent = state.data.quizzes.length;
  elements.deadlineNavCount.textContent = state.data.deadlines.filter((deadline) => deadlineState(deadline) !== "done").length;
  elements.today.textContent = new Intl.DateTimeFormat("vi-VN", { weekday: "long", day: "2-digit", month: "2-digit" }).format(new Date());
}

function setView(view, updateHash = true) {
  if (!VIEW_META[view]) view = "dashboard";
  state.view = view;
  if (updateHash) history.replaceState(null, "", `#${view}`);
  elements.nav.querySelectorAll("button[data-view]").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  const [eyebrow, title, , action] = VIEW_META[view];
  elements.eyebrow.textContent = eyebrow;
  elements.title.textContent = title;
  elements.primaryAction.textContent = action;
  closeMenu();
  render();
  window.scrollTo({ top: 0, left: 0 });
}

function renderDeadlineItems(deadlines, limit = 5) {
  const items = deadlines.slice(0, limit);
  if (!items.length) return `<div class="empty-state"><strong>Chưa có deadline</strong><span>Thêm một mốc để bắt đầu theo dõi.</span></div>`;
  return `<div class="deadline-list">${items.map((deadline) => {
    const due = localDate(deadline.dueAt);
    const course = courseById(deadline.courseId);
    const status = deadlineState(deadline);
    return `<button class="deadline-item" data-action="edit-deadline" data-id="${h(deadline.id)}" type="button">
      <span class="date-box"><strong>${h(due ? due.getDate() : "—")}</strong><span>${h(due ? `T${due.getMonth() + 1}` : "")}</span></span>
      <span class="item-copy"><strong>${h(deadline.title)}</strong><span>${h(course?.name || "Không gắn môn")} · ${h(formatDateTime(deadline.dueAt))}</span></span>
      <span class="status-chip ${h(status)}">${h(deadlineLabel(deadline))}</span>
    </button>`;
  }).join("")}</div>`;
}

function renderDashboard() {
  const openDeadlines = state.data.deadlines.filter((deadline) => deadlineState(deadline) !== "done");
  const overdue = openDeadlines.filter((deadline) => deadlineState(deadline) === "overdue");
  const upcoming = openDeadlines.sort((a, b) => localDate(a.dueAt) - localDate(b.dueAt));
  const gradedCourses = state.data.courses.map((course) => gradeStats(course.id).current).filter((score) => score !== null);
  const average = gradedCourses.length ? gradedCourses.reduce((sum, score) => sum + score, 0) / gradedCourses.length : null;
  const weeklyMinutes = weeklyStudyMinutes();
  const weeklyGoal = Number(state.data.meta.weeklyStudyGoalMinutes) || 600;
  const next = upcomingClasses(1)[0];
  const nextHtml = next ? `<article class="card next-class">
    <div class="card-heading"><div><h2>Lớp tiếp theo</h2><small>${h(formatDate(next.date, { year: true }))}</small></div><span class="pill">${h(WEEKDAYS[next.date.getDay()])}</span></div>
    <div class="next-class-time"><strong>${h(next.course.startTime)}</strong><div><b>${h(next.course.name)}</b><span>${h(next.course.nameEn)}</span></div></div>
    <div class="next-class-footer"><span class="pill">${h(next.course.startTime)}–${h(next.course.endTime)}</span><span class="pill">${h(next.course.room || "Phòng học chưa cập nhật")}</span></div>
  </article>` : `<article class="card"><div class="empty-state"><strong>Không còn lịch học</strong><span>Học kỳ đã kết thúc hoặc chưa có lịch.</span></div></article>`;

  const riskItems = [];
  if (overdue.length) riskItems.push(`${overdue.length} deadline đã quá hạn`);
  state.data.courses.forEach((course) => {
    const stats = gradeStats(course.id);
    if (stats.current !== null && stats.current < Number(state.data.meta.targetScore)) riskItems.push(`${course.code}: điểm hiện tại ${stats.current.toFixed(1)}`);
  });
  if (!gradedCourses.length) riskItems.push("Chưa nhập điểm thành phần nào");

  return `<div class="metric-grid">
    <article class="metric-card"><span>Môn đang theo dõi</span><strong>${state.data.courses.length}</strong><small>Học kỳ 3</small></article>
    <article class="metric-card"><span>Deadline đang mở</span><strong>${openDeadlines.length}</strong><small>${overdue.length ? `${overdue.length} mốc quá hạn` : "Không có mốc quá hạn"}</small></article>
    <article class="metric-card"><span>Điểm trung bình hiện tại</span><strong>${average === null ? "—" : average.toFixed(1)}</strong><small>${average === null ? "Chưa có dữ liệu" : gradeLetter(average)}</small></article>
    <article class="metric-card"><span>Tự học tuần này</span><strong>${Math.round(weeklyMinutes / 60 * 10) / 10}h</strong><small>Mục tiêu ${Math.round(weeklyGoal / 60 * 10) / 10} giờ</small></article>
  </div>
  <div class="dashboard-grid">
    <div class="stack">
      ${nextHtml}
      <article class="card"><div class="card-heading"><div><h2>Deadline gần nhất</h2><small>Sắp xếp theo thời gian</small></div><button class="text-button" data-go-view="deadlines" type="button">Xem tất cả</button></div>${renderDeadlineItems(upcoming)}</article>
    </div>
    <div class="stack">
      <article class="card"><div class="card-heading"><div><h2>Tiến độ môn học</h2><small>Module đã hoàn thành</small></div><button class="text-button" data-go-view="courses" type="button">Chi tiết</button></div>
        <div class="activity-list">${state.data.courses.map((course) => `<button class="activity-item" data-select-course="${h(course.id)}" type="button"><span class="course-code" style="--course-color:${h(course.color)}">${h(course.code)}</span><span class="item-copy"><strong>${h(course.name)}</strong><span>${course.modules.filter((module) => module.status === "done").length}/${course.modules.length} nội dung hoàn thành</span></span><span class="status-chip">${courseProgress(course)}%</span></button>`).join("")}</div>
      </article>
      <article class="card"><div class="card-heading"><div><h2>Cảnh báo học kỳ</h2><small>Những điểm cần chú ý</small></div></div>
        ${riskItems.length ? `<div class="activity-list">${riskItems.map((item, index) => `<div class="activity-item"><span class="date-box" style="background:${index === 0 && overdue.length ? "#ffb3a7" : "var(--yellow)"}"><strong>!</strong><span>CHECK</span></span><span class="item-copy"><strong>${h(item)}</strong><span>Cập nhật dữ liệu để theo dõi chính xác hơn</span></span></div>`).join("")}</div>` : `<div class="empty-state"><strong>Mọi thứ đang ổn</strong><span>Không có cảnh báo dựa trên dữ liệu hiện tại.</span></div>`}
      </article>
    </div>
  </div>`;
}

function renderCourses() {
  const filtered = state.data.courses.filter((course) => matchesQuery(course.name, course.nameEn, course.code, course.toolchain, ...(course.modules || []).map((module) => module.title), ...(course.software || []).map((software) => `${software.name} ${software.type} ${software.command}`)));
  if (!filtered.length) return `<div class="empty-state"><strong>Không tìm thấy môn học</strong><span>Thử từ khóa khác hoặc thêm môn mới.</span></div>`;
  if (!filtered.some((course) => course.id === state.selectedCourseId)) state.selectedCourseId = filtered[0].id;
  const selected = courseById(state.selectedCourseId);
  const progress = courseProgress(selected);
  return `<div class="course-layout">
    <div class="course-grid">${filtered.map((course) => `<button class="course-card ${course.id === selected.id ? "active" : ""}" style="--course-color:${h(course.color)}" data-select-course="${h(course.id)}" type="button">
      <span class="course-card-copy"><strong>${h(course.name)}</strong><span>${h(WEEKDAYS[course.weekday])} · ${h(course.startTime)}–${h(course.endTime)}</span></span><span class="mini-progress"><span>${courseProgress(course)}%</span><i style="--progress:${courseProgress(course)}%"></i></span>
    </button>`).join("")}</div>
    <div class="course-detail">
      <article class="course-hero" style="--course-color:${h(selected.color)}" data-code="${h(selected.code)}">
        <div class="hero-top"><span>${h(COURSE_STATUS_LABELS[selected.status] || "Sắp học")}</span><button class="text-button" data-action="edit-course" data-id="${h(selected.id)}" type="button">Sửa môn</button></div>
        <h2>${h(selected.name)}</h2>
        <div class="course-meta-grid"><div><span>Lịch học</span><strong>${h(WEEKDAYS[selected.weekday])} · ${h(selected.startTime)}</strong></div><div><span>Khoảng ngày</span><strong>${h(formatDate(selected.startDate))}–${h(formatDate(selected.endDate))}</strong></div><div><span>Tiến độ</span><strong>${progress}%</strong></div></div>
      </article>
      <article class="card software-panel"><div class="card-heading"><div><h2>Phần mềm đã cài</h2></div><span class="status-chip done">Đã kiểm tra</span></div>
        ${(selected.software || []).length ? `<div class="software-grid">${selected.software.map((software) => `<button class="software-item" data-launch-software="${h(software.name)}" type="button" title="Mở ${h(software.name)}"><span class="software-logo">${h(software.name.slice(0,2).toUpperCase())}</span><span><strong>${h(software.name)}</strong><small>${h(software.type)}</small><code>${h(software.command)}</code></span><em>${TERMINAL_SOFTWARE.has(software.name) ? "TERMINAL" : "MỞ"} ↗</em></button>`).join("")}</div>` : `<div class="empty-state"><strong>Chưa gắn phần mềm</strong><span>Cập nhật danh sách công cụ khi môn học công bố yêu cầu.</span></div>`}
      </article>
      <article class="card module-panel"><div class="card-heading"><div><h2>Nội dung môn học</h2><small>${selected.modules.length} module · khung cập nhật theo syllabus</small></div><button class="text-button" data-action="add-module" data-course-id="${h(selected.id)}" type="button">+ Thêm nội dung</button></div>
        ${selected.modules.length ? `<div class="module-list">${selected.modules.map((module) => `<div class="module-item ${module.status === "done" ? "done" : ""}"><input type="checkbox" data-action="toggle-module" data-course-id="${h(selected.id)}" data-id="${h(module.id)}" ${module.status === "done" ? "checked" : ""} aria-label="Đánh dấu hoàn thành" /><span class="item-copy"><strong>${h(module.title)}</strong><span>${h(module.notes || "Chưa có ghi chú")}</span></span><button class="icon-button" data-action="edit-module" data-course-id="${h(selected.id)}" data-id="${h(module.id)}" type="button">✎</button></div>`).join("")}</div>` : `<div class="empty-state"><strong>Chưa có nội dung</strong><span>Thêm module, chương hoặc chủ đề cần học.</span></div>`}
      </article>
    </div>
  </div>`;
}

function renderSchedule() {
  const scheduledDays = [1, 2, 3, 4, 5, 6, 0];
  const selectedDate = localDate(state.scheduleDate) || localDate(state.data.meta.semesterStart) || new Date();
  const weekStart = startOfWeek(selectedDate);
  const weekEnd = new Date(weekStart); weekEnd.setDate(weekEnd.getDate() + 6);
  const days = scheduledDays.map((weekday,index) => {
    const date = new Date(weekStart); date.setDate(date.getDate() + index);
    const dateKey = isoDate(date);
    const courses = state.data.courses.filter((course) => Number(course.weekday) === weekday && dateKey >= course.startDate && dateKey <= course.endDate && matchesQuery(course.name,course.nameEn,course.code));
    const courseEntries = courses.map((course) => {
      const [hour,minute] = course.startTime.split(":").map(Number);
      return { kind:"class", id:course.id, name:course.name, color:course.color, startTime:course.startTime, endTime:course.endTime, detail:course.room || "Phòng chưa cập nhật", room:course.room || "Chưa cập nhật", date:new Date(date.getFullYear(),date.getMonth(),date.getDate(),hour,minute) };
    });
    const studyEntries = state.data.studySessions.filter((session) => {
      const start = localDate(session.startAt); const course = courseById(session.courseId);
      return start && isoDate(start) === dateKey && session.status !== "skipped" && matchesQuery(session.title,session.customCourseName,course?.name);
    }).map((session) => {
      const start = localDate(session.startAt); const end = new Date(start.getTime() + (Number(session.durationMinutes) || 60) * 60000); const course = courseById(session.courseId);
      return { kind:"study", id:session.id, name:course?.name || session.customCourseName || "Tự học chung", color:course?.color || "var(--purple)", startTime:`${String(start.getHours()).padStart(2,"0")}:${String(start.getMinutes()).padStart(2,"0")}`, endTime:`${String(end.getHours()).padStart(2,"0")}:${String(end.getMinutes()).padStart(2,"0")}`, detail:"", room:"Phiên tự học", date:start };
    });
    return { weekday, date, entries:[...courseEntries,...studyEntries].sort((a,b) => a.date - b.date) };
  });
  const weekSessions = days.flatMap(({ entries }) => entries).sort((a,b) => a.date - b.date);
  return `<article class="card schedule-picker"><div><span>CHỌN THỜI GIAN HIỂN THỊ</span><strong>${h(formatDate(weekStart, { year:true }))}–${h(formatDate(weekEnd, { year:true }))}</strong></div><div class="schedule-picker-actions"><button class="text-button" data-schedule-shift="-7" type="button">← Tuần trước</button><label><input id="scheduleDateInput" type="date" value="${h(isoDate(selectedDate))}" aria-label="Chọn ngày trong tuần" /></label><button class="text-button" data-schedule-shift="7" type="button">Tuần sau →</button><button class="secondary-button" data-schedule-first type="button">Tuần đầu học kỳ</button></div></article>
  <div class="schedule-grid">${days.map(({ weekday,date,entries }) => `<article class="weekday-column ${isoDate(date) === isoDate(new Date()) ? "today" : ""}"><header><h3>${h(WEEKDAYS[weekday])}</h3><span>${h(formatDate(date))}</span></header>${entries.length ? entries.map((entry) => `<button class="class-block ${entry.kind === "study" ? "study-block" : ""}" style="--course-color:${h(entry.color)}" data-action="${entry.kind === "study" ? "edit-session" : "edit-course"}" data-id="${h(entry.id)}" type="button"><strong>${h(entry.name)}</strong><span>${h(entry.startTime)}–${h(entry.endTime)}</span>${entry.detail ? `<span>${h(entry.detail)}</span>` : ""}</button>`).join("") : `<div class="empty-state" style="min-height:90px;padding:10px"><span>Không có lớp</span></div>`}</article>`).join("")}</div>
  <article class="card table-card upcoming-classes"><div class="table-toolbar"><div class="card-heading" style="margin:0"><div><h2>Lịch trong tuần đã chọn</h2></div></div></div>
    ${weekSessions.length ? `<table class="data-table"><thead><tr><th>Ngày</th><th>Môn học</th><th>Thời gian</th><th>Loại / Phòng</th></tr></thead><tbody>${weekSessions.map((entry) => `<tr><td><strong>${h(SHORT_WEEKDAYS[entry.date.getDay()])}</strong> · ${h(formatDate(entry.date, { year: true }))}</td><td><span class="course-dot" style="background:${h(entry.color)}"></span>${h(entry.name)}</td><td>${h(entry.startTime)}–${h(entry.endTime)}</td><td>${h(entry.room)}</td></tr>`).join("")}</tbody></table>` : `<div class="empty-state" style="margin:18px"><strong>Tuần này chưa có lớp</strong><span>Chọn tuần khác hoặc kiểm tra lại khoảng ngày của môn học.</span></div>`}
  </article>`;
}

function filteredDeadlines() {
  return state.data.deadlines.filter((deadline) => {
    const course = courseById(deadline.courseId);
    if (!matchesQuery(deadline.title, deadline.type, deadline.notes, course?.name)) return false;
    const status = deadlineState(deadline);
    if (state.deadlineFilter === "done") return status === "done";
    if (state.deadlineFilter === "overdue") return status === "overdue";
    if (state.deadlineFilter === "upcoming") return status !== "done" && status !== "overdue";
    return true;
  }).sort((a, b) => localDate(a.dueAt) - localDate(b.dueAt));
}

function renderDeadlines() {
  const deadlines = filteredDeadlines();
  return `<article class="card table-card"><div class="table-toolbar"><div class="filter-pills">${[["all","Tất cả"],["upcoming","Sắp tới"],["overdue","Quá hạn"],["done","Đã xong"]].map(([key,label]) => `<button class="${state.deadlineFilter === key ? "active" : ""}" data-deadline-filter="${key}" type="button">${label}</button>`).join("")}</div><span class="pill">${deadlines.length} mục</span></div>
    ${deadlines.length ? `<table class="data-table"><thead><tr><th>Deadline</th><th>Môn học</th><th>Thời hạn</th><th>Ưu tiên</th><th>Trạng thái</th><th></th></tr></thead><tbody>${deadlines.map((deadline) => {
      const course = courseById(deadline.courseId); const status = deadlineState(deadline);
      return `<tr><td><strong>${h(deadline.title)}</strong><br><small>${h(deadline.type || "Bài tập")} · ${Number(deadline.estimatedHours) || 0}h dự kiến</small></td><td><span class="course-dot" style="background:${h(course?.color || "var(--cream)")}"></span>${h(course?.name || "Không gắn môn")}</td><td>${h(formatDateTime(deadline.dueAt))}</td><td><span class="status-chip ${h(deadline.priority)}">${h({ high:"Cao",medium:"Vừa",low:"Thấp" }[deadline.priority] || "Vừa")}</span></td><td><span class="status-chip ${h(status)}">${h(deadlineLabel(deadline))}</span></td><td class="actions"><button class="icon-button" data-action="toggle-deadline" data-id="${h(deadline.id)}" type="button">${status === "done" ? "↶" : "✓"}</button><button class="icon-button" data-action="edit-deadline" data-id="${h(deadline.id)}" type="button">✎</button></td></tr>`;
    }).join("")}</tbody></table>` : `<div class="empty-state" style="margin:18px"><strong>Không có deadline phù hợp</strong><span>Đổi bộ lọc hoặc thêm deadline mới.</span></div>`}
  </article>`;
}

function renderGrades() {
  const courses = state.data.courses.filter((course) => matchesQuery(course.name, course.code, ...gradeStats(course.id).items.map((item) => item.title)));
  const grades = state.data.grades.filter((grade) => { const course = courseById(grade.courseId); return matchesQuery(grade.title, grade.category, course?.name); });
  return `<div class="grade-summary-grid">${courses.map((course) => {
    const stats = gradeStats(course.id); const score = stats.current;
    return `<article class="grade-summary" style="--course-color:${h(course.color)}"><header><i></i><strong>${h(course.code)} · ${h(course.name)}</strong></header><div class="grade-number"><strong>${score === null ? "—" : score.toFixed(1)}</strong><span>${gradeLetter(score)} · ${stats.scoredWeight}% đã có điểm</span></div><div class="grade-bar"><i style="width:${Math.min(100,stats.scoredWeight)}%"></i></div>${stats.needed !== null && stats.needed > 0 ? `<small>Cần TB ${stats.needed.toFixed(1)} ở ${100 - stats.scoredWeight}% còn lại để đạt mục tiêu.</small>` : ""}</article>`;
  }).join("")}</div>
  <article class="card table-card"><div class="table-toolbar"><div class="card-heading" style="margin:0"><div><h2>Điểm thành phần</h2><small>Điểm thang 10 · tính theo trọng số</small></div></div><span class="pill">Mục tiêu ${Number(state.data.meta.targetScore).toFixed(1)}</span></div>
    ${grades.length ? `<table class="data-table"><thead><tr><th>Thành phần</th><th>Môn học</th><th>Trọng số</th><th>Điểm</th><th>Đóng góp</th><th></th></tr></thead><tbody>${grades.map((grade) => { const course = courseById(grade.courseId); const score = grade.score === null || grade.score === "" ? null : Number(grade.score); return `<tr><td><strong>${h(grade.title)}</strong><br><small>${h(grade.category || "Đánh giá")}</small></td><td><span class="course-dot" style="background:${h(course?.color || "var(--cream)")}"></span>${h(course?.name || "—")}</td><td>${Number(grade.weight) || 0}%</td><td class="score">${score === null ? "—" : score.toFixed(1)}</td><td>${score === null ? "—" : (score * Number(grade.weight) / 100).toFixed(2)}</td><td class="actions"><button class="icon-button" data-action="edit-grade" data-id="${h(grade.id)}" type="button">✎</button></td></tr>`; }).join("")}</tbody></table>` : `<div class="empty-state" style="margin:18px"><strong>Chưa có điểm</strong><span>Thêm điểm thành phần ngay khi LMS công bố.</span></div>`}
  </article>`;
}

function renderPlanner() {
  const minutes = weeklyStudyMinutes();
  const goal = Number(state.data.meta.weeklyStudyGoalMinutes) || 600;
  const percent = Math.min(100, Math.round(minutes / goal * 100));
  const sessions = state.data.studySessions.filter((session) => { const course = courseById(session.courseId); return matchesQuery(session.title, session.notes, course?.name, session.customCourseName); }).sort((a, b) => localDate(a.startAt) - localDate(b.startAt));
  return `<div class="planner-grid"><article class="card"><div class="card-heading"><div><h2>Mục tiêu tuần</h2><small>${formatDate(startOfWeek(), { year:true })}–${formatDate(new Date(startOfWeek().getFullYear(),startOfWeek().getMonth(),startOfWeek().getDate()+6), { year:true })}</small></div></div><div class="goal-wrap"><div class="goal-ring" style="--goal:${percent * 3.6}deg"></div><div class="goal-ring-copy"><strong>${percent}%</strong><span>${Math.round(minutes/60*10)/10}/${Math.round(goal/60*10)/10} giờ</span></div></div><button class="secondary-button" data-action="edit-settings" type="button" style="width:100%;margin-top:16px">Đổi mục tiêu tuần</button></article>
    <article class="card"><div class="card-heading"><div><h2>Phiên tự học</h2><small>Ghi lại thời gian tập trung thực tế</small></div><button class="text-button" data-action="add-session" type="button">+ Lên lịch</button></div>
      ${sessions.length ? `<div class="session-list">${sessions.map((session) => { const course = courseById(session.courseId); return `<div class="session-item"><span class="date-box" style="background:${h(course?.color || "var(--yellow)")}"><strong>${h(localDate(session.startAt)?.getDate() || "—")}</strong><span>${h(SHORT_WEEKDAYS[localDate(session.startAt)?.getDay()] || "")}</span></span><span class="item-copy"><strong>${h(session.title)}</strong><span>${h(course?.name || session.customCourseName || "Tự học chung")} · ${h(formatDateTime(session.startAt))} · ${Number(session.durationMinutes) || 0} phút</span></span><span style="display:flex;gap:5px"><button class="icon-button" data-action="toggle-session" data-id="${h(session.id)}" type="button">${session.status === "done" ? "↶" : "✓"}</button><button class="icon-button" data-action="edit-session" data-id="${h(session.id)}" type="button">✎</button></span></div>`; }).join("")}</div>` : `<div class="empty-state"><strong>Chưa có phiên tự học</strong><span>Lên lịch một phiên tập trung để bắt đầu.</span></div>`}
    </article></div>`;
}

function normalizedAnswer(value) {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("vi").replace(/[^a-z0-9]+/g, " ").trim();
}

function quizAnswerIsCorrect(question, answer) {
  return normalizedAnswer(answer) === normalizedAnswer(question.correctAnswer);
}

function renderQuizPlayer(quiz) {
  const answers = state.quizAnswers[quiz.id] || {};
  const revealed = Boolean(state.quizRevealed[quiz.id]);
  const latestAttempt = quiz.attempts?.at(-1);
  const typeLabels = { multiple_choice:"Trắc nghiệm", true_false:"Đúng / Sai", short_answer:"Trả lời ngắn" };
  return `<article class="card quiz-player">
    <div class="quiz-player-head"><div><span class="pill">${h(courseById(quiz.courseId)?.code || "QUIZ")}</span><h2>${h(quiz.title)}</h2><p>${h(quiz.sourceSummary)}</p></div><div class="quiz-head-actions"><button class="text-button" data-action="retry-quiz" data-id="${h(quiz.id)}" type="button">Làm lại</button><button class="danger-button mini" data-action="delete-quiz" data-id="${h(quiz.id)}" type="button">Xóa</button></div></div>
    <div class="quiz-meta"><span>▤ ${quiz.questions.length} câu</span><span>◉ ${h(quiz.sourceFile)}</span><span>◷ ${h(formatDate(quiz.createdAt, { year:true }))}</span>${latestAttempt ? `<span class="quiz-score-chip">Lần gần nhất ${latestAttempt.correct}/${latestAttempt.total}</span>` : ""}</div>
    <div class="question-list">${quiz.questions.map((question,index) => {
      const questionId = String(question.id || `q-${index + 1}`);
      const answer = answers[questionId] || "";
      const correct = revealed && quizAnswerIsCorrect(question,answer);
      const options = question.type === "short_answer" ? `<input class="short-answer ${revealed ? (correct ? "correct-answer" : "wrong-answer") : ""}" data-quiz-answer data-quiz-id="${h(quiz.id)}" data-question-id="${h(questionId)}" type="text" value="${h(answer)}" placeholder="Nhập câu trả lời của bạn…" ${revealed ? "disabled" : ""} />` : `<div class="answer-options">${(question.options || []).map((option,optionIndex) => `<label class="answer-option ${answer === option ? "selected" : ""} ${revealed && option === question.correctAnswer ? "correct-option" : ""} ${revealed && answer === option && option !== question.correctAnswer ? "wrong-option" : ""}"><input data-quiz-answer data-quiz-id="${h(quiz.id)}" data-question-id="${h(questionId)}" type="radio" name="${h(quiz.id)}-${h(questionId)}" value="${h(option)}" ${answer === option ? "checked" : ""} ${revealed ? "disabled" : ""} /><b>${String.fromCharCode(65 + optionIndex)}</b><span>${h(option)}</span></label>`).join("")}</div>`;
      return `<section class="question-card ${revealed ? (correct ? "correct" : "incorrect") : ""}"><header><span>CÂU ${index + 1}</span><em>${h(typeLabels[question.type] || "Câu hỏi")}</em></header><h3>${h(question.prompt)}</h3>${options}${revealed ? `<div class="answer-feedback"><strong>${correct ? "Chính xác" : `Đáp án: ${h(question.correctAnswer)}`}</strong><p>${h(question.explanation)}</p><small>${h(question.sourceReference || "Theo tài liệu đã tải lên")}</small></div>` : ""}</section>`;
    }).join("")}</div>
    <div class="quiz-submit-bar">${revealed && latestAttempt ? `<div><strong>${latestAttempt.correct}/${latestAttempt.total} câu đúng · ${latestAttempt.percentage}%</strong><span>Kết quả đã lưu local vào bài kiểm tra này.</span></div>` : `<div><strong>Hoàn thành tất cả câu hỏi</strong><span>Đáp án và giải thích chỉ hiện sau khi chấm.</span></div>`}<button class="primary-button" data-action="${revealed ? "retry-quiz" : "submit-quiz"}" data-id="${h(quiz.id)}" type="button">${revealed ? "Làm lại bài" : "Chấm bài"}</button></div>
  </article>`;
}

function renderQuizzes() {
  const settings = state.quizSettings;
  if (!settings.courseId) settings.courseId = state.data.courses[0]?.id || "";
  const filtered = state.data.quizzes.filter((quiz) => matchesQuery(quiz.title, quiz.sourceFile, quiz.sourceSummary, courseById(quiz.courseId)?.name));
  if (!filtered.some((quiz) => quiz.id === state.selectedQuizId)) state.selectedQuizId = filtered[0]?.id || "";
  const selected = state.data.quizzes.find((quiz) => quiz.id === state.selectedQuizId);
  const fileName = state.quizFile?.name || "Kéo thả PDF hoặc PowerPoint vào đây";
  return `<div class="quiz-layout">
    <article class="card quiz-generator"><div class="card-heading"><div><h2>Tạo bài kiểm tra mới</h2><small>Chỉ sử dụng nội dung trong slide bạn gửi</small></div><span class="status-chip">COCKPIT</span></div>
      <form id="quizGeneratorForm">
        <label class="field wide"><span>Môn học</span><select name="courseId">${state.data.courses.map((course) => `<option value="${h(course.id)}" ${course.id === settings.courseId ? "selected" : ""}>${h(course.code)} · ${h(course.name)}</option>`).join("")}</select></label>
        <input class="hidden" id="quizFileInput" type="file" accept="application/pdf,.pdf,application/vnd.openxmlformats-officedocument.presentationml.presentation,.pptx" />
        <button class="quiz-dropzone ${state.quizFile ? "has-file" : ""}" id="quizDropzone" type="button" ${state.quizGenerating ? "disabled" : ""}><span class="quiz-file-icon">${state.quizFile ? "✓" : "⇧"}</span><strong>${h(fileName)}</strong><small>${state.quizFile ? `${Math.round(state.quizFile.size / 1024)} KB · Nhấn để đổi file` : "Tối đa 20 MB · hỗ trợ .pdf và .pptx"}</small></button>
        <div class="quiz-form-grid">
          <label class="field"><span>Số câu</span><input name="questionCount" type="number" min="3" max="30" value="${h(settings.questionCount)}" required /></label>
          <label class="field"><span>Độ khó</span><select name="difficulty"><option value="easy" ${settings.difficulty === "easy" ? "selected" : ""}>Cơ bản</option><option value="medium" ${settings.difficulty === "medium" ? "selected" : ""}>Vừa</option><option value="hard" ${settings.difficulty === "hard" ? "selected" : ""}>Nâng cao</option></select></label>
          <label class="field"><span>Dạng câu hỏi</span><select name="questionType"><option value="mixed" ${settings.questionType === "mixed" ? "selected" : ""}>Kết hợp</option><option value="multiple_choice" ${settings.questionType === "multiple_choice" ? "selected" : ""}>Trắc nghiệm</option><option value="true_false" ${settings.questionType === "true_false" ? "selected" : ""}>Đúng / Sai</option><option value="short_answer" ${settings.questionType === "short_answer" ? "selected" : ""}>Trả lời ngắn</option></select></label>
          <label class="field"><span>Ngôn ngữ</span><select name="language"><option value="vi" ${settings.language === "vi" ? "selected" : ""}>Tiếng Việt</option><option value="en" ${settings.language === "en" ? "selected" : ""}>English</option></select></label>
        </div>
        <label class="field wide"><span>Yêu cầu thêm (tùy chọn)</span><textarea name="focus" placeholder="Ví dụ: tập trung chương 2, ưu tiên bài tập tính toán…">${h(settings.focus)}</textarea></label>
        <button class="primary-button generate-quiz-button" type="submit" ${state.quizGenerating ? "disabled" : ""}>${state.quizGenerating ? `<span class="quiz-ai-loader"><img src="logo-study-circle.png" alt="" /></span><span>Đang đọc slide và tạo câu hỏi<span class="loading-dots"><i></i><i></i><i></i></span></span>` : "Tạo bài kiểm tra"}</button>
      </form>
    </article>
    <div class="quiz-content">
      <article class="card saved-quizzes"><div class="card-heading"><div><h2>Bài đã tạo</h2><small>${state.data.quizzes.length} bài lưu trên máy</small></div></div>${filtered.length ? `<div class="saved-quiz-list">${filtered.map((quiz) => { const latest = quiz.attempts?.at(-1); return `<button class="saved-quiz-item ${quiz.id === state.selectedQuizId ? "active" : ""}" data-select-quiz="${h(quiz.id)}" type="button"><span class="date-box"><strong>${quiz.questions.length}</strong><span>CÂU</span></span><span class="item-copy"><strong>${h(quiz.title)}</strong><span>${h(courseById(quiz.courseId)?.name || "Không gắn môn")} · ${h(quiz.sourceFile)}</span></span>${latest ? `<span class="status-chip done">${latest.percentage}%</span>` : `<span class="status-chip">Chưa làm</span>`}</button>`; }).join("")}</div>` : `<div class="empty-state"><strong>Chưa có bài kiểm tra</strong><span>Tải slide lên để tạo bài đầu tiên.</span></div>`}</article>
      ${selected ? renderQuizPlayer(selected) : ""}
    </div>
  </div>`;
}

function render() {
  if (!state.data) return;
  updateShell();
  const renderers = { dashboard: renderDashboard, courses: renderCourses, quizzes: renderQuizzes, schedule: renderSchedule, deadlines: renderDeadlines, grades: renderGrades, planner: renderPlanner };
  elements.root.innerHTML = renderers[state.view]();
}

function field(label, name, value = "", type = "text", options = {}) {
  const wide = options.wide ? " wide" : "";
  const required = options.required ? " required" : "";
  const min = options.min !== undefined ? ` min="${h(options.min)}"` : "";
  const max = options.max !== undefined ? ` max="${h(options.max)}"` : "";
  const step = options.step !== undefined ? ` step="${h(options.step)}"` : "";
  return `<label class="field${wide}"><span>${h(label)}</span><input name="${h(name)}" type="${h(type)}" value="${h(value)}"${required}${min}${max}${step} /></label>`;
}

function textareaField(label, name, value = "", wide = true) {
  return `<label class="field${wide ? " wide" : ""}"><span>${h(label)}</span><textarea name="${h(name)}">${h(value)}</textarea></label>`;
}

function selectField(label, name, value, options, wide = false) {
  return `<label class="field${wide ? " wide" : ""}"><span>${h(label)}</span><select name="${h(name)}">${options.map(([optionValue, optionLabel]) => `<option value="${h(optionValue)}" ${String(optionValue) === String(value) ? "selected" : ""}>${h(optionLabel)}</option>`).join("")}</select></label>`;
}

function courseOptions(selected = "", includeEmpty = false, includeOther = false) {
  const options = state.data.courses.map((course) => [course.id, `${course.code} · ${course.name}`]);
  if (includeEmpty) options.unshift(["", "Không gắn môn"]);
  if (includeOther) options.push(["__other__", "+ Môn học khác"]);
  return selectField("Môn học", "courseId", selected, options, true);
}

function openModal(type, id = "", parentId = "") {
  state.modal = { type, id, parentId };
  let title = "";
  let body = "";
  let canDelete = Boolean(id);
  elements.dialogEyebrow.textContent = "CẬP NHẬT DỮ LIỆU LOCAL";

  if (type === "settings") {
    const meta = state.data.meta; title = "Cài đặt học kỳ"; canDelete = false;
    body = field("Tên hiển thị", "studentName", meta.studentName, "text", { required:true }) + field("Tên học kỳ", "semester", meta.semester, "text", { required:true }) + field("Ngày bắt đầu", "semesterStart", meta.semesterStart, "date", { required:true }) + field("Ngày kết thúc", "semesterEnd", meta.semesterEnd, "date", { required:true }) + field("Mục tiêu điểm", "targetScore", meta.targetScore, "number", { min:0,max:10,step:.1 }) + field("Mục tiêu tự học mỗi tuần (phút)", "weeklyStudyGoalMinutes", meta.weeklyStudyGoalMinutes, "number", { min:0,max:10080,step:30 });
  } else if (type === "course") {
    const item = id ? courseById(id) : { color:"#a5dcff",weekday:2,startTime:"07:45",endTime:"11:30",startDate:state.data.meta.semesterStart,endDate:state.data.meta.semesterEnd,status:"upcoming" };
    title = id ? "Sửa môn học" : parentId === "schedule" ? "Thêm lịch học chính thức" : "Thêm môn học";
    body = field("Tên môn", "name", item.name, "text", { required:true,wide:true }) + field("Mã ngắn", "code", item.code, "text", { required:true }) + field("Tên tiếng Anh", "nameEn", item.nameEn) + selectField("Ngày học", "weekday", item.weekday, WEEKDAYS.map((label,index) => [index,label])) + selectField("Trạng thái", "status", item.status, [["upcoming","Sắp học"],["active","Đang học"],["completed","Đã kết thúc"]]) + field("Giờ bắt đầu", "startTime", item.startTime, "time", { required:true }) + field("Giờ kết thúc", "endTime", item.endTime, "time", { required:true }) + field("Ngày bắt đầu", "startDate", item.startDate, "date", { required:true }) + field("Ngày kết thúc", "endDate", item.endDate, "date", { required:true }) + field("Phòng học", "room", item.room) + field("Giảng viên", "lecturer", item.lecturer) + field("Màu nhận diện", "color", item.color, "color") + textareaField("Công cụ và ghi chú chung", "toolchain", item.toolchain);
  } else if (type === "module") {
    const course = courseById(parentId); const item = id ? course.modules.find((module) => module.id === id) : { status:"todo" };
    title = id ? "Sửa nội dung môn học" : "Thêm nội dung môn học";
    body = field("Tên chương/module/chủ đề", "title", item.title, "text", { required:true,wide:true }) + selectField("Trạng thái", "status", item.status, [["todo","Chưa học"],["in_progress","Đang học"],["done","Hoàn thành"]], true) + textareaField("Ghi chú", "notes", item.notes);
  } else if (type === "deadline") {
    const item = id ? state.data.deadlines.find((deadline) => deadline.id === id) : { courseId:state.selectedCourseId || state.data.courses[0]?.id, type:"Bài tập", priority:"medium", status:"planned", estimatedHours:2, dueAt:"" };
    title = id ? "Sửa deadline" : "Thêm deadline";
    body = field("Tên deadline", "title", item.title, "text", { required:true,wide:true }) + courseOptions(item.courseId) + field("Loại", "type", item.type) + field("Thời hạn", "dueAt", datetimeLocalValue(item.dueAt), "datetime-local", { required:true,wide:true }) + selectField("Mức ưu tiên", "priority", item.priority, [["high","Cao"],["medium","Vừa"],["low","Thấp"]]) + selectField("Trạng thái", "status", item.status, [["planned","Sắp tới"],["in_progress","Đang làm"],["done","Đã xong"]]) + field("Số giờ dự kiến", "estimatedHours", item.estimatedHours, "number", { min:0,max:500,step:.5 }) + textareaField("Ghi chú / bước tiếp theo", "notes", item.notes);
  } else if (type === "grade") {
    const item = id ? state.data.grades.find((grade) => grade.id === id) : { courseId:state.selectedCourseId || state.data.courses[0]?.id, category:"Quá trình", weight:10, score:"", status:"planned" };
    title = id ? "Sửa điểm thành phần" : "Thêm điểm thành phần";
    body = field("Tên thành phần", "title", item.title, "text", { required:true,wide:true }) + courseOptions(item.courseId) + field("Nhóm đánh giá", "category", item.category) + field("Trọng số (%)", "weight", item.weight, "number", { min:0,max:100,step:.1,required:true }) + field("Điểm thang 10 (để trống nếu chưa có)", "score", item.score ?? "", "number", { min:0,max:10,step:.1 }) + field("Hạn dự kiến", "dueDate", item.dueDate || "", "date") + selectField("Trạng thái", "status", item.status, [["planned","Chưa có điểm"],["graded","Đã có điểm"]]) + textareaField("Nhận xét / feedback", "notes", item.notes);
  } else if (type === "session") {
    const nextHour = new Date(); nextHour.setHours(nextHour.getHours() + 1, 0, 0, 0);
    const item = id ? state.data.studySessions.find((session) => session.id === id) : { courseId:state.selectedCourseId || "", title:"Phiên tự học tập trung", startAt:`${isoDate(nextHour)}T${String(nextHour.getHours()).padStart(2,"0")}:00`, durationMinutes:90, status:"planned" };
    const hasCustomCourse = Boolean(item.customCourseName);
    const customCourseField = `<label class="field wide ${hasCustomCourse ? "" : "hidden"}" id="customCourseField"><span>Tên môn học khác</span><input name="customCourseName" type="text" value="${h(item.customCourseName || "")}" placeholder="Nhập tên môn bạn muốn học" ${hasCustomCourse ? "required" : "disabled"} /></label>`;
    title = id ? "Sửa phiên tự học" : "Lên lịch tự học";
    body = field("Mục tiêu phiên học", "title", item.title, "text", { required:true,wide:true }) + courseOptions(hasCustomCourse ? "__other__" : item.courseId, true, true) + customCourseField + field("Bắt đầu", "startAt", datetimeLocalValue(item.startAt), "datetime-local", { required:true }) + field("Thời lượng (phút)", "durationMinutes", item.durationMinutes, "number", { min:15,max:720,step:15 }) + selectField("Trạng thái", "status", item.status, [["planned","Đã lên lịch"],["in_progress","Đang học"],["done","Hoàn thành"],["skipped","Bỏ qua"]]) + textareaField("Ghi chú", "notes", item.notes);
  }

  elements.dialogTitle.textContent = title;
  elements.dialogBody.innerHTML = body;
  elements.deleteButton.classList.toggle("hidden", !canDelete);
  elements.modal.classList.remove("hidden");
  elements.modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  setTimeout(() => elements.dialogBody.querySelector("input,select,textarea")?.focus(), 40);
}

function closeModal() {
  elements.modal.classList.add("hidden");
  elements.modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  state.modal = null;
}

function formValue(formData, key) {
  return String(formData.get(key) || "").trim();
}

async function submitModal(event) {
  event.preventDefault();
  const { type, id, parentId } = state.modal;
  const form = new FormData(elements.modalForm);
  if (type === "settings") {
    Object.assign(state.data.meta, { studentName:formValue(form,"studentName"), semester:formValue(form,"semester"), semesterStart:formValue(form,"semesterStart"), semesterEnd:formValue(form,"semesterEnd"), targetScore:Number(formValue(form,"targetScore")) || 8, weeklyStudyGoalMinutes:Number(formValue(form,"weeklyStudyGoalMinutes")) || 600 });
  } else if (type === "course") {
    const existing = id ? courseById(id) : null;
    const name = formValue(form,"name");
    const startTime = formValue(form,"startTime");
    const item = { id: existing?.id || slugify(name) || uid("course"), code:formValue(form,"code"), name, nameEn:formValue(form,"nameEn"), color:formValue(form,"color") || "#a5dcff", weekday:Number(formValue(form,"weekday")), period:startTime < "12:00" ? "morning" : "afternoon", startTime, endTime:formValue(form,"endTime"), startDate:formValue(form,"startDate"), endDate:formValue(form,"endDate"), room:formValue(form,"room"), lecturer:formValue(form,"lecturer"), status:formValue(form,"status"), toolchain:formValue(form,"toolchain"), software:existing?.software || [], modules:existing?.modules || [] };
    if (existing) Object.assign(existing,item); else state.data.courses.push(item);
    state.selectedCourseId = item.id;
  } else if (type === "module") {
    const course = courseById(parentId); const existing = id ? course.modules.find((module) => module.id === id) : null;
    const item = { id:existing?.id || uid("module"), title:formValue(form,"title"), status:formValue(form,"status"), notes:formValue(form,"notes") };
    if (existing) Object.assign(existing,item); else course.modules.push(item);
  } else if (type === "deadline") {
    const existing = id ? state.data.deadlines.find((deadline) => deadline.id === id) : null;
    const item = { id:existing?.id || uid("deadline"), courseId:formValue(form,"courseId"), title:formValue(form,"title"), type:formValue(form,"type"), dueAt:formValue(form,"dueAt"), priority:formValue(form,"priority"), status:formValue(form,"status"), estimatedHours:Number(formValue(form,"estimatedHours")) || 0, notes:formValue(form,"notes") };
    if (existing) Object.assign(existing,item); else state.data.deadlines.push(item);
  } else if (type === "grade") {
    const existing = id ? state.data.grades.find((grade) => grade.id === id) : null;
    const rawScore = formValue(form,"score");
    const item = { id:existing?.id || uid("grade"), courseId:formValue(form,"courseId"), title:formValue(form,"title"), category:formValue(form,"category"), weight:Number(formValue(form,"weight")) || 0, score:rawScore === "" ? null : Number(rawScore), dueDate:formValue(form,"dueDate"), status:rawScore === "" ? formValue(form,"status") : "graded", notes:formValue(form,"notes") };
    const otherWeight = state.data.grades.filter((grade) => grade.courseId === item.courseId && grade.id !== item.id).reduce((sum, grade) => sum + (Number(grade.weight) || 0), 0);
    if (otherWeight + item.weight > 100) {
      showToast(`Tổng trọng số môn này sẽ là ${otherWeight + item.weight}%. Hãy giữ tối đa 100%.`);
      return;
    }
    if (existing) Object.assign(existing,item); else state.data.grades.push(item);
  } else if (type === "session") {
    const existing = id ? state.data.studySessions.find((session) => session.id === id) : null;
    const selectedCourseId = formValue(form,"courseId");
    const item = { id:existing?.id || uid("session"), courseId:selectedCourseId === "__other__" ? "" : selectedCourseId, customCourseName:selectedCourseId === "__other__" ? formValue(form,"customCourseName") : "", title:formValue(form,"title"), startAt:formValue(form,"startAt"), durationMinutes:Number(formValue(form,"durationMinutes")) || 60, status:formValue(form,"status"), notes:formValue(form,"notes") };
    if (existing) Object.assign(existing,item); else state.data.studySessions.push(item);
    if (state.view === "schedule" && item.startAt) state.scheduleDate = item.startAt.slice(0,10);
  }
  closeModal(); render(); await persistData();
}

async function deleteCurrentItem() {
  const { type, id, parentId } = state.modal;
  if (!confirm("Bạn chắc chắn muốn xóa mục này? Thao tác sẽ được lưu ngay.")) return;
  if (type === "course") {
    state.data.courses = state.data.courses.filter((item) => item.id !== id);
    state.data.deadlines = state.data.deadlines.filter((item) => item.courseId !== id);
    state.data.grades = state.data.grades.filter((item) => item.courseId !== id);
    state.data.studySessions = state.data.studySessions.filter((item) => item.courseId !== id);
    state.data.quizzes = state.data.quizzes.filter((item) => item.courseId !== id);
    state.selectedCourseId = state.data.courses[0]?.id || "";
  } else if (type === "module") {
    const course = courseById(parentId); course.modules = course.modules.filter((item) => item.id !== id);
  } else if (type === "deadline") state.data.deadlines = state.data.deadlines.filter((item) => item.id !== id);
  else if (type === "grade") state.data.grades = state.data.grades.filter((item) => item.id !== id);
  else if (type === "session") state.data.studySessions = state.data.studySessions.filter((item) => item.id !== id);
  closeModal(); render(); await persistData("Đã xóa mục");
}

function setQuizFile(file) {
  if (!file) return;
  const extension = file.name.split(".").pop()?.toLowerCase();
  if (!['pdf','pptx'].includes(extension)) { showToast("Chỉ chấp nhận slide PDF hoặc PPTX"); return; }
  if (file.size > 20 * 1024 * 1024) { showToast("File slide phải nhỏ hơn hoặc bằng 20 MB"); return; }
  state.quizFile = file;
  render();
  showToast(`Đã chọn ${file.name}`);
}

function fileAsDataUrl(file) {
  return new Promise((resolve,reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", () => reject(new Error("Không thể đọc file slide.")));
    reader.readAsDataURL(file);
  });
}

async function handleQuizGeneratorSubmit(event) {
  event.preventDefault();
  if (!state.quizFile) { showToast("Hãy chọn một file PDF hoặc PPTX trước"); return; }
  const form = new FormData(event.target);
  state.quizSettings = {
    courseId: formValue(form,"courseId"),
    questionCount: Number(formValue(form,"questionCount")) || 10,
    difficulty: formValue(form,"difficulty"),
    questionType: formValue(form,"questionType"),
    language: formValue(form,"language"),
    focus: formValue(form,"focus"),
  };
  const course = courseById(state.quizSettings.courseId);
  state.quizGenerating = true;
  render();
  try {
    const fileData = await fileAsDataUrl(state.quizFile);
    const response = await fetch("/api/generate-quiz", {
      method: "POST",
      headers: { "Content-Type":"application/json" },
      body: JSON.stringify({
        ...state.quizSettings,
        courseName: course?.name || "Môn học",
        file: { filename:state.quizFile.name, fileData },
      }),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`);
    const now = new Date().toISOString();
    const quiz = {
      id: uid("quiz"),
      courseId: state.quizSettings.courseId,
      title: result.quiz.title,
      sourceSummary: result.quiz.sourceSummary,
      sourceFile: result.sourceFile || state.quizFile.name,
      createdAt: now,
      model: result.model || "Cockpit",
      settings: { ...state.quizSettings },
      questions: result.quiz.questions.map((question,index) => ({ ...question, id:`q-${index + 1}` })),
      attempts: [],
    };
    state.data.quizzes.unshift(quiz);
    state.selectedQuizId = quiz.id;
    state.quizAnswers[quiz.id] = {};
    state.quizFile = null;
    await persistData("Đã tạo và lưu bài kiểm tra");
  } catch (error) {
    showToast(`Không thể tạo bài kiểm tra: ${error.message}`);
  } finally {
    state.quizGenerating = false;
    render();
  }
}

async function submitQuiz(quizId) {
  const quiz = state.data.quizzes.find((item) => item.id === quizId);
  if (!quiz) return;
  const answers = state.quizAnswers[quizId] || {};
  const missing = quiz.questions.some((question,index) => !String(answers[question.id || `q-${index + 1}`] || "").trim());
  if (missing) { showToast("Bạn hãy trả lời đủ các câu trước khi chấm"); return; }
  const correct = quiz.questions.reduce((sum,question,index) => sum + (quizAnswerIsCorrect(question,answers[question.id || `q-${index + 1}`]) ? 1 : 0),0);
  const total = quiz.questions.length;
  quiz.attempts ||= [];
  quiz.attempts.push({ id:uid("attempt"), completedAt:new Date().toISOString(), correct, total, percentage:Math.round(correct / total * 100) });
  state.quizRevealed[quizId] = true;
  render();
  await persistData("Đã lưu kết quả bài kiểm tra");
}

function retryQuiz(quizId) {
  state.quizAnswers[quizId] = {};
  state.quizRevealed[quizId] = false;
  render();
  document.querySelector(".quiz-player")?.scrollIntoView({ behavior:"smooth", block:"start" });
}

async function deleteQuiz(quizId) {
  if (!confirm("Bạn chắc chắn muốn xóa bài kiểm tra này?")) return;
  state.data.quizzes = state.data.quizzes.filter((quiz) => quiz.id !== quizId);
  delete state.quizAnswers[quizId];
  delete state.quizRevealed[quizId];
  state.selectedQuizId = state.data.quizzes[0]?.id || "";
  render();
  await persistData("Đã xóa bài kiểm tra");
}

async function handleRootClick(event) {
  const dropzone = event.target.closest("#quizDropzone");
  if (dropzone) { document.querySelector("#quizFileInput")?.click(); return; }
  const softwareButton = event.target.closest("[data-launch-software]");
  if (softwareButton) {
    const software = softwareButton.dataset.launchSoftware;
    softwareButton.disabled = true;
    softwareButton.classList.add("launching");
    try {
      const response = await fetch("/api/launch-software", { method:"POST", headers:{ "Content-Type":"application/json" }, body:JSON.stringify({ software }) });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`);
      showToast(`Đang mở ${result.label || software}`);
    } catch (error) {
      showToast(`Không thể mở ${software}: ${error.message}`);
    } finally {
      softwareButton.disabled = false;
      softwareButton.classList.remove("launching");
    }
    return;
  }
  const copyCommand = event.target.closest("[data-copy-command]");
  if (copyCommand) {
    try { await navigator.clipboard.writeText(copyCommand.dataset.copyCommand); showToast(`Đã sao chép: ${copyCommand.dataset.copyCommand}`); }
    catch { showToast(`Lệnh mở: ${copyCommand.dataset.copyCommand}`); }
    return;
  }
  const goView = event.target.closest("[data-go-view]");
  if (goView) { setView(goView.dataset.goView); return; }
  const courseSelect = event.target.closest("[data-select-course]");
  if (courseSelect) { state.selectedCourseId = courseSelect.dataset.selectCourse; setView("courses"); return; }
  const filter = event.target.closest("[data-deadline-filter]");
  if (filter) { state.deadlineFilter = filter.dataset.deadlineFilter; render(); return; }
  const quizSelect = event.target.closest("[data-select-quiz]");
  if (quizSelect) { state.selectedQuizId = quizSelect.dataset.selectQuiz; render(); return; }
  const scheduleShift = event.target.closest("[data-schedule-shift]");
  if (scheduleShift) {
    const date = localDate(state.scheduleDate) || new Date();
    date.setDate(date.getDate() + Number(scheduleShift.dataset.scheduleShift));
    state.scheduleDate = isoDate(date);
    render();
    return;
  }
  if (event.target.closest("[data-schedule-first]")) { state.scheduleDate = state.data.meta.semesterStart; render(); return; }
  const action = event.target.closest("[data-action]");
  if (!action) return;
  const id = action.dataset.id || ""; const courseId = action.dataset.courseId || "";
  if (action.dataset.action === "edit-course") openModal("course",id);
  else if (action.dataset.action === "add-module") openModal("module","",courseId);
  else if (action.dataset.action === "edit-module") openModal("module",id,courseId);
  else if (action.dataset.action === "edit-deadline") openModal("deadline",id);
  else if (action.dataset.action === "edit-grade") openModal("grade",id);
  else if (action.dataset.action === "edit-session") openModal("session",id);
  else if (action.dataset.action === "add-session") openModal("session");
  else if (action.dataset.action === "edit-settings") openModal("settings");
  else if (action.dataset.action === "submit-quiz") await submitQuiz(id);
  else if (action.dataset.action === "retry-quiz") retryQuiz(id);
  else if (action.dataset.action === "delete-quiz") await deleteQuiz(id);
  else if (action.dataset.action === "toggle-deadline") { const item = state.data.deadlines.find((entry) => entry.id === id); item.status = item.status === "done" ? "planned" : "done"; render(); await persistData(); }
  else if (action.dataset.action === "toggle-session") { const item = state.data.studySessions.find((entry) => entry.id === id); item.status = item.status === "done" ? "planned" : "done"; render(); await persistData(); }
}

async function handleRootChange(event) {
  const target = event.target;
  if (target.id === "scheduleDateInput") { state.scheduleDate = target.value; render(); return; }
  if (target.id === "quizFileInput") { setQuizFile(target.files?.[0]); return; }
  if (target.matches("[data-quiz-answer]")) {
    state.quizAnswers[target.dataset.quizId] ||= {};
    state.quizAnswers[target.dataset.quizId][target.dataset.questionId] = target.value;
    if (target.type === "radio") {
      target.closest(".answer-options")?.querySelectorAll(".answer-option").forEach((option) => option.classList.toggle("selected", option.querySelector("input")?.checked));
    }
    return;
  }
  if (target.dataset.action === "toggle-module") {
    const course = courseById(target.dataset.courseId);
    const module = course.modules.find((item) => item.id === target.dataset.id);
    module.status = target.checked ? "done" : "todo";
    render(); await persistData("Đã cập nhật tiến độ");
  }
}

function handlePrimaryAction() {
  if (state.view === "quizzes") { document.querySelector("#quizFileInput")?.click(); return; }
  if (state.view === "schedule") { openModal("course","","schedule"); return; }
  const types = { dashboard:"deadline", courses:"course", deadlines:"deadline", grades:"grade", planner:"session" };
  openModal(types[state.view]);
}

function exportData() {
  const blob = new Blob([JSON.stringify(state.data,null,2)], { type:"application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `study-manager-${isoDate(new Date())}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("Đã xuất bản sao lưu JSON");
}

async function importData() {
  const file = elements.importInput.files?.[0];
  if (!file) return;
  try {
    const imported = JSON.parse(await file.text());
    if (!imported.meta || !Array.isArray(imported.courses) || !Array.isArray(imported.deadlines) || !Array.isArray(imported.grades) || !Array.isArray(imported.studySessions)) throw new Error("Sai cấu trúc dữ liệu");
    if (!confirm(`Nhập bản sao lưu “${file.name}” sẽ thay toàn bộ dữ liệu hiện tại. Tiếp tục?`)) return;
    state.data = imported;
    state.selectedCourseId = imported.courses[0]?.id || "";
    render(); await persistData("Đã nhập bản sao lưu");
  } catch (error) {
    showToast(`Không thể nhập: ${error.message}`);
  } finally {
    elements.importInput.value = "";
  }
}

function openMenu() { document.body.classList.add("menu-open"); elements.menuButton.setAttribute("aria-expanded","true"); }
function closeMenu() { document.body.classList.remove("menu-open"); elements.menuButton.setAttribute("aria-expanded","false"); }

async function initialize() {
  try {
    const response = await fetch("/api/study-data", { cache:"no-store" });
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`);
    state.data = result;
    state.data.quizzes ||= [];
    state.selectedCourseId = result.courses[0]?.id || "";
    state.quizSettings.courseId = result.courses[0]?.id || "";
    state.selectedQuizId = state.data.quizzes[0]?.id || "";
    const today = isoDate(new Date());
    state.scheduleDate = today < result.meta.semesterStart ? result.meta.semesterStart : today > result.meta.semesterEnd ? result.meta.semesterEnd : today;
    elements.loading.classList.add("hidden");
    elements.root.classList.remove("hidden");
    setSaveStatus("ĐÃ LƯU");
    setView(state.view,false);
  } catch (error) {
    elements.loading.textContent = `Không thể đọc dữ liệu: ${error.message}`;
    elements.loading.classList.add("error");
    setSaveStatus("LỖI", "error");
  }
}

elements.nav.addEventListener("click", (event) => { const button = event.target.closest("button[data-view]"); if (button) setView(button.dataset.view); });
elements.root.addEventListener("click", handleRootClick);
elements.root.addEventListener("change", handleRootChange);
elements.root.addEventListener("input", (event) => {
  const target = event.target;
  if (!target.matches("[data-quiz-answer]")) return;
  state.quizAnswers[target.dataset.quizId] ||= {};
  state.quizAnswers[target.dataset.quizId][target.dataset.questionId] = target.value;
});
elements.root.addEventListener("submit", (event) => {
  if (event.target.id === "quizGeneratorForm") handleQuizGeneratorSubmit(event);
});
elements.root.addEventListener("dragover", (event) => {
  const dropzone = event.target.closest("#quizDropzone");
  if (!dropzone) return;
  event.preventDefault();
  dropzone.classList.add("dragging");
});
elements.root.addEventListener("dragleave", (event) => event.target.closest("#quizDropzone")?.classList.remove("dragging"));
elements.root.addEventListener("drop", (event) => {
  const dropzone = event.target.closest("#quizDropzone");
  if (!dropzone) return;
  event.preventDefault();
  dropzone.classList.remove("dragging");
  setQuizFile(event.dataTransfer?.files?.[0]);
});
elements.search.addEventListener("input", () => { state.query = elements.search.value; render(); });
elements.primaryAction.addEventListener("click", handlePrimaryAction);
elements.secondaryAction.addEventListener("click", () => openModal("settings"));
elements.modalForm.addEventListener("submit", submitModal);
elements.modalForm.addEventListener("change", (event) => {
  if (state.modal?.type !== "session" || event.target.name !== "courseId") return;
  const customField = elements.modalForm.querySelector("#customCourseField");
  const customInput = customField?.querySelector("input[name=customCourseName]");
  const showCustom = event.target.value === "__other__";
  customField?.classList.toggle("hidden", !showCustom);
  if (customInput) {
    customInput.disabled = !showCustom;
    customInput.required = showCustom;
    if (showCustom) customInput.focus();
  }
});
elements.deleteButton.addEventListener("click", deleteCurrentItem);
elements.modalClose.addEventListener("click", closeModal);
elements.cancelButton.addEventListener("click", closeModal);
elements.modalBackdrop.addEventListener("click", closeModal);
elements.exportButton.addEventListener("click", exportData);
elements.importButton.addEventListener("click", () => elements.importInput.click());
elements.importInput.addEventListener("change", importData);
elements.menuButton.addEventListener("click", openMenu);
elements.scrim.addEventListener("click", closeMenu);
window.addEventListener("keydown", (event) => {
  const editing = document.activeElement?.matches?.("input,textarea,select,[contenteditable=true]");
  if (event.key === "/" && !editing && elements.modal.classList.contains("hidden")) { event.preventDefault(); elements.search.focus(); }
  if (event.key === "Escape") { if (!elements.modal.classList.contains("hidden")) closeModal(); else closeMenu(); }
});
window.addEventListener("hashchange", () => setView(location.hash.slice(1),false));

initialize();
