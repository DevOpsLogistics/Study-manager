# Study Manager

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.10%2B-3776AB?logo=python&logoColor=white)](https://www.python.org/)
[![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)

Study Manager là ứng dụng quản lý học tập chạy local, tập trung toàn bộ môn
học, lịch học, deadline, điểm số, bài kiểm tra và kế hoạch tự học trên một giao
diện duy nhất. Dữ liệu được lưu ngay trên máy, không cần cơ sở dữ liệu hoặc dịch
vụ cloud.

## Tính năng

- Bảng tổng quan học kỳ, tiến độ và lớp học kế tiếp
- Quản lý môn học, module, công cụ và ghi chú
- Theo dõi lịch học theo ngày và học kỳ
- Quản lý deadline, trạng thái và mức ưu tiên
- Theo dõi điểm thành phần, trọng số và điểm mục tiêu
- Lập kế hoạch, ghi nhận thời lượng tự học hằng tuần
- Tạo bài kiểm tra từ PDF hoặc PowerPoint qua AI local tùy chọn
- Tìm kiếm nhanh môn học, deadline và nội dung
- Nhập và xuất bản sao lưu JSON
- Giao diện responsive cho desktop, tablet và mobile

## Công nghệ

- HTML5, CSS3 và JavaScript thuần
- Python `http.server` cho web server và API local
- JSON làm định dạng lưu trữ dữ liệu
- Không cần npm, bundler hoặc framework phía frontend

## Yêu cầu

- Python 3.10 trở lên
- Trình duyệt web hiện đại
- Linux có `xdg-open` nếu dùng script `launch-study.sh`

Các tính năng quản lý học tập cơ bản không cần kết nối Internet. Tính năng tạo
quiz bằng AI cần một API tương thích OpenAI Responses chạy local và công cụ
chuyển đổi tài liệu phù hợp, chẳng hạn LibreOffice hoặc Poppler.

## Chạy ứng dụng

Clone repository:

```bash
git clone https://github.com/DevOpsLogistics/Study-manager.git
cd Study-manager
```

Khởi động server:

```bash
python3 server.py
```

Sau đó mở:

```text
http://127.0.0.1:4173/study/
```

Trên Linux, có thể dùng launcher để tự khởi động server và mở trình duyệt:

```bash
chmod +x launch-study.sh
./launch-study.sh
```

## Cấu trúc dự án

```text
Study-manager/
├── study/
│   ├── index.html                    Khung giao diện chính
│   ├── styles.css                    Toàn bộ giao diện responsive
│   ├── app.js                        Trạng thái và logic ứng dụng
│   ├── data.json                     Dữ liệu học tập local
│   └── logo*.png                     Logo và biểu tượng ứng dụng
├── server.py                         Static server và API local
├── launch-study.sh                   Launcher dành cho Linux
├── LICENSE                           Giấy phép MIT
└── README.md                         Tài liệu dự án
```

## Dữ liệu local

Dữ liệu chính nằm tại [`study/data.json`](study/data.json). Khi người dùng cập
nhật dữ liệu trong giao diện, frontend gọi `PUT /api/study-data` và server ghi
trở lại file này theo định dạng JSON UTF-8.

Ứng dụng hỗ trợ:

- **Xuất dữ liệu JSON:** tải một bản sao lưu về máy.
- **Nhập bản sao lưu:** khôi phục dữ liệu từ file JSON hợp lệ.

Nên sao lưu `study/data.json` trước khi thay đổi dữ liệu hàng loạt. Không commit
thông tin cá nhân hoặc lịch học riêng tư nếu repository được đặt ở chế độ công
khai.

## API chính

| Phương thức | Endpoint | Mục đích |
| --- | --- | --- |
| `GET` | `/api/study-data` | Đọc dữ liệu học tập |
| `PUT` | `/api/study-data` | Kiểm tra và lưu dữ liệu học tập |
| `POST` | `/api/generate-quiz` | Tạo quiz từ slide bằng AI local |
| `POST` | `/api/launch-software` | Mở công cụ học tập được cho phép |

Server chỉ lắng nghe tại `127.0.0.1:4173` theo mặc định để tránh công khai API
ra mạng ngoài.

## Cấu hình AI tùy chọn

Tính năng tạo quiz tìm cấu hình API theo thứ tự:

1. Biến môi trường `COCKPIT_API_KEY` và `COCKPIT_BASE_URL`.
2. File cấu hình local `~/.antigravity_cockpit/codex_local_access.json`.

Ví dụ:

```bash
export COCKPIT_BASE_URL=http://127.0.0.1:PORT/v1
export COCKPIT_API_KEY=YOUR_LOCAL_API_KEY
python3 server.py
```

Không đưa API key hoặc file cấu hình cá nhân vào Git.

## Kiểm tra source

Các kiểm tra nhanh không cần cài dependency:

```bash
python3 -m py_compile server.py
python3 -m json.tool study/data.json >/dev/null
node --check study/app.js
```

`node --check` chỉ dùng để kiểm tra cú pháp JavaScript; Node.js không bắt buộc
để chạy ứng dụng.

## Đóng góp

1. Tạo branch mới từ `master`.
2. Thực hiện thay đổi có phạm vi rõ ràng.
3. Chạy các lệnh kiểm tra source ở trên.
4. Kiểm tra thủ công giao diện tại kích thước desktop và mobile.
5. Tạo pull request kèm mô tả thay đổi.

## Bảo mật và riêng tư

- Server được thiết kế để chạy trên loopback, không nên bind công khai nếu chưa
  bổ sung xác thực.
- Không commit token, API key, tài liệu học tập riêng tư hoặc dữ liệu định danh.
- Hãy xem lại `study/data.json` trước khi fork hoặc công khai repository.

## Giấy phép

Mã nguồn được phát hành theo [MIT License](LICENSE). Giấy phép cho phép sử dụng,
sao chép, chỉnh sửa và phân phối phần mềm với điều kiện giữ lại thông báo bản
quyền và nội dung giấy phép.

Tên sản phẩm, logo, tài liệu học tập và tài sản của bên thứ ba (nếu có) vẫn
thuộc quyền sở hữu của chủ sở hữu tương ứng; MIT License không cấp quyền sử dụng
nhãn hiệu.
