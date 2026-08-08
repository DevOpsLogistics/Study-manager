(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const z={en:{navProduct:"Deck",navGithub:"GitHub",heroLabel:"// native macOS terminal for agent CLIs",headlineLead:"Run the grid.",headlineTail:"Keep every agent in sight.",subhead:"SpaceVibe Deck is a native macOS terminal built to launch, watch, and steer AI coding agents in parallel.",primaryCta:"Watch the 16-sec demo",secondaryCta:"View on GitHub",localeLabel:"Language",demoLabel:"// see it run",demoTitle:"Sixteen seconds. One take.",demoBody:"The Open board reopens a remembered workspace, ⏎ puts three agents side by side, one finishes and one asks for you — ⌘⇧A jumps to it, ⌘E gives it 65% of the layout.",demoAria:"agents in parallel",demoPlay:"Play the demo",demoFullscreen:"Fullscreen",demoChaptersLabel:"Jump to a moment",demoFailed:"The demo could not load. Reload the page to try again.",demoCh1:"Open board",demoCh2:"Three agents",demoCh3:"⌘⇧A jump",demoCh4:"⌘E expand",tourKicker:"// from folder to full formation",tourCh1Title:"Start from a known formation.",tourCh1Body:"The Open board remembers each project's layout preset and agent. Reopening your whole team is one keystroke.",tourCh2Title:"Give every pane an agent.",tourCh2Body:"Pick an agent once — Deck launches it into every pane, chrome tinted per agent so you can read the room at a glance.",tourCh3Title:"See the system. Work the detail.",tourCh3Body:"Focus Expand (⌘E) grows the active pane to 65% while every other agent stays in sight.",finaleLabel:"// what you keep",downloadMac:"Download for macOS",downloadWin:"Download for Windows",comingSoon:"coming soon",finaleTitle:"Your shell, intact.",proofPtyTitle:"Real PTY, real shell",proofPtyBody:"Every pane runs your login shell ($SHELL -l) — PATH, aliases, and dotfiles just work.",proofLocalTitle:"Local-first, no telemetry",proofLocalBody:"Everything stays on your machine — no accounts, no tracking, no network beyond what your agents do.",proofNativeTitle:"Native Tauri 2, no Electron",proofNativeBody:"A lightweight native shell that stays out of your way.",scSplit:"split",scSplitH:"split down",scTab:"new tab",scExpand:"focus expand",scFind:"find",scClear:"clear",footerTagline:"A native macOS terminal for running AI agent CLIs side by side.",footerColProduct:"Product",footerColProject:"Project",footerReleases:"Releases",footerIssues:"Issues",footerLicense:"MIT License",footerBuilt:"Built with Tauri 2 · xterm.js · Preact"},vi:{navProduct:"Deck",navGithub:"GitHub",heroLabel:"// terminal macOS native cho agent CLI",headlineLead:"Vận hành cả đội hình.",headlineTail:"Không agent nào rời khỏi tầm mắt.",subhead:"SpaceVibe Deck là terminal macOS native để khởi chạy, quan sát và điều phối nhiều AI coding agent song song.",primaryCta:"Xem demo 16 giây",secondaryCta:"Xem trên GitHub",localeLabel:"Ngôn ngữ",demoLabel:"// xem nó chạy",demoTitle:"Mười sáu giây. Một mạch.",demoBody:"Open board mở lại workspace đã nhớ, ⏎ dựng ba agent cạnh nhau, một agent xong việc và một agent cần bạn — ⌘⇧A nhảy tới nó, ⌘E nhường cho nó 65% layout.",demoAria:"nhiều agent chạy song song",demoPlay:"Phát demo",demoFullscreen:"Toàn màn hình",demoChaptersLabel:"Nhảy tới một khoảnh khắc",demoFailed:"Không tải được demo. Tải lại trang để thử lần nữa.",demoCh1:"Open board",demoCh2:"Ba agent",demoCh3:"⌘⇧A nhảy focus",demoCh4:"⌘E mở rộng",tourKicker:"// từ thư mục đến cả đội hình",tourCh1Title:"Bắt đầu từ đội hình quen thuộc.",tourCh1Body:"Open board nhớ sẵn layout preset và agent của từng dự án — mở lại cả đội chỉ mất một phím.",tourCh2Title:"Giao mỗi pane một agent.",tourCh2Body:"Chọn agent một lần — Deck khởi chạy vào mọi pane, viền màu theo từng agent để nhìn một cái là biết ai đang làm gì.",tourCh3Title:"Nhìn toàn cảnh. Làm chi tiết.",tourCh3Body:"Focus Expand (⌘E) nới pane đang focus lên 65%, các agent còn lại vẫn trong tầm mắt.",finaleLabel:"// những thứ bạn giữ nguyên",downloadMac:"Tải cho macOS",downloadWin:"Tải cho Windows",comingSoon:"sắp có",finaleTitle:"Shell của bạn, nguyên vẹn.",proofPtyTitle:"PTY thật, shell thật",proofPtyBody:"Mỗi pane chạy đúng login shell của bạn ($SHELL -l) — PATH, alias, dotfiles hoạt động y nguyên.",proofLocalTitle:"Local-first, không telemetry",proofLocalBody:"Mọi thứ nằm trên máy bạn — không tài khoản, không theo dõi, không kết nối nào ngoài của chính agent.",proofNativeTitle:"Tauri 2 native, không Electron",proofNativeBody:"Vỏ native gọn nhẹ, không choán tài nguyên máy.",scSplit:"chia dọc",scSplitH:"chia ngang",scTab:"tab mới",scExpand:"focus expand",scFind:"tìm kiếm",scClear:"xoá buffer",footerTagline:"Terminal macOS native để chạy song song nhiều AI agent CLI.",footerColProduct:"Sản phẩm",footerColProject:"Dự án",footerReleases:"Bản phát hành",footerIssues:"Báo lỗi",footerLicense:"Giấy phép MIT",footerBuilt:"Xây bằng Tauri 2 · xterm.js · Preact"}};function je(t,e){const s=new URLSearchParams(t).get("lang");return s==="en"||s==="vi"?s:e.toLowerCase().startsWith("vi")?"vi":"en"}const $=Object.freeze({name:"Deck",iconSrc:new URL("data:image/svg+xml,%3csvg%20viewBox='0%200%20512%20512'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3clinearGradient%20id='bg'%20x1='0'%20y1='0'%20x2='0'%20y2='1'%3e%3cstop%20offset='0'%20stop-color='%236f8ff7'/%3e%3cstop%20offset='1'%20stop-color='%232e4fd8'/%3e%3c/linearGradient%3e%3c/defs%3e%3crect%20width='512'%20height='512'%20rx='115'%20fill='url(%23bg)'/%3e%3crect%20x='84'%20y='100'%20width='200'%20height='312'%20rx='22'%20fill='%23141726'/%3e%3crect%20x='304'%20y='100'%20width='124'%20height='148'%20rx='22'%20fill='%23141726'/%3e%3crect%20x='304'%20y='264'%20width='124'%20height='148'%20rx='22'%20fill='%23141726'/%3e%3cpath%20d='M122%20168%20l44%2038%20-44%2038'%20stroke='%23ffffff'%20stroke-width='20'%20fill='none'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3crect%20x='184'%20y='230'%20width='62'%20height='16'%20rx='8'%20fill='%23ffffff'/%3e%3crect%20x='332'%20y='150'%20width='52'%20height='12'%20rx='6'%20fill='%2347548f'/%3e%3crect%20x='332'%20y='178'%20width='34'%20height='12'%20rx='6'%20fill='%2347548f'/%3e%3crect%20x='332'%20y='314'%20width='46'%20height='12'%20rx='6'%20fill='%2347548f'/%3e%3crect%20x='332'%20y='342'%20width='58'%20height='12'%20rx='6'%20fill='%2347548f'/%3e%3c/svg%3e",import.meta.url).href,bundlePath:"/Applications/SpaceVibe Deck.app",slug:"deck"}),ke=`${$.name} app window preview`,B="see-it-run",Le=16.2,J=Object.freeze([{t:0,key:"demoCh1"},{t:3.2,key:"demoCh2"},{t:11,key:"demoCh3"},{t:13.1,key:"demoCh4"}]),We=.4;function G(t){const e=Math.max(0,Math.floor(t));return`0:${String(e).padStart(2,"0")}`}function He(){return`
    <svg class="reel__glyph reel__glyph--play" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
    </svg>
    <svg class="reel__glyph reel__glyph--pause" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5h3v14H8zM13 5h3v14h-3z" fill="currentColor" />
    </svg>
  `}function Xe(){return`
    <svg viewBox="0 0 24 24" aria-hidden="true" width="14" height="14">
      <path
        d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="square"
      />
    </svg>
  `}function Ye(t){return J.map((e,s)=>`
      <button
        class="reel__chapter"
        type="button"
        data-reel-seek="${e.t}"
        aria-pressed="${s===0}"
      >
        <span class="reel__chaptime">${G(e.t)}</span>
        <span data-copy="${e.key}">${t[e.key]}</span>
      </button>
    `).join("")}function Ze(t){const e=`${$.name} — ${t.demoAria}`;return`
    <section class="reel" id="${B}">
      <div class="reel__inner">
        <div class="reel__band">
          <div class="reel__heading">
            <p class="reel__label" data-copy="demoLabel">${t.demoLabel}</p>
            <h2 data-copy="demoTitle">${t.demoTitle}</h2>
          </div>
          <p class="reel__lede" data-copy="demoBody">${t.demoBody}</p>
        </div>
        <figure class="reel__frame" data-reel-frame data-state="paused">
          <div class="reel__screen">
            <video
              class="reel__video"
              data-reel-video
              muted
              loop
              playsinline
              preload="metadata"
              poster="/deck-tour-poster.png"
              data-copy-aria="demoAria"
              aria-label="${e}"
            >
              <source src="/deck-tour.webm" type="video/webm" />
              <source src="/deck-tour.mp4" type="video/mp4" />
            </video>
            <button
              class="reel__tap"
              type="button"
              data-reel-toggle
              data-copy-aria="demoPlay"
              aria-label="${t.demoPlay}"
            >
              <span class="reel__tapdot">${He()}</span>
            </button>
            <p class="reel__failed" data-reel-error>
              <span data-copy="demoFailed">${t.demoFailed}</span>
            </p>
          </div>
          <div class="reel__hud">
            <span class="reel__time" data-reel-time>0:00 / ${G(Le)}</span>
            <div class="reel__track" aria-hidden="true">
              <i data-reel-progress></i>
            </div>
            <button
              class="reel__iconbtn"
              type="button"
              data-reel-fullscreen
              data-copy-aria="demoFullscreen"
              aria-label="${t.demoFullscreen}"
            >
              ${Xe()}
            </button>
          </div>
          <div
            class="reel__chapters"
            role="group"
            data-copy-aria="demoChaptersLabel"
            aria-label="${t.demoChaptersLabel}"
          >
            ${Ye(t)}
          </div>
        </figure>
      </div>
    </section>
  `}function Qe(t){const e=t.querySelector("[data-reel-video]"),s=t.querySelector("[data-reel-frame]"),r=t.querySelector("[data-reel-toggle]"),n=t.querySelector("[data-reel-progress]"),i=t.querySelector("[data-reel-time]"),a=t.querySelector("[data-reel-fullscreen]"),l=[...t.querySelectorAll("[data-reel-seek]")];if(!e||!s||!r||!n||!i)throw new Error("Demo reel markup is missing.");const o=window.matchMedia("(prefers-reduced-motion: reduce)");let c=null;function h(){c=null;const _=Number.isFinite(e.duration)?e.duration:Le,x=_>0?e.currentTime/_:0;n.style.transform=`scaleX(${Math.min(1,Math.max(0,x))})`,i.textContent=`${G(e.currentTime)} / ${G(_)}`;let v=0;for(let S=0;S<J.length;S+=1)e.currentTime+.05>=J[S].t&&(v=S);l.forEach((S,C)=>{S.setAttribute("aria-pressed",String(C===v))}),e.paused||(c=requestAnimationFrame(h))}function u(){c===null&&(c=requestAnimationFrame(h))}function d(){e.play().catch(()=>{s.dataset.state="paused"})}function f(){if(e.paused){d();return}e.pause()}function p(_){const x=Number.parseFloat(_.currentTarget.dataset.reelSeek);Number.isFinite(x)&&(e.currentTime=x,u(),e.paused&&d())}function g(){var x,v,S;if(document.fullscreenElement){(x=document.exitFullscreen)==null||x.call(document);return}const _=((v=s.requestFullscreen)==null?void 0:v.bind(s))??((S=e.webkitEnterFullscreen)==null?void 0:S.bind(e));_==null||_()}function m(){s.dataset.state="playing",u()}function y(){s.dataset.state="paused",u()}function w(){s.dataset.state="error"}const b=new IntersectionObserver(_=>{for(const x of _){if(s.dataset.state==="error")return;x.isIntersecting&&!o.matches?d():!x.isIntersecting&&!e.paused&&e.pause()}},{threshold:We});return b.observe(s),r.addEventListener("click",f),a==null||a.addEventListener("click",g),l.forEach(_=>_.addEventListener("click",p)),e.addEventListener("play",m),e.addEventListener("pause",y),e.addEventListener("error",w),e.addEventListener("loadedmetadata",u),e.addEventListener("seeked",u),e.addEventListener("timeupdate",u),()=>{b.disconnect(),r.removeEventListener("click",f),a==null||a.removeEventListener("click",g),l.forEach(_=>_.removeEventListener("click",p)),e.removeEventListener("play",m),e.removeEventListener("pause",y),e.removeEventListener("error",w),e.removeEventListener("loadedmetadata",u),e.removeEventListener("seeked",u),e.removeEventListener("timeupdate",u),c!==null&&cancelAnimationFrame(c),e.pause()}}function Ke(t,e){const s=t.querySelector(`#${B}`);if(!s)throw new Error("Demo reel root is missing.");for(const r of s.querySelectorAll("[data-copy]")){const n=e[r.dataset.copy];typeof n=="string"&&(r.textContent=n)}for(const r of s.querySelectorAll("[data-copy-aria]")){const n=r.dataset.copyAria,i=e[n];typeof i=="string"&&r.setAttribute("aria-label",n==="demoAria"?`${$.name} — ${i}`:i)}}function Je(t){return{markup:Ze(t),mount(e){const s=e.querySelector(`#${B}`);if(!s)throw new Error("Demo reel root is missing.");return Qe(s)}}}const et="modulepreload",tt=function(t){return"/"+t},ie={},st=function(e,s,r){let n=Promise.resolve();if(s&&s.length>0){let a=function(c){return Promise.all(c.map(h=>Promise.resolve(h).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),o=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));n=a(s.map(c=>{if(c=tt(c),c in ie)return;ie[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":et,h||(d.as="script"),d.crossOrigin="",d.href=c,o&&d.setAttribute("nonce",o),document.head.appendChild(d),h)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return n.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},O=t=>{if(t===null||typeof t!="object")return t;for(const e of Object.values(t))O(e);return Object.freeze(t)},rt=O([{id:$.slug,label:$.slug,path:`…evibe-workspace/${$.slug}`,active:!0,monogram:null,tint:null},{id:"spacevibe-arena",label:"spacevibe-arena",path:"…rkspace/spacevibe-arena",active:!1,monogram:"S",tint:"#bb9af7"},{id:"spacevibe-api",label:"spacevibe-api",path:"…rkspace/spacevibe-api",active:!1,monogram:"A",tint:"#9ece6a"}]),N=O({branch:"main",cwd:`~/Documents/Development/spacevibe-workspace/${$.slug}`,paneCount:"3 panes",theme:"Tokyo Night",hints:[{label:"split",key:"⌘D"},{label:"new tab",key:"⌘T"}]}),ne=O([{id:"claude",focused:!0,startOffset:0,restGap:4200,maxLines:12,prompt:"❯",footer:[{text:`[Opus 5 (1M context)] ▮▮▮▯▯▯▯▯ 32% | ${$.slug} git:(main*)`,cls:"t-dim"},{text:"▶▶ auto mode on (shift+tab to cycle)",cls:"t-dim"}],steps:[{kind:"line",text:"● I'll trace why the pane divider drifts on resize.",cls:"t-body",delay:600},{kind:"think",text:"✳ Pondering… (esc to interrupt)",delay:500},{kind:"line",text:"● Read(src/terminal/layout-engine.ts)",cls:"t-tool",delay:2200},{kind:"line",text:"  ⎿ 312 lines",cls:"t-dim",delay:450},{kind:"think",text:"✳ Refining… (2s · ↓ 1.4k tokens)",delay:700},{kind:"line",text:"● The ratio rounds to integer cells before the flex",cls:"t-body",delay:2600},{kind:"chunk",text:" pass — resize twice and the drift compounds.",delay:520},{kind:"line",text:"● Update(src/terminal/layout-engine.ts)",cls:"t-tool",delay:900},{kind:"line",text:"  ⎿ +14 -6 · keep the fractional ratio in the tree",cls:"t-dim",delay:500},{kind:"think",text:"✳ Testing… (npm test)",delay:800},{kind:"line",text:"● 214 tests passed — the divider stays put now.",cls:"t-ok",delay:2800},{kind:"rest",delay:1200}]},{id:"codex",focused:!1,startOffset:1300,restGap:5200,maxLines:10,prompt:"▌",footer:[{text:"tokens used 4.2k · model gpt-5-codex",cls:"t-dim"}],steps:[{kind:"line",text:"› trace the flicker when a pane closes",cls:"t-user",delay:900},{kind:"think",text:"• Working (2s · esc to interrupt)",delay:600},{kind:"line",text:"codex",cls:"t-agent",delay:2400},{kind:"line",text:"The old pane's canvas paints one frame after the",cls:"t-body",delay:420},{kind:"chunk",text:" grid reflows. I'll defer the removal by a frame.",delay:480},{kind:"line",text:"✓ Applied patch src/terminal/pane-lifecycle.ts",cls:"t-ok",delay:1200},{kind:"line",text:"  └ requestAnimationFrame before detach",cls:"t-dim",delay:460},{kind:"think",text:"• Verifying (vitest run)",delay:700},{kind:"line",text:"✓ 96 passed · 0 failed",cls:"t-ok",delay:2400},{kind:"rest",delay:1e3}]},{id:"opencode",focused:!1,startOffset:2600,restGap:4800,maxLines:18,prompt:">",footer:[{text:"opencode · claude-sonnet-5 · 12.4k tokens",cls:"t-dim"}],steps:[{kind:"line",text:"> why does the status bar lose the branch after cd?",cls:"t-user",delay:1100},{kind:"think",text:"◍ thinking…",delay:600},{kind:"line",text:"The watcher only re-reads HEAD on focus. A cwd",cls:"t-body",delay:2300},{kind:"chunk",text:" change from OSC 7 should also trigger it.",delay:500},{kind:"line",text:"edit src/lib/git-status.ts",cls:"t-tool",delay:1100},{kind:"line",text:"  + watch cwd from osc-7 events",cls:"t-dim",delay:450},{kind:"think",text:"◍ running checks…",delay:700},{kind:"line",text:"✓ typecheck clean · the branch follows cwd now",cls:"t-ok",delay:2500},{kind:"rest",delay:1200}]}]),W=$.iconSrc,ae={splitRow:'<rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><line x1="12" y1="4.5" x2="12" y2="19.5"/>',splitColumn:'<rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><line x1="3.5" y1="12" x2="20.5" y2="12"/>',closePane:'<rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><path d="M9.5 9.5l5 5m0-5l-5 5"/>',expand:'<path d="M9 4.5H6a1.5 1.5 0 0 0-1.5 1.5v3"/><path d="M15 4.5h3a1.5 1.5 0 0 1 1.5 1.5v3"/><path d="M9 19.5H6A1.5 1.5 0 0 1 4.5 18v-3"/><path d="M15 19.5h3a1.5 1.5 0 0 0 1.5-1.5v-3"/>',gear:'<circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09a1.7 1.7 0 0 0-1.11-1.56 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.56-1.03H3a2 2 0 1 1 0-4h.09a1.7 1.7 0 0 0 1.56-1.11 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34h.08a1.7 1.7 0 0 0 1.03-1.56V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.03 1.56h.08a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87v.08a1.7 1.7 0 0 0 1.56 1.03H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.51 1.03Z"/>'};function le(t){return`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${t}</svg>`}function Te(){return`
    <div class="a-appwin__titlebar">
      <span class="a-appwin__lights"><i></i><i></i><i></i></span>
      <span class="a-appwin__actions">
        ${["splitRow","splitColumn","closePane","expand"].map(e=>`<span class="a-appwin__iconbtn">${le(ae[e])}</span>`).join("")}
        <span class="a-appwin__actionsep"></span>
        <span class="a-appwin__iconbtn">${le(ae.gear)}</span>
      </span>
    </div>
  `}function Fe(t=void 0){return`
    <aside class="a-appwin__sidebar">
      ${rt.map(s=>{const r=t==null?void 0:t[s.id],n=s.monogram===null?`<img class="a-appwin__wslogo" src="${W}" alt="" />`:`<span class="a-appwin__wslogo a-appwin__wslogo--mono" style="--ws-tint: ${s.tint}">${s.monogram}</span>`,i=r?`<span class="a-appwin__wsavatar" data-ws-avatar="${s.id}" data-ws-status="${r}">${n}</span>`:n;return`
        <div class="a-appwin__wsitem${s.active?" is-active":""}" data-ws-item="${s.id}">
          ${i}
          <span class="a-appwin__wstext">
            <span class="a-appwin__wslabel">${s.label}</span>
            <span class="a-appwin__wspath">${s.path}</span>
          </span>
          ${s.active?'<span class="a-appwin__wsclose">×</span>':""}
        </div>
      `}).join("")}
      <div class="a-appwin__wsadd"><span>+</span>Open workspace</div>
    </aside>
  `}function I(t){const e=t.footer.map(s=>`<span class="a-appwin__footline${s.cls?` ${s.cls}`:""}">${s.text}</span>`).join("");return`
    <article class="a-appwin__pane${t.focused?" is-focused":""}" data-pane="${t.id}">
      <div class="a-appwin__transcript" data-stream="${t.id}">
        <div class="a-appwin__lines" data-lines></div>
        <div class="a-appwin__spinner" data-spinner hidden></div>
      </div>
      <div class="a-appwin__panefoot">
        <div class="a-appwin__promptbox">
          <span class="a-appwin__promptglyph">${t.prompt}</span>
          <i class="a-appwin__cursor"></i>
        </div>
        ${e}
      </div>
    </article>
  `}function Re(){const t=N.hints.map(e=>`<span class="a-appwin__hint">${e.label}</span><kbd class="a-appwin__kbd">${e.key}</kbd>`).join("");return`
    <footer class="a-appwin__status">
      <span class="a-appwin__seg"><i class="a-appwin__gitdot"></i>${N.branch}</span>
      <span class="a-appwin__vsep"></span>
      <span class="a-appwin__seg a-appwin__seg--cwd">${N.cwd}</span>
      <span class="a-appwin__statusright">
        <span class="a-appwin__seg" data-status-panes>${N.paneCount}</span>
        <span class="a-appwin__vsep"></span>
        <span class="a-appwin__seg">${N.theme}</span>
        <span class="a-appwin__vsep"></span>
        <span class="a-appwin__seg">${t}</span>
      </span>
    </footer>
  `}function Pe(){return`
    <svg class="a-os-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"/>
    </svg>
  `}function Oe(){return`
    <svg class="a-os-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M0 0h11.377v11.372H0Zm12.623 0H24v11.372H12.623ZM0 12.623h11.377V24H0Zm12.623 0H24V24H12.623Z"/>
    </svg>
  `}function oe(t,e,s){var n;const r=document.createElement("div");for(r.className=`a-appwin__line${e.cls?` ${e.cls}`:""}`,r.textContent=e.text??"",t.append(r);t.childElementCount>s;)(n=t.firstElementChild)==null||n.remove()}function ze(t,e,s,r){if(t.kind==="line"){s.hidden=!0,oe(e,t,r);return}if(t.kind==="chunk"){const n=e.lastElementChild;n===null?oe(e,t,r):n.textContent+=t.text??"";return}t.kind==="think"&&(s.textContent=t.text??"",s.hidden=!1)}function nt(t,e,s){s.hidden=!0;for(const r of t.steps)(r.kind==="line"||r.kind==="chunk")&&ze(r,e,s,t.maxLines)}function it(t,e,s){let r=null,n=!1,i=0,a=performance.now()+t.startOffset+t.steps[0].delay;function l(){if(n)return;const o=performance.now();for(;i<t.steps.length&&a<=o;)ze(t.steps[i],e,s,t.maxLines),i+=1,i<t.steps.length&&(a+=t.steps[i].delay);if(i>=t.steps.length){r=setTimeout(()=>{n||(s.hidden=!0,i=0,a=performance.now()+t.steps[0].delay,l())},t.restGap);return}r=setTimeout(l,Math.max(16,a-o))}return r=setTimeout(l,Math.max(0,a-performance.now())),()=>{n=!0,clearTimeout(r)}}function Ie(t){if(!t)throw new Error("Stage grid root is missing.");const e=window.matchMedia("(prefers-reduced-motion: reduce)"),s=[];for(const r of ne){const n=t.querySelector(`[data-stream="${r.id}"]`),i=n==null?void 0:n.querySelector("[data-lines]"),a=n==null?void 0:n.querySelector("[data-spinner]");if(!i||!a)throw new Error(`Stage pane "${r.id}" markup is missing.`);nt(r,i,a),e.matches||s.push(it(r,i,a))}return()=>{s.forEach(r=>r())}}const at="/landing-prototype/assets/image-removebg-preview(4).png",ee="https://github.com/mxrsv/spacevibe-deck",lt=`${ee}/releases/latest`,ot={beamWidth:2,beamHeight:20,beamNumber:14,lightColor:"#ffffff",lightIntensity:2.6,speed:2,noiseIntensity:1.4,scale:.2,rotation:14};function ce(){return`
    <svg class="a-github-icon" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.1-.55-.17-.55-.38
        0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95
        0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27
        -.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12
        -.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07
        -.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13
        .16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"/>
    </svg>
  `}function ct(t){return`
    <span class="a-brand-mark" aria-hidden="true">
      <img class="a-partner-mark" src="${at}" alt="" width="22" height="22" />
      <span class="a-brand-divider"></span>
      <img class="a-brand-icon" src="${W}" alt="" width="28" height="28" />
    </span>
    <strong data-copy="navProduct">${t.navProduct}</strong>
  `}function ht(t,e){const[s,r,n]=ne;return{markup:`
      <section class="direction-a" data-hero-motion="beams">
        <div class="a-motion" data-motion="beams" aria-hidden="true"></div>

        <div class="a-main">
          <header class="a-topbar">
            <a class="a-topbar__brand" href="/landing-prototype/?direction=A" aria-label="${t.navProduct}">
              ${ct(t)}
            </a>
            <span class="a-topbar__descriptor">Native macOS / PTY field</span>
            <div class="a-topbar__lang" role="group" aria-label="${t.localeLabel}" data-active="${e}">
              <span class="a-topbar__lang-thumb" aria-hidden="true"></span>
              <button type="button" class="a-topbar__lang-btn" data-locale="en" aria-pressed="${e==="en"}">EN</button>
              <button type="button" class="a-topbar__lang-btn" data-locale="vi" aria-pressed="${e==="vi"}">VI</button>
            </div>
            <a
              class="a-topbar__github"
              href="${ee}"
              target="_blank"
              rel="noreferrer"
            >
              ${ce()}
              <span data-copy="navGithub">${t.navGithub}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </header>

          <div class="a-band">
            <p class="band-label" data-copy="heroLabel">${t.heroLabel}</p>
            <h1>
              <span data-copy="headlineLead">${t.headlineLead}</span>
              <span data-copy="headlineTail">${t.headlineTail}</span>
            </h1>
          </div>

          <div class="a-deck">
            <div class="a-deck__intro">
              <p class="a-subhead" data-copy="subhead">${t.subhead}</p>

              <div class="a-actions">
                <a
                  class="a-primary-cta"
                  href="${lt}"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span class="a-cta-lead">
                    ${Pe()}
                    <span data-copy="downloadMac">${t.downloadMac}</span>
                  </span>
                  <i aria-hidden="true">↓</i>
                </a>

                <button class="a-quiet-cta" type="button" disabled>
                  <span class="a-cta-lead">
                    ${Oe()}
                    <span data-copy="downloadWin">${t.downloadWin}</span>
                  </span>
                  <span class="a-cta-tag" data-copy="comingSoon">${t.comingSoon}</span>
                </button>

                <a class="a-quiet-cta" href="#${B}">
                  <span class="a-cta-lead">
                    <span data-copy="primaryCta">${t.primaryCta}</span>
                  </span>
                  <i aria-hidden="true">↓</i>
                </a>

                <a
                  class="a-secondary-cta"
                  href="${ee}"
                  target="_blank"
                  rel="noreferrer"
                >
                  ${ce()}
                  <span data-copy="secondaryCta">${t.secondaryCta}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div class="a-deck__stage">
              <figure class="a-appwin" role="img" aria-label="${ke}">
                ${Te()}
                <div class="a-appwin__body" aria-hidden="true">
                  ${Fe()}
                  <div class="a-appwin__grid">
                    <div class="a-appwin__col">
                      ${I(s)}
                      ${I(r)}
                    </div>
                    ${I(n)}
                  </div>
                </div>
                ${Re()}
              </figure>
            </div>
          </div>
        </div>
      </section>
    `,mount(i){const a=i.querySelector(".direction-a");if(!a)throw new Error("Direction A root is missing.");document.documentElement.dataset.directionTreatment="a";let l=null,o=!1;st(async()=>{const{mountBeams:h}=await import("./beams-BWgv63GM.js");return{mountBeams:h}},[]).then(({mountBeams:h})=>{o||(l=h(a.querySelector(".a-motion"),ot))}).catch(h=>{throw a.dataset.heroMotion="none",h});const c=Ie(a.querySelector(".a-appwin__grid"));return()=>{c(),o=!0,l==null||l.dispose(),document.documentElement.dataset.directionTreatment==="a"&&delete document.documentElement.dataset.directionTreatment}}}}function dt(t,e,s){var i;const r=t.querySelector(".direction-a");if(!r)throw new Error("Direction A root is missing.");for(const a of r.querySelectorAll("[data-copy]")){const l=e[a.dataset.copy];typeof l=="string"&&(a.textContent=l,a.hasAttribute("data-text")&&a.setAttribute("data-text",l))}(i=r.querySelector(".a-topbar__brand"))==null||i.setAttribute("aria-label",e.navProduct);const n=r.querySelector(".a-topbar__lang");if(n){n.setAttribute("aria-label",e.localeLabel),n.dataset.active=s;for(const a of n.querySelectorAll("button[data-locale]"))a.setAttribute("aria-pressed",String(a.dataset.locale===s))}}const Be=["en","vi"];function qe(t){var r;const e=new URL(t.href),s=((r=globalThis.navigator)==null?void 0:r.language)??"";return je(e.search,s)}function ut(t){const e=new URL(window.location.href);e.searchParams.set("lang",Be.includes(t)?t:"en"),window.history.replaceState(window.history.state,"",e)}function U(t){let e=t[0],s=t[1],r=t[2];return Math.sqrt(e*e+s*s+r*r)}function te(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function ft(t,e,s,r){return t[0]=e,t[1]=s,t[2]=r,t}function he(t,e,s){return t[0]=e[0]+s[0],t[1]=e[1]+s[1],t[2]=e[2]+s[2],t}function de(t,e,s){return t[0]=e[0]-s[0],t[1]=e[1]-s[1],t[2]=e[2]-s[2],t}function pt(t,e,s){return t[0]=e[0]*s[0],t[1]=e[1]*s[1],t[2]=e[2]*s[2],t}function gt(t,e,s){return t[0]=e[0]/s[0],t[1]=e[1]/s[1],t[2]=e[2]/s[2],t}function H(t,e,s){return t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t}function mt(t,e){let s=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return Math.sqrt(s*s+r*r+n*n)}function _t(t,e){let s=e[0]-t[0],r=e[1]-t[1],n=e[2]-t[2];return s*s+r*r+n*n}function ue(t){let e=t[0],s=t[1],r=t[2];return e*e+s*s+r*r}function yt(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function xt(t,e){return t[0]=1/e[0],t[1]=1/e[1],t[2]=1/e[2],t}function se(t,e){let s=e[0],r=e[1],n=e[2],i=s*s+r*r+n*n;return i>0&&(i=1/Math.sqrt(i)),t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t}function Ne(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function fe(t,e,s){let r=e[0],n=e[1],i=e[2],a=s[0],l=s[1],o=s[2];return t[0]=n*o-i*l,t[1]=i*a-r*o,t[2]=r*l-n*a,t}function bt(t,e,s,r){let n=e[0],i=e[1],a=e[2];return t[0]=n+r*(s[0]-n),t[1]=i+r*(s[1]-i),t[2]=a+r*(s[2]-a),t}function vt(t,e,s,r,n){const i=Math.exp(-r*n);let a=e[0],l=e[1],o=e[2];return t[0]=s[0]+(a-s[0])*i,t[1]=s[1]+(l-s[1])*i,t[2]=s[2]+(o-s[2])*i,t}function wt(t,e,s){let r=e[0],n=e[1],i=e[2],a=s[3]*r+s[7]*n+s[11]*i+s[15];return a=a||1,t[0]=(s[0]*r+s[4]*n+s[8]*i+s[12])/a,t[1]=(s[1]*r+s[5]*n+s[9]*i+s[13])/a,t[2]=(s[2]*r+s[6]*n+s[10]*i+s[14])/a,t}function Et(t,e,s){let r=e[0],n=e[1],i=e[2],a=s[3]*r+s[7]*n+s[11]*i+s[15];return a=a||1,t[0]=(s[0]*r+s[4]*n+s[8]*i)/a,t[1]=(s[1]*r+s[5]*n+s[9]*i)/a,t[2]=(s[2]*r+s[6]*n+s[10]*i)/a,t}function St(t,e,s){let r=e[0],n=e[1],i=e[2];return t[0]=r*s[0]+n*s[3]+i*s[6],t[1]=r*s[1]+n*s[4]+i*s[7],t[2]=r*s[2]+n*s[5]+i*s[8],t}function Ct(t,e,s){let r=e[0],n=e[1],i=e[2],a=s[0],l=s[1],o=s[2],c=s[3],h=l*i-o*n,u=o*r-a*i,d=a*n-l*r,f=l*d-o*u,p=o*h-a*d,g=a*u-l*h,m=c*2;return h*=m,u*=m,d*=m,f*=2,p*=2,g*=2,t[0]=r+h+f,t[1]=n+u+p,t[2]=i+d+g,t}const At=(function(){const t=[0,0,0],e=[0,0,0];return function(s,r){te(t,s),te(e,r),se(t,t),se(e,e);let n=Ne(t,e);return n>1?0:n<-1?Math.PI:Math.acos(n)}})();function Mt(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]}class R extends Array{constructor(e=0,s=e,r=e){return super(e,s,r),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this[0]=e}set y(e){this[1]=e}set z(e){this[2]=e}set(e,s=e,r=e){return e.length?this.copy(e):(ft(this,e,s,r),this)}copy(e){return te(this,e),this}add(e,s){return s?he(this,e,s):he(this,this,e),this}sub(e,s){return s?de(this,e,s):de(this,this,e),this}multiply(e){return e.length?pt(this,this,e):H(this,this,e),this}divide(e){return e.length?gt(this,this,e):H(this,this,1/e),this}inverse(e=this){return xt(this,e),this}len(){return U(this)}distance(e){return e?mt(this,e):U(this)}squaredLen(){return ue(this)}squaredDistance(e){return e?_t(this,e):ue(this)}negate(e=this){return yt(this,e),this}cross(e,s){return s?fe(this,e,s):fe(this,this,e),this}scale(e){return H(this,this,e),this}normalize(){return se(this,this),this}dot(e){return Ne(this,e)}equals(e){return Mt(this,e)}applyMatrix3(e){return St(this,this,e),this}applyMatrix4(e){return wt(this,this,e),this}scaleRotateMatrix4(e){return Et(this,this,e),this}applyQuaternion(e){return Ct(this,this,e),this}angle(e){return At(this,e)}lerp(e,s){return bt(this,this,e,s),this}smoothLerp(e,s,r){return vt(this,this,e,s,r),this}clone(){return new R(this[0],this[1],this[2])}fromArray(e,s=0){return this[0]=e[s],this[1]=e[s+1],this[2]=e[s+2],this}toArray(e=[],s=0){return e[s]=this[0],e[s+1]=this[1],e[s+2]=this[2],e}transformDirection(e){const s=this[0],r=this[1],n=this[2];return this[0]=e[0]*s+e[4]*r+e[8]*n,this[1]=e[1]*s+e[5]*r+e[9]*n,this[2]=e[2]*s+e[6]*r+e[10]*n,this.normalize()}}const pe=new R;let $t=1,kt=1,ge=!1;class Lt{constructor(e,s={}){e.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=e,this.attributes=s,this.id=$t++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let r in s)this.addAttribute(r,s[r])}addAttribute(e,s){if(this.attributes[e]=s,s.id=kt++,s.size=s.size||1,s.type=s.type||(s.data.constructor===Float32Array?this.gl.FLOAT:s.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),s.target=e==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,s.normalized=s.normalized||!1,s.stride=s.stride||0,s.offset=s.offset||0,s.count=s.count||(s.stride?s.data.byteLength/s.stride:s.data.length/s.size),s.divisor=s.instanced||0,s.needsUpdate=!1,s.usage=s.usage||this.gl.STATIC_DRAW,s.buffer||this.updateAttribute(s),s.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==s.count*s.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,s.count*s.divisor);this.instancedCount=s.count*s.divisor}else e==="index"?this.drawRange.count=s.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,s.count))}updateAttribute(e){const s=!e.buffer;s&&(e.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==e.buffer&&(this.gl.bindBuffer(e.target,e.buffer),this.glState.boundBuffer=e.buffer),s?this.gl.bufferData(e.target,e.data,e.usage):this.gl.bufferSubData(e.target,0,e.data),e.needsUpdate=!1}setIndex(e){this.addAttribute("index",e)}setDrawRange(e,s){this.drawRange.start=e,this.drawRange.count=s}setInstancedCount(e){this.instancedCount=e}createVAO(e){this.VAOs[e.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.bindAttributes(e)}bindAttributes(e){e.attributeLocations.forEach((s,{name:r,type:n})=>{if(!this.attributes[r]){console.warn(`active attribute ${r} not being supplied`);return}const i=this.attributes[r];this.gl.bindBuffer(i.target,i.buffer),this.glState.boundBuffer=i.buffer;let a=1;n===35674&&(a=2),n===35675&&(a=3),n===35676&&(a=4);const l=i.size/a,o=a===1?0:a*a*4,c=a===1?0:a*4;for(let h=0;h<a;h++)this.gl.vertexAttribPointer(s+h,l,i.type,i.normalized,i.stride+o,i.offset+h*c),this.gl.enableVertexAttribArray(s+h),this.gl.renderer.vertexAttribDivisor(s+h,i.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:e,mode:s=this.gl.TRIANGLES}){var n;this.gl.renderer.currentGeometry!==`${this.id}_${e.attributeOrder}`&&(this.VAOs[e.attributeOrder]||this.createVAO(e),this.gl.renderer.bindVertexArray(this.VAOs[e.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${e.attributeOrder}`),e.attributeLocations.forEach((i,{name:a})=>{const l=this.attributes[a];l.needsUpdate&&this.updateAttribute(l)});let r=2;((n=this.attributes.index)==null?void 0:n.type)===this.gl.UNSIGNED_INT&&(r=4),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(s,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r,this.instancedCount):this.gl.renderer.drawArraysInstanced(s,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(s,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*r):this.gl.drawArrays(s,this.drawRange.start,this.drawRange.count)}getPosition(){const e=this.attributes.position;if(e.data)return e;if(!ge)return console.warn("No position buffer data found to compute bounds"),ge=!0}computeBoundingBox(e){e||(e=this.getPosition());const s=e.data,r=e.size;this.bounds||(this.bounds={min:new R,max:new R,center:new R,scale:new R,radius:1/0});const n=this.bounds.min,i=this.bounds.max,a=this.bounds.center,l=this.bounds.scale;n.set(1/0),i.set(-1/0);for(let o=0,c=s.length;o<c;o+=r){const h=s[o],u=s[o+1],d=s[o+2];n.x=Math.min(h,n.x),n.y=Math.min(u,n.y),n.z=Math.min(d,n.z),i.x=Math.max(h,i.x),i.y=Math.max(u,i.y),i.z=Math.max(d,i.z)}l.sub(i,n),a.add(n,i).divide(2)}computeBoundingSphere(e){e||(e=this.getPosition());const s=e.data,r=e.size;this.bounds||this.computeBoundingBox(e);let n=0;for(let i=0,a=s.length;i<a;i+=r)pe.fromArray(s,i),n=Math.max(n,this.bounds.center.squaredDistance(pe));this.bounds.radius=Math.sqrt(n)}remove(){for(let e in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[e]),delete this.VAOs[e];for(let e in this.attributes)this.gl.deleteBuffer(this.attributes[e].buffer),delete this.attributes[e]}}let Tt=1;const me={};class Ft{constructor(e,{vertex:s,fragment:r,uniforms:n={},transparent:i=!1,cullFace:a=e.BACK,frontFace:l=e.CCW,depthTest:o=!0,depthWrite:c=!0,depthFunc:h=e.LEQUAL}={}){e.canvas||console.error("gl not passed as first argument to Program"),this.gl=e,this.uniforms=n,this.id=Tt++,s||console.warn("vertex shader not supplied"),r||console.warn("fragment shader not supplied"),this.transparent=i,this.cullFace=a,this.frontFace=l,this.depthTest=o,this.depthWrite=c,this.depthFunc=h,this.blendFunc={},this.blendEquation={},this.stencilFunc={},this.stencilOp={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA)),this.vertexShader=e.createShader(e.VERTEX_SHADER),this.fragmentShader=e.createShader(e.FRAGMENT_SHADER),this.program=e.createProgram(),e.attachShader(this.program,this.vertexShader),e.attachShader(this.program,this.fragmentShader),this.setShaders({vertex:s,fragment:r})}setShaders({vertex:e,fragment:s}){if(e&&(this.gl.shaderSource(this.vertexShader,e),this.gl.compileShader(this.vertexShader),this.gl.getShaderInfoLog(this.vertexShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.vertexShader)}
Vertex Shader
${_e(e)}`)),s&&(this.gl.shaderSource(this.fragmentShader,s),this.gl.compileShader(this.fragmentShader),this.gl.getShaderInfoLog(this.fragmentShader)!==""&&console.warn(`${this.gl.getShaderInfoLog(this.fragmentShader)}
Fragment Shader
${_e(s)}`)),this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))return console.warn(this.gl.getProgramInfoLog(this.program));this.uniformLocations=new Map;let r=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_UNIFORMS);for(let a=0;a<r;a++){let l=this.gl.getActiveUniform(this.program,a);this.uniformLocations.set(l,this.gl.getUniformLocation(this.program,l.name));const o=l.name.match(/(\w+)/g);l.uniformName=o[0],l.nameComponents=o.slice(1)}this.attributeLocations=new Map;const n=[],i=this.gl.getProgramParameter(this.program,this.gl.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const l=this.gl.getActiveAttrib(this.program,a),o=this.gl.getAttribLocation(this.program,l.name);o!==-1&&(n[o]=l.name,this.attributeLocations.set(l,o))}this.attributeOrder=n.join("")}setBlendFunc(e,s,r,n){this.blendFunc.src=e,this.blendFunc.dst=s,this.blendFunc.srcAlpha=r,this.blendFunc.dstAlpha=n,e&&(this.transparent=!0)}setBlendEquation(e,s){this.blendEquation.modeRGB=e,this.blendEquation.modeAlpha=s}setStencilFunc(e,s,r){this.stencilRef=s,this.stencilFunc.func=e,this.stencilFunc.ref=s,this.stencilFunc.mask=r}setStencilOp(e,s,r){this.stencilOp.stencilFail=e,this.stencilOp.depthFail=s,this.stencilOp.depthPass=r}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha),this.stencilFunc.func||this.stencilOp.stencilFail?this.gl.renderer.enable(this.gl.STENCIL_TEST):this.gl.renderer.disable(this.gl.STENCIL_TEST),this.gl.renderer.setStencilFunc(this.stencilFunc.func,this.stencilFunc.ref,this.stencilFunc.mask),this.gl.renderer.setStencilOp(this.stencilOp.stencilFail,this.stencilOp.depthFail,this.stencilOp.depthPass)}use({flipFaces:e=!1}={}){let s=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((n,i)=>{let a=this.uniforms[i.uniformName];for(const l of i.nameComponents){if(!a)break;if(l in a)a=a[l];else{if(Array.isArray(a.value))break;a=void 0;break}}if(!a)return ye(`Active uniform ${i.name} has not been supplied`);if(a&&a.value===void 0)return ye(`${i.name} uniform is missing a value parameter`);if(a.value.texture)return s=s+1,a.value.update(s),X(this.gl,i.type,n,s);if(a.value.length&&a.value[0].texture){const l=[];return a.value.forEach(o=>{s=s+1,o.update(s),l.push(s)}),X(this.gl,i.type,n,l)}X(this.gl,i.type,n,a.value)}),this.applyState(),e&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function X(t,e,s,r){r=r.length?Rt(r):r;const n=t.renderer.state.uniformLocations.get(s);if(r.length)if(n===void 0||n.length!==r.length)t.renderer.state.uniformLocations.set(s,r.slice(0));else{if(Pt(n,r))return;n.set?n.set(r):Ot(n,r),t.renderer.state.uniformLocations.set(s,n)}else{if(n===r)return;t.renderer.state.uniformLocations.set(s,r)}switch(e){case 5126:return r.length?t.uniform1fv(s,r):t.uniform1f(s,r);case 35664:return t.uniform2fv(s,r);case 35665:return t.uniform3fv(s,r);case 35666:return t.uniform4fv(s,r);case 35670:case 5124:case 35678:case 36306:case 35680:case 36289:return r.length?t.uniform1iv(s,r):t.uniform1i(s,r);case 35671:case 35667:return t.uniform2iv(s,r);case 35672:case 35668:return t.uniform3iv(s,r);case 35673:case 35669:return t.uniform4iv(s,r);case 35674:return t.uniformMatrix2fv(s,!1,r);case 35675:return t.uniformMatrix3fv(s,!1,r);case 35676:return t.uniformMatrix4fv(s,!1,r)}}function _e(t){let e=t.split(`
`);for(let s=0;s<e.length;s++)e[s]=s+1+": "+e[s];return e.join(`
`)}function Rt(t){const e=t.length,s=t[0].length;if(s===void 0)return t;const r=e*s;let n=me[r];n||(me[r]=n=new Float32Array(r));for(let i=0;i<e;i++)n.set(t[i],i*s);return n}function Pt(t,e){if(t.length!==e.length)return!1;for(let s=0,r=t.length;s<r;s++)if(t[s]!==e[s])return!1;return!0}function Ot(t,e){for(let s=0,r=t.length;s<r;s++)t[s]=e[s]}let Y=0;function ye(t){Y>100||(console.warn(t),Y++,Y>100&&console.warn("More than 100 program warnings - stopping logs."))}const Z=new R;let zt=1;class It{constructor({canvas:e=document.createElement("canvas"),width:s=300,height:r=150,dpr:n=1,alpha:i=!1,depth:a=!0,stencil:l=!1,antialias:o=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:h=!1,powerPreference:u="default",autoClear:d=!0,webgl:f=2}={}){const p={alpha:i,depth:a,stencil:l,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u};this.dpr=n,this.alpha=i,this.color=!0,this.depth=a,this.stencil=l,this.premultipliedAlpha=c,this.autoClear=d,this.id=zt++,f===2&&(this.gl=e.getContext("webgl2",p)),this.isWebgl2=!!this.gl,this.gl||(this.gl=e.getContext("webgl",p)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(s,r),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=!1,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LEQUAL,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(e,s){this.width=e,this.height=s,this.gl.canvas.width=e*this.dpr,this.gl.canvas.height=s*this.dpr,this.gl.canvas.style&&Object.assign(this.gl.canvas.style,{width:e+"px",height:s+"px"})}setViewport(e,s,r=0,n=0){this.state.viewport.width===e&&this.state.viewport.height===s||(this.state.viewport.width=e,this.state.viewport.height=s,this.state.viewport.x=r,this.state.viewport.y=n,this.gl.viewport(r,n,e,s))}setScissor(e,s,r=0,n=0){this.gl.scissor(r,n,e,s)}enable(e){this.state[e]!==!0&&(this.gl.enable(e),this.state[e]=!0)}disable(e){this.state[e]!==!1&&(this.gl.disable(e),this.state[e]=!1)}setBlendFunc(e,s,r,n){this.state.blendFunc.src===e&&this.state.blendFunc.dst===s&&this.state.blendFunc.srcAlpha===r&&this.state.blendFunc.dstAlpha===n||(this.state.blendFunc.src=e,this.state.blendFunc.dst=s,this.state.blendFunc.srcAlpha=r,this.state.blendFunc.dstAlpha=n,r!==void 0?this.gl.blendFuncSeparate(e,s,r,n):this.gl.blendFunc(e,s))}setBlendEquation(e,s){e=e||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===e&&this.state.blendEquation.modeAlpha===s)&&(this.state.blendEquation.modeRGB=e,this.state.blendEquation.modeAlpha=s,s!==void 0?this.gl.blendEquationSeparate(e,s):this.gl.blendEquation(e))}setCullFace(e){this.state.cullFace!==e&&(this.state.cullFace=e,this.gl.cullFace(e))}setFrontFace(e){this.state.frontFace!==e&&(this.state.frontFace=e,this.gl.frontFace(e))}setDepthMask(e){this.state.depthMask!==e&&(this.state.depthMask=e,this.gl.depthMask(e))}setDepthFunc(e){this.state.depthFunc!==e&&(this.state.depthFunc=e,this.gl.depthFunc(e))}setStencilMask(e){this.state.stencilMask!==e&&(this.state.stencilMask=e,this.gl.stencilMask(e))}setStencilFunc(e,s,r){this.state.stencilFunc===e&&this.state.stencilRef===s&&this.state.stencilFuncMask===r||(this.state.stencilFunc=e||this.gl.ALWAYS,this.state.stencilRef=s||0,this.state.stencilFuncMask=r||0,this.gl.stencilFunc(e||this.gl.ALWAYS,s||0,r||0))}setStencilOp(e,s,r){this.state.stencilFail===e&&this.state.stencilDepthFail===s&&this.state.stencilDepthPass===r||(this.state.stencilFail=e,this.state.stencilDepthFail=s,this.state.stencilDepthPass=r,this.gl.stencilOp(e,s,r))}activeTexture(e){this.state.activeTextureUnit!==e&&(this.state.activeTextureUnit=e,this.gl.activeTexture(this.gl.TEXTURE0+e))}bindFramebuffer({target:e=this.gl.FRAMEBUFFER,buffer:s=null}={}){this.state.framebuffer!==s&&(this.state.framebuffer=s,this.gl.bindFramebuffer(e,s))}getExtension(e,s,r){return s&&this.gl[s]?this.gl[s].bind(this.gl):(this.extensions[e]||(this.extensions[e]=this.gl.getExtension(e)),s?this.extensions[e]?this.extensions[e][r].bind(this.extensions[e]):null:this.extensions[e])}sortOpaque(e,s){return e.renderOrder!==s.renderOrder?e.renderOrder-s.renderOrder:e.program.id!==s.program.id?e.program.id-s.program.id:e.zDepth!==s.zDepth?e.zDepth-s.zDepth:s.id-e.id}sortTransparent(e,s){return e.renderOrder!==s.renderOrder?e.renderOrder-s.renderOrder:e.zDepth!==s.zDepth?s.zDepth-e.zDepth:s.id-e.id}sortUI(e,s){return e.renderOrder!==s.renderOrder?e.renderOrder-s.renderOrder:e.program.id!==s.program.id?e.program.id-s.program.id:s.id-e.id}getRenderList({scene:e,camera:s,frustumCull:r,sort:n}){let i=[];if(s&&r&&s.updateFrustum(),e.traverse(a=>{if(!a.visible)return!0;a.draw&&(r&&a.frustumCulled&&s&&!s.frustumIntersectsMesh(a)||i.push(a))}),n){const a=[],l=[],o=[];i.forEach(c=>{c.program.transparent?c.program.depthTest?l.push(c):o.push(c):a.push(c),c.zDepth=0,!(c.renderOrder!==0||!c.program.depthTest||!s)&&(c.worldMatrix.getTranslation(Z),Z.applyMatrix4(s.projectionViewMatrix),c.zDepth=Z.z)}),a.sort(this.sortOpaque),l.sort(this.sortTransparent),o.sort(this.sortUI),i=a.concat(l,o)}return i}render({scene:e,camera:s,target:r=null,update:n=!0,sort:i=!0,frustumCull:a=!0,clear:l}){r===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(r),this.setViewport(r.width,r.height)),(l||this.autoClear&&l!==!1)&&(this.depth&&(!r||r.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),(this.stencil||!r||r.stencil)&&(this.enable(this.gl.STENCIL_TEST),this.setStencilMask(255)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),n&&e.updateMatrixWorld(),s&&s.updateMatrixWorld(),this.getRenderList({scene:e,camera:s,frustumCull:a,sort:i}).forEach(c=>{c.draw({camera:s})})}}function Bt(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t}function qt(t,e,s,r,n){return t[0]=e,t[1]=s,t[2]=r,t[3]=n,t}function Nt(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],a=s*s+r*r+n*n+i*i;return a>0&&(a=1/Math.sqrt(a)),t[0]=s*a,t[1]=r*a,t[2]=n*a,t[3]=i*a,t}function Dt(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]+t[3]*e[3]}function Ut(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function Vt(t,e,s){s=s*.5;let r=Math.sin(s);return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=Math.cos(s),t}function xe(t,e,s){let r=e[0],n=e[1],i=e[2],a=e[3],l=s[0],o=s[1],c=s[2],h=s[3];return t[0]=r*h+a*l+n*c-i*o,t[1]=n*h+a*o+i*l-r*c,t[2]=i*h+a*c+r*o-n*l,t[3]=a*h-r*l-n*o-i*c,t}function Gt(t,e,s){s*=.5;let r=e[0],n=e[1],i=e[2],a=e[3],l=Math.sin(s),o=Math.cos(s);return t[0]=r*o+a*l,t[1]=n*o+i*l,t[2]=i*o-n*l,t[3]=a*o-r*l,t}function jt(t,e,s){s*=.5;let r=e[0],n=e[1],i=e[2],a=e[3],l=Math.sin(s),o=Math.cos(s);return t[0]=r*o-i*l,t[1]=n*o+a*l,t[2]=i*o+r*l,t[3]=a*o-n*l,t}function Wt(t,e,s){s*=.5;let r=e[0],n=e[1],i=e[2],a=e[3],l=Math.sin(s),o=Math.cos(s);return t[0]=r*o+n*l,t[1]=n*o-r*l,t[2]=i*o+a*l,t[3]=a*o-i*l,t}function Ht(t,e,s,r){let n=e[0],i=e[1],a=e[2],l=e[3],o=s[0],c=s[1],h=s[2],u=s[3],d,f,p,g,m;return f=n*o+i*c+a*h+l*u,f<0&&(f=-f,o=-o,c=-c,h=-h,u=-u),1-f>1e-6?(d=Math.acos(f),p=Math.sin(d),g=Math.sin((1-r)*d)/p,m=Math.sin(r*d)/p):(g=1-r,m=r),t[0]=g*n+m*o,t[1]=g*i+m*c,t[2]=g*a+m*h,t[3]=g*l+m*u,t}function Xt(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],a=s*s+r*r+n*n+i*i,l=a?1/a:0;return t[0]=-s*l,t[1]=-r*l,t[2]=-n*l,t[3]=i*l,t}function Yt(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function Zt(t,e){let s=e[0]+e[4]+e[8],r;if(s>0)r=Math.sqrt(s+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{let n=0;e[4]>e[0]&&(n=1),e[8]>e[n*3+n]&&(n=2);let i=(n+1)%3,a=(n+2)%3;r=Math.sqrt(e[n*3+n]-e[i*3+i]-e[a*3+a]+1),t[n]=.5*r,r=.5/r,t[3]=(e[i*3+a]-e[a*3+i])*r,t[i]=(e[i*3+n]+e[n*3+i])*r,t[a]=(e[a*3+n]+e[n*3+a])*r}return t}function Qt(t,e,s="YXZ"){let r=Math.sin(e[0]*.5),n=Math.cos(e[0]*.5),i=Math.sin(e[1]*.5),a=Math.cos(e[1]*.5),l=Math.sin(e[2]*.5),o=Math.cos(e[2]*.5);return s==="XYZ"?(t[0]=r*a*o+n*i*l,t[1]=n*i*o-r*a*l,t[2]=n*a*l+r*i*o,t[3]=n*a*o-r*i*l):s==="YXZ"?(t[0]=r*a*o+n*i*l,t[1]=n*i*o-r*a*l,t[2]=n*a*l-r*i*o,t[3]=n*a*o+r*i*l):s==="ZXY"?(t[0]=r*a*o-n*i*l,t[1]=n*i*o+r*a*l,t[2]=n*a*l+r*i*o,t[3]=n*a*o-r*i*l):s==="ZYX"?(t[0]=r*a*o-n*i*l,t[1]=n*i*o+r*a*l,t[2]=n*a*l-r*i*o,t[3]=n*a*o+r*i*l):s==="YZX"?(t[0]=r*a*o+n*i*l,t[1]=n*i*o+r*a*l,t[2]=n*a*l-r*i*o,t[3]=n*a*o-r*i*l):s==="XZY"&&(t[0]=r*a*o-n*i*l,t[1]=n*i*o-r*a*l,t[2]=n*a*l+r*i*o,t[3]=n*a*o+r*i*l),t}const Kt=Bt,Jt=qt,es=Dt,ts=Nt;class ss extends Array{constructor(e=0,s=0,r=0,n=1){super(e,s,r,n),this.onChange=()=>{},this._target=this;const i=["0","1","2","3"];return new Proxy(this,{set(a,l){const o=Reflect.set(...arguments);return o&&i.includes(l)&&a.onChange(),o}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set w(e){this._target[3]=e,this.onChange()}identity(){return Ut(this._target),this.onChange(),this}set(e,s,r,n){return e.length?this.copy(e):(Jt(this._target,e,s,r,n),this.onChange(),this)}rotateX(e){return Gt(this._target,this._target,e),this.onChange(),this}rotateY(e){return jt(this._target,this._target,e),this.onChange(),this}rotateZ(e){return Wt(this._target,this._target,e),this.onChange(),this}inverse(e=this._target){return Xt(this._target,e),this.onChange(),this}conjugate(e=this._target){return Yt(this._target,e),this.onChange(),this}copy(e){return Kt(this._target,e),this.onChange(),this}normalize(e=this._target){return ts(this._target,e),this.onChange(),this}multiply(e,s){return s?xe(this._target,e,s):xe(this._target,this._target,e),this.onChange(),this}dot(e){return es(this._target,e)}fromMatrix3(e){return Zt(this._target,e),this.onChange(),this}fromEuler(e,s){return Qt(this._target,e,e.order),s||this.onChange(),this}fromAxisAngle(e,s){return Vt(this._target,e,s),this.onChange(),this}slerp(e,s){return Ht(this._target,this._target,e,s),this.onChange(),this}fromArray(e,s=0){return this._target[0]=e[s],this._target[1]=e[s+1],this._target[2]=e[s+2],this._target[3]=e[s+3],this.onChange(),this}toArray(e=[],s=0){return e[s]=this[0],e[s+1]=this[1],e[s+2]=this[2],e[s+3]=this[3],e}}const rs=1e-6;function ns(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function is(t,e,s,r,n,i,a,l,o,c,h,u,d,f,p,g,m){return t[0]=e,t[1]=s,t[2]=r,t[3]=n,t[4]=i,t[5]=a,t[6]=l,t[7]=o,t[8]=c,t[9]=h,t[10]=u,t[11]=d,t[12]=f,t[13]=p,t[14]=g,t[15]=m,t}function as(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ls(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],a=e[4],l=e[5],o=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],g=e[13],m=e[14],y=e[15],w=s*l-r*a,b=s*o-n*a,_=s*c-i*a,x=r*o-n*l,v=r*c-i*l,S=n*c-i*o,C=h*g-u*p,k=h*m-d*p,A=h*y-f*p,L=u*m-d*g,M=u*y-f*g,T=d*y-f*m,E=w*T-b*M+_*L+x*A-v*k+S*C;return E?(E=1/E,t[0]=(l*T-o*M+c*L)*E,t[1]=(n*M-r*T-i*L)*E,t[2]=(g*S-m*v+y*x)*E,t[3]=(d*v-u*S-f*x)*E,t[4]=(o*A-a*T-c*k)*E,t[5]=(s*T-n*A+i*k)*E,t[6]=(m*_-p*S-y*b)*E,t[7]=(h*S-d*_+f*b)*E,t[8]=(a*M-l*A+c*C)*E,t[9]=(r*A-s*M-i*C)*E,t[10]=(p*v-g*_+y*w)*E,t[11]=(u*_-h*v-f*w)*E,t[12]=(l*k-a*L-o*C)*E,t[13]=(s*L-r*k+n*C)*E,t[14]=(g*b-p*x-m*w)*E,t[15]=(h*x-u*b+d*w)*E,t):null}function De(t){let e=t[0],s=t[1],r=t[2],n=t[3],i=t[4],a=t[5],l=t[6],o=t[7],c=t[8],h=t[9],u=t[10],d=t[11],f=t[12],p=t[13],g=t[14],m=t[15],y=e*a-s*i,w=e*l-r*i,b=e*o-n*i,_=s*l-r*a,x=s*o-n*a,v=r*o-n*l,S=c*p-h*f,C=c*g-u*f,k=c*m-d*f,A=h*g-u*p,L=h*m-d*p,M=u*m-d*g;return y*M-w*L+b*A+_*k-x*C+v*S}function be(t,e,s){let r=e[0],n=e[1],i=e[2],a=e[3],l=e[4],o=e[5],c=e[6],h=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],m=e[13],y=e[14],w=e[15],b=s[0],_=s[1],x=s[2],v=s[3];return t[0]=b*r+_*l+x*u+v*g,t[1]=b*n+_*o+x*d+v*m,t[2]=b*i+_*c+x*f+v*y,t[3]=b*a+_*h+x*p+v*w,b=s[4],_=s[5],x=s[6],v=s[7],t[4]=b*r+_*l+x*u+v*g,t[5]=b*n+_*o+x*d+v*m,t[6]=b*i+_*c+x*f+v*y,t[7]=b*a+_*h+x*p+v*w,b=s[8],_=s[9],x=s[10],v=s[11],t[8]=b*r+_*l+x*u+v*g,t[9]=b*n+_*o+x*d+v*m,t[10]=b*i+_*c+x*f+v*y,t[11]=b*a+_*h+x*p+v*w,b=s[12],_=s[13],x=s[14],v=s[15],t[12]=b*r+_*l+x*u+v*g,t[13]=b*n+_*o+x*d+v*m,t[14]=b*i+_*c+x*f+v*y,t[15]=b*a+_*h+x*p+v*w,t}function os(t,e,s){let r=s[0],n=s[1],i=s[2],a,l,o,c,h,u,d,f,p,g,m,y;return e===t?(t[12]=e[0]*r+e[4]*n+e[8]*i+e[12],t[13]=e[1]*r+e[5]*n+e[9]*i+e[13],t[14]=e[2]*r+e[6]*n+e[10]*i+e[14],t[15]=e[3]*r+e[7]*n+e[11]*i+e[15]):(a=e[0],l=e[1],o=e[2],c=e[3],h=e[4],u=e[5],d=e[6],f=e[7],p=e[8],g=e[9],m=e[10],y=e[11],t[0]=a,t[1]=l,t[2]=o,t[3]=c,t[4]=h,t[5]=u,t[6]=d,t[7]=f,t[8]=p,t[9]=g,t[10]=m,t[11]=y,t[12]=a*r+h*n+p*i+e[12],t[13]=l*r+u*n+g*i+e[13],t[14]=o*r+d*n+m*i+e[14],t[15]=c*r+f*n+y*i+e[15]),t}function cs(t,e,s){let r=s[0],n=s[1],i=s[2];return t[0]=e[0]*r,t[1]=e[1]*r,t[2]=e[2]*r,t[3]=e[3]*r,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*i,t[9]=e[9]*i,t[10]=e[10]*i,t[11]=e[11]*i,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function hs(t,e,s,r){let n=r[0],i=r[1],a=r[2],l=Math.hypot(n,i,a),o,c,h,u,d,f,p,g,m,y,w,b,_,x,v,S,C,k,A,L,M,T,E,q;return Math.abs(l)<rs?null:(l=1/l,n*=l,i*=l,a*=l,o=Math.sin(s),c=Math.cos(s),h=1-c,u=e[0],d=e[1],f=e[2],p=e[3],g=e[4],m=e[5],y=e[6],w=e[7],b=e[8],_=e[9],x=e[10],v=e[11],S=n*n*h+c,C=i*n*h+a*o,k=a*n*h-i*o,A=n*i*h-a*o,L=i*i*h+c,M=a*i*h+n*o,T=n*a*h+i*o,E=i*a*h-n*o,q=a*a*h+c,t[0]=u*S+g*C+b*k,t[1]=d*S+m*C+_*k,t[2]=f*S+y*C+x*k,t[3]=p*S+w*C+v*k,t[4]=u*A+g*L+b*M,t[5]=d*A+m*L+_*M,t[6]=f*A+y*L+x*M,t[7]=p*A+w*L+v*M,t[8]=u*T+g*E+b*q,t[9]=d*T+m*E+_*q,t[10]=f*T+y*E+x*q,t[11]=p*T+w*E+v*q,e!==t&&(t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t)}function ds(t,e){return t[0]=e[12],t[1]=e[13],t[2]=e[14],t}function Ue(t,e){let s=e[0],r=e[1],n=e[2],i=e[4],a=e[5],l=e[6],o=e[8],c=e[9],h=e[10];return t[0]=Math.hypot(s,r,n),t[1]=Math.hypot(i,a,l),t[2]=Math.hypot(o,c,h),t}function us(t){let e=t[0],s=t[1],r=t[2],n=t[4],i=t[5],a=t[6],l=t[8],o=t[9],c=t[10];const h=e*e+s*s+r*r,u=n*n+i*i+a*a,d=l*l+o*o+c*c;return Math.sqrt(Math.max(h,u,d))}const Ve=(function(){const t=[1,1,1];return function(e,s){let r=t;Ue(r,s);let n=1/r[0],i=1/r[1],a=1/r[2],l=s[0]*n,o=s[1]*i,c=s[2]*a,h=s[4]*n,u=s[5]*i,d=s[6]*a,f=s[8]*n,p=s[9]*i,g=s[10]*a,m=l+u+g,y=0;return m>0?(y=Math.sqrt(m+1)*2,e[3]=.25*y,e[0]=(d-p)/y,e[1]=(f-c)/y,e[2]=(o-h)/y):l>u&&l>g?(y=Math.sqrt(1+l-u-g)*2,e[3]=(d-p)/y,e[0]=.25*y,e[1]=(o+h)/y,e[2]=(f+c)/y):u>g?(y=Math.sqrt(1+u-l-g)*2,e[3]=(f-c)/y,e[0]=(o+h)/y,e[1]=.25*y,e[2]=(d+p)/y):(y=Math.sqrt(1+g-l-u)*2,e[3]=(o-h)/y,e[0]=(f+c)/y,e[1]=(d+p)/y,e[2]=.25*y),e}})();function fs(t,e,s,r){let n=U([t[0],t[1],t[2]]);const i=U([t[4],t[5],t[6]]),a=U([t[8],t[9],t[10]]);De(t)<0&&(n=-n),s[0]=t[12],s[1]=t[13],s[2]=t[14];const o=t.slice(),c=1/n,h=1/i,u=1/a;o[0]*=c,o[1]*=c,o[2]*=c,o[4]*=h,o[5]*=h,o[6]*=h,o[8]*=u,o[9]*=u,o[10]*=u,Ve(e,o),r[0]=n,r[1]=i,r[2]=a}function ps(t,e,s,r){const n=t,i=e[0],a=e[1],l=e[2],o=e[3],c=i+i,h=a+a,u=l+l,d=i*c,f=i*h,p=i*u,g=a*h,m=a*u,y=l*u,w=o*c,b=o*h,_=o*u,x=r[0],v=r[1],S=r[2];return n[0]=(1-(g+y))*x,n[1]=(f+_)*x,n[2]=(p-b)*x,n[3]=0,n[4]=(f-_)*v,n[5]=(1-(d+y))*v,n[6]=(m+w)*v,n[7]=0,n[8]=(p+b)*S,n[9]=(m-w)*S,n[10]=(1-(d+g))*S,n[11]=0,n[12]=s[0],n[13]=s[1],n[14]=s[2],n[15]=1,n}function gs(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],a=s+s,l=r+r,o=n+n,c=s*a,h=r*a,u=r*l,d=n*a,f=n*l,p=n*o,g=i*a,m=i*l,y=i*o;return t[0]=1-u-p,t[1]=h+y,t[2]=d-m,t[3]=0,t[4]=h-y,t[5]=1-c-p,t[6]=f+g,t[7]=0,t[8]=d+m,t[9]=f-g,t[10]=1-c-u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function ms(t,e,s,r,n){let i=1/Math.tan(e/2),a=1/(r-n);return t[0]=i/s,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=(n+r)*a,t[11]=-1,t[12]=0,t[13]=0,t[14]=2*n*r*a,t[15]=0,t}function _s(t,e,s,r,n,i,a){let l=1/(e-s),o=1/(r-n),c=1/(i-a);return t[0]=-2*l,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*o,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*c,t[11]=0,t[12]=(e+s)*l,t[13]=(n+r)*o,t[14]=(a+i)*c,t[15]=1,t}function ys(t,e,s,r){let n=e[0],i=e[1],a=e[2],l=r[0],o=r[1],c=r[2],h=n-s[0],u=i-s[1],d=a-s[2],f=h*h+u*u+d*d;f===0?d=1:(f=1/Math.sqrt(f),h*=f,u*=f,d*=f);let p=o*d-c*u,g=c*h-l*d,m=l*u-o*h;return f=p*p+g*g+m*m,f===0&&(c?l+=1e-6:o?c+=1e-6:o+=1e-6,p=o*d-c*u,g=c*h-l*d,m=l*u-o*h,f=p*p+g*g+m*m),f=1/Math.sqrt(f),p*=f,g*=f,m*=f,t[0]=p,t[1]=g,t[2]=m,t[3]=0,t[4]=u*m-d*g,t[5]=d*p-h*m,t[6]=h*g-u*p,t[7]=0,t[8]=h,t[9]=u,t[10]=d,t[11]=0,t[12]=n,t[13]=i,t[14]=a,t[15]=1,t}function ve(t,e,s){return t[0]=e[0]+s[0],t[1]=e[1]+s[1],t[2]=e[2]+s[2],t[3]=e[3]+s[3],t[4]=e[4]+s[4],t[5]=e[5]+s[5],t[6]=e[6]+s[6],t[7]=e[7]+s[7],t[8]=e[8]+s[8],t[9]=e[9]+s[9],t[10]=e[10]+s[10],t[11]=e[11]+s[11],t[12]=e[12]+s[12],t[13]=e[13]+s[13],t[14]=e[14]+s[14],t[15]=e[15]+s[15],t}function we(t,e,s){return t[0]=e[0]-s[0],t[1]=e[1]-s[1],t[2]=e[2]-s[2],t[3]=e[3]-s[3],t[4]=e[4]-s[4],t[5]=e[5]-s[5],t[6]=e[6]-s[6],t[7]=e[7]-s[7],t[8]=e[8]-s[8],t[9]=e[9]-s[9],t[10]=e[10]-s[10],t[11]=e[11]-s[11],t[12]=e[12]-s[12],t[13]=e[13]-s[13],t[14]=e[14]-s[14],t[15]=e[15]-s[15],t}function xs(t,e,s){return t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t[3]=e[3]*s,t[4]=e[4]*s,t[5]=e[5]*s,t[6]=e[6]*s,t[7]=e[7]*s,t[8]=e[8]*s,t[9]=e[9]*s,t[10]=e[10]*s,t[11]=e[11]*s,t[12]=e[12]*s,t[13]=e[13]*s,t[14]=e[14]*s,t[15]=e[15]*s,t}class j extends Array{constructor(e=1,s=0,r=0,n=0,i=0,a=1,l=0,o=0,c=0,h=0,u=1,d=0,f=0,p=0,g=0,m=1){return super(e,s,r,n,i,a,l,o,c,h,u,d,f,p,g,m),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(e){this[12]=e}set y(e){this[13]=e}set z(e){this[14]=e}set w(e){this[15]=e}set(e,s,r,n,i,a,l,o,c,h,u,d,f,p,g,m){return e.length?this.copy(e):(is(this,e,s,r,n,i,a,l,o,c,h,u,d,f,p,g,m),this)}translate(e,s=this){return os(this,s,e),this}rotate(e,s,r=this){return hs(this,r,e,s),this}scale(e,s=this){return cs(this,s,typeof e=="number"?[e,e,e]:e),this}add(e,s){return s?ve(this,e,s):ve(this,this,e),this}sub(e,s){return s?we(this,e,s):we(this,this,e),this}multiply(e,s){return e.length?s?be(this,e,s):be(this,this,e):xs(this,this,e),this}identity(){return as(this),this}copy(e){return ns(this,e),this}fromPerspective({fov:e,aspect:s,near:r,far:n}={}){return ms(this,e,s,r,n),this}fromOrthogonal({left:e,right:s,bottom:r,top:n,near:i,far:a}){return _s(this,e,s,r,n,i,a),this}fromQuaternion(e){return gs(this,e),this}setPosition(e){return this.x=e[0],this.y=e[1],this.z=e[2],this}inverse(e=this){return ls(this,e),this}compose(e,s,r){return ps(this,e,s,r),this}decompose(e,s,r){return fs(this,e,s,r),this}getRotation(e){return Ve(e,this),this}getTranslation(e){return ds(e,this),this}getScaling(e){return Ue(e,this),this}getMaxScaleOnAxis(){return us(this)}lookAt(e,s,r){return ys(this,e,s,r),this}determinant(){return De(this)}fromArray(e,s=0){return this[0]=e[s],this[1]=e[s+1],this[2]=e[s+2],this[3]=e[s+3],this[4]=e[s+4],this[5]=e[s+5],this[6]=e[s+6],this[7]=e[s+7],this[8]=e[s+8],this[9]=e[s+9],this[10]=e[s+10],this[11]=e[s+11],this[12]=e[s+12],this[13]=e[s+13],this[14]=e[s+14],this[15]=e[s+15],this}toArray(e=[],s=0){return e[s]=this[0],e[s+1]=this[1],e[s+2]=this[2],e[s+3]=this[3],e[s+4]=this[4],e[s+5]=this[5],e[s+6]=this[6],e[s+7]=this[7],e[s+8]=this[8],e[s+9]=this[9],e[s+10]=this[10],e[s+11]=this[11],e[s+12]=this[12],e[s+13]=this[13],e[s+14]=this[14],e[s+15]=this[15],e}}function bs(t,e,s="YXZ"){return s==="XYZ"?(t[1]=Math.asin(Math.min(Math.max(e[8],-1),1)),Math.abs(e[8])<.99999?(t[0]=Math.atan2(-e[9],e[10]),t[2]=Math.atan2(-e[4],e[0])):(t[0]=Math.atan2(e[6],e[5]),t[2]=0)):s==="YXZ"?(t[0]=Math.asin(-Math.min(Math.max(e[9],-1),1)),Math.abs(e[9])<.99999?(t[1]=Math.atan2(e[8],e[10]),t[2]=Math.atan2(e[1],e[5])):(t[1]=Math.atan2(-e[2],e[0]),t[2]=0)):s==="ZXY"?(t[0]=Math.asin(Math.min(Math.max(e[6],-1),1)),Math.abs(e[6])<.99999?(t[1]=Math.atan2(-e[2],e[10]),t[2]=Math.atan2(-e[4],e[5])):(t[1]=0,t[2]=Math.atan2(e[1],e[0]))):s==="ZYX"?(t[1]=Math.asin(-Math.min(Math.max(e[2],-1),1)),Math.abs(e[2])<.99999?(t[0]=Math.atan2(e[6],e[10]),t[2]=Math.atan2(e[1],e[0])):(t[0]=0,t[2]=Math.atan2(-e[4],e[5]))):s==="YZX"?(t[2]=Math.asin(Math.min(Math.max(e[1],-1),1)),Math.abs(e[1])<.99999?(t[0]=Math.atan2(-e[9],e[5]),t[1]=Math.atan2(-e[2],e[0])):(t[0]=0,t[1]=Math.atan2(e[8],e[10]))):s==="XZY"&&(t[2]=Math.asin(-Math.min(Math.max(e[4],-1),1)),Math.abs(e[4])<.99999?(t[0]=Math.atan2(e[6],e[5]),t[1]=Math.atan2(e[8],e[0])):(t[0]=Math.atan2(-e[9],e[10]),t[1]=0)),t}const Ee=new j;class vs extends Array{constructor(e=0,s=e,r=e,n="YXZ"){super(e,s,r),this.order=n,this.onChange=()=>{},this._target=this;const i=["0","1","2"];return new Proxy(this,{set(a,l){const o=Reflect.set(...arguments);return o&&i.includes(l)&&a.onChange(),o}})}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(e){this._target[0]=e,this.onChange()}set y(e){this._target[1]=e,this.onChange()}set z(e){this._target[2]=e,this.onChange()}set(e,s=e,r=e){return e.length?this.copy(e):(this._target[0]=e,this._target[1]=s,this._target[2]=r,this.onChange(),this)}copy(e){return this._target[0]=e[0],this._target[1]=e[1],this._target[2]=e[2],this.onChange(),this}reorder(e){return this._target.order=e,this.onChange(),this}fromRotationMatrix(e,s=this.order){return bs(this._target,e,s),this.onChange(),this}fromQuaternion(e,s=this.order,r){return Ee.fromQuaternion(e),this._target.fromRotationMatrix(Ee,s),r||this.onChange(),this}fromArray(e,s=0){return this._target[0]=e[s],this._target[1]=e[s+1],this._target[2]=e[s+2],this}toArray(e=[],s=0){return e[s]=this[0],e[s+1]=this[1],e[s+2]=this[2],e}}class ws{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new j,this.worldMatrix=new j,this.matrixAutoUpdate=!0,this.worldMatrixNeedsUpdate=!1,this.position=new R,this.quaternion=new ss,this.scale=new R(1),this.rotation=new vs,this.up=new R(0,1,0),this.rotation._target.onChange=()=>this.quaternion.fromEuler(this.rotation,!0),this.quaternion._target.onChange=()=>this.rotation.fromQuaternion(this.quaternion,void 0,!0)}setParent(e,s=!0){this.parent&&e!==this.parent&&this.parent.removeChild(this,!1),this.parent=e,s&&e&&e.addChild(this,!1)}addChild(e,s=!0){~this.children.indexOf(e)||this.children.push(e),s&&e.setParent(this,!1)}removeChild(e,s=!0){~this.children.indexOf(e)&&this.children.splice(this.children.indexOf(e),1),s&&e.setParent(null,!1)}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||e)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,e=!0);for(let s=0,r=this.children.length;s<r;s++)this.children[s].updateMatrixWorld(e)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(e){if(!e(this))for(let s=0,r=this.children.length;s<r;s++)this.children[s].traverse(e)}decompose(){this.matrix.decompose(this.quaternion._target,this.position,this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(e,s=!1){s?this.matrix.lookAt(this.position,e,this.up):this.matrix.lookAt(e,this.position,this.up),this.matrix.getRotation(this.quaternion._target),this.rotation.fromQuaternion(this.quaternion)}}function Es(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[4],t[4]=e[5],t[5]=e[6],t[6]=e[8],t[7]=e[9],t[8]=e[10],t}function Ss(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],a=s+s,l=r+r,o=n+n,c=s*a,h=r*a,u=r*l,d=n*a,f=n*l,p=n*o,g=i*a,m=i*l,y=i*o;return t[0]=1-u-p,t[3]=h-y,t[6]=d+m,t[1]=h+y,t[4]=1-c-p,t[7]=f-g,t[2]=d-m,t[5]=f+g,t[8]=1-c-u,t}function Cs(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function As(t,e,s,r,n,i,a,l,o,c){return t[0]=e,t[1]=s,t[2]=r,t[3]=n,t[4]=i,t[5]=a,t[6]=l,t[7]=o,t[8]=c,t}function Ms(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function $s(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],a=e[4],l=e[5],o=e[6],c=e[7],h=e[8],u=h*a-l*c,d=-h*i+l*o,f=c*i-a*o,p=s*u+r*d+n*f;return p?(p=1/p,t[0]=u*p,t[1]=(-h*r+n*c)*p,t[2]=(l*r-n*a)*p,t[3]=d*p,t[4]=(h*s-n*o)*p,t[5]=(-l*s+n*i)*p,t[6]=f*p,t[7]=(-c*s+r*o)*p,t[8]=(a*s-r*i)*p,t):null}function Se(t,e,s){let r=e[0],n=e[1],i=e[2],a=e[3],l=e[4],o=e[5],c=e[6],h=e[7],u=e[8],d=s[0],f=s[1],p=s[2],g=s[3],m=s[4],y=s[5],w=s[6],b=s[7],_=s[8];return t[0]=d*r+f*a+p*c,t[1]=d*n+f*l+p*h,t[2]=d*i+f*o+p*u,t[3]=g*r+m*a+y*c,t[4]=g*n+m*l+y*h,t[5]=g*i+m*o+y*u,t[6]=w*r+b*a+_*c,t[7]=w*n+b*l+_*h,t[8]=w*i+b*o+_*u,t}function ks(t,e,s){let r=e[0],n=e[1],i=e[2],a=e[3],l=e[4],o=e[5],c=e[6],h=e[7],u=e[8],d=s[0],f=s[1];return t[0]=r,t[1]=n,t[2]=i,t[3]=a,t[4]=l,t[5]=o,t[6]=d*r+f*a+c,t[7]=d*n+f*l+h,t[8]=d*i+f*o+u,t}function Ls(t,e,s){let r=e[0],n=e[1],i=e[2],a=e[3],l=e[4],o=e[5],c=e[6],h=e[7],u=e[8],d=Math.sin(s),f=Math.cos(s);return t[0]=f*r+d*a,t[1]=f*n+d*l,t[2]=f*i+d*o,t[3]=f*a-d*r,t[4]=f*l-d*n,t[5]=f*o-d*i,t[6]=c,t[7]=h,t[8]=u,t}function Ts(t,e,s){let r=s[0],n=s[1];return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=n*e[3],t[4]=n*e[4],t[5]=n*e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t}function Fs(t,e){let s=e[0],r=e[1],n=e[2],i=e[3],a=e[4],l=e[5],o=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],p=e[12],g=e[13],m=e[14],y=e[15],w=s*l-r*a,b=s*o-n*a,_=s*c-i*a,x=r*o-n*l,v=r*c-i*l,S=n*c-i*o,C=h*g-u*p,k=h*m-d*p,A=h*y-f*p,L=u*m-d*g,M=u*y-f*g,T=d*y-f*m,E=w*T-b*M+_*L+x*A-v*k+S*C;return E?(E=1/E,t[0]=(l*T-o*M+c*L)*E,t[1]=(o*A-a*T-c*k)*E,t[2]=(a*M-l*A+c*C)*E,t[3]=(n*M-r*T-i*L)*E,t[4]=(s*T-n*A+i*k)*E,t[5]=(r*A-s*M-i*C)*E,t[6]=(g*S-m*v+y*x)*E,t[7]=(m*_-p*S-y*b)*E,t[8]=(p*v-g*_+y*w)*E,t):null}class Rs extends Array{constructor(e=1,s=0,r=0,n=0,i=1,a=0,l=0,o=0,c=1){return super(e,s,r,n,i,a,l,o,c),this}set(e,s,r,n,i,a,l,o,c){return e.length?this.copy(e):(As(this,e,s,r,n,i,a,l,o,c),this)}translate(e,s=this){return ks(this,s,e),this}rotate(e,s=this){return Ls(this,s,e),this}scale(e,s=this){return Ts(this,s,e),this}multiply(e,s){return s?Se(this,e,s):Se(this,this,e),this}identity(){return Ms(this),this}copy(e){return Cs(this,e),this}fromMatrix4(e){return Es(this,e),this}fromQuaternion(e){return Ss(this,e),this}fromBasis(e,s,r){return this.set(e[0],e[1],e[2],s[0],s[1],s[2],r[0],r[1],r[2]),this}inverse(e=this){return $s(this,e),this}getNormalMatrix(e){return Fs(this,e),this}}let Ps=0;class Os extends ws{constructor(e,{geometry:s,program:r,mode:n=e.TRIANGLES,frustumCulled:i=!0,renderOrder:a=0}={}){super(),e.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=e,this.id=Ps++,this.geometry=s,this.program=r,this.mode=n,this.frustumCulled=i,this.renderOrder=a,this.modelViewMatrix=new j,this.normalMatrix=new Rs,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(e){return this.beforeRenderCallbacks.push(e),this}onAfterRender(e){return this.afterRenderCallbacks.push(e),this}draw({camera:e}={}){e&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=e.projectionMatrix,this.program.uniforms.cameraPosition.value=e.worldPosition,this.program.uniforms.viewMatrix.value=e.viewMatrix,this.modelViewMatrix.multiply(e.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix),this.beforeRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:e}));let s=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:s}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:e}))}}const Ce={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function Ae(t){t.length===4&&(t=t[0]+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]);const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e||console.warn(`Unable to convert hex string ${t} to rgb values`),[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]}function zs(t){return t=parseInt(t),[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function Me(t){return t===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(t)?t[0]==="#"?Ae(t):Ce[t.toLowerCase()]?Ae(Ce[t.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):zs(t)}class Is extends Array{constructor(e){return Array.isArray(e)?super(...e):super(...Me(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(Me(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}}class Bs extends Lt{constructor(e,{attributes:s={}}={}){Object.assign(s,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(e,s)}}const qs=`#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`,Ns=`#version 300 es
precision highp float;

uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;

out vec4 fragColor;

vec3 permute(vec3 x) {
  return mod(((x * 34.0) + 1.0) * x, 289.0);
}

float snoise(vec2 v){
  const vec4 C = vec4(
      0.211324865405187, 0.366025403784439,
      -0.577350269189626, 0.024390243902439
  );
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);

  vec3 p = permute(
      permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0)
  );

  vec3 m = max(
      0.5 - vec3(
          dot(x0, x0),
          dot(x12.xy, x12.xy),
          dot(x12.zw, x12.zw)
      ),
      0.0
  );
  m = m * m;
  m = m * m;

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);

  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

struct ColorStop {
  vec3 color;
  float position;
};

#define COLOR_RAMP(colors, factor, finalColor) {                int index = 0;                                              for (int i = 0; i < 2; i++) {                                    ColorStop currentColor = colors[i];                         bool isInBetween = currentColor.position <= factor;         index = int(mix(float(index), float(i), float(isInBetween)));   }                                                           ColorStop currentColor = colors[index];                     ColorStop nextColor = colors[index + 1];                    float range = nextColor.position - currentColor.position;   float lerpFactor = (factor - currentColor.position) / range;   finalColor = mix(currentColor.color, nextColor.color, lerpFactor); }

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;

  ColorStop colors[3];
  colors[0] = ColorStop(uColorStops[0], 0.0);
  colors[1] = ColorStop(uColorStops[1], 0.5);
  colors[2] = ColorStop(uColorStops[2], 1.0);

  vec3 rampColor;
  COLOR_RAMP(colors, uv.x, rampColor);

  float height = snoise(vec2(uv.x * 2.0 + uTime * 0.1, uTime * 0.25)) * 0.5 * uAmplitude;
  height = exp(height);
  height = (uv.y * 2.0 - height + 0.2);
  float intensity = 0.6 * height;

  float midPoint = 0.20;
  float auroraAlpha = smoothstep(midPoint - uBlend * 0.5, midPoint + uBlend * 0.5, intensity);

  vec3 auroraColor = intensity * rampColor;

  fragColor = vec4(auroraColor * auroraAlpha, auroraAlpha);
}
`,Ds=["#8d27e6","#9167d6","#3e15df"],Q=t=>{const e=new Is(t);return[e.r,e.g,e.b]};function Us(t,e={}){if(!t)return{setScene:()=>{},dispose:()=>{}};const s={colorStops:e.colorStops??Ds,amplitude:e.amplitude??1,blend:e.blend??.5,speed:e.speed??.4},r=typeof window.matchMedia=="function"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=Math.min(window.devicePixelRatio||1,2),i=new It({alpha:!0,premultipliedAlpha:!0,antialias:!0,dpr:n}),a=i.gl;a.clearColor(0,0,0,0),a.enable(a.BLEND),a.blendFunc(a.ONE,a.ONE_MINUS_SRC_ALPHA),a.canvas.style.backgroundColor="transparent",a.canvas.classList.add("aurora-canvas");const l=new Bs(a);l.attributes.uv&&delete l.attributes.uv;const o={stops:s.colorStops.map(Q),targetStops:s.colorStops.map(Q),amplitude:s.amplitude,targetAmplitude:s.amplitude},c=new Ft(a,{vertex:qs,fragment:Ns,uniforms:{uTime:{value:0},uAmplitude:{value:o.amplitude},uColorStops:{value:o.stops},uResolution:{value:[t.offsetWidth,t.offsetHeight]},uBlend:{value:s.blend}}}),h=new Os(a,{geometry:l,program:c});t.appendChild(a.canvas);const u=.045;function d(){for(let _=0;_<o.stops.length;_+=1)for(let x=0;x<3;x+=1){const v=o.stops[_][x],S=o.targetStops[_][x];o.stops[_][x]=v+(S-v)*u}o.amplitude+=(o.targetAmplitude-o.amplitude)*u,c.uniforms.uAmplitude.value=o.amplitude}function f(){const _=t.offsetWidth,x=t.offsetHeight;i.dpr=Math.min(window.devicePixelRatio||1,2),i.setSize(_,x),c.uniforms.uResolution.value=[a.canvas.width,a.canvas.height]}window.addEventListener("resize",f),f();let p=0;const g=_=>{p=requestAnimationFrame(g),d(),c.uniforms.uTime.value=_*.01*s.speed*.1,i.render({scene:h})};function m(){p===0&&(p=requestAnimationFrame(g))}function y(){cancelAnimationFrame(p),p=0}const w=typeof IntersectionObserver=="function"?new IntersectionObserver(([_])=>{r||((_==null?void 0:_.isIntersecting)??!0?m():y())}):null;w==null||w.observe(t),r?(c.uniforms.uTime.value=12,i.render({scene:h})):m();function b(_={}){Array.isArray(_.colorStops)&&(o.targetStops=_.colorStops.map(Q)),typeof _.amplitude=="number"&&(o.targetAmplitude=_.amplitude),r&&(o.stops=o.targetStops.map(x=>[...x]),o.amplitude=o.targetAmplitude,c.uniforms.uColorStops.value=o.stops,c.uniforms.uAmplitude.value=o.amplitude,i.render({scene:h}))}return{setScene:b,dispose(){var _;y(),w==null||w.disconnect(),window.removeEventListener("resize",f),a.canvas.parentNode===t&&t.removeChild(a.canvas),(_=a.getExtension("WEBGL_lose_context"))==null||_.loseContext()}}}const Vs=O({claude:{monogram:"C",tint:"#bb9af7"},codex:{monogram:"X",tint:"#9ece6a"},opencode:{monogram:"O",tint:"#7dcfff"}}),Gs=O([{id:$.slug,label:$.slug,path:`…evibe-workspace/${$.slug}`,highlighted:!0,preset:"trio",agents:["claude","codex","opencode"]},{id:"spacevibe-arena",label:"spacevibe-arena",path:"…rkspace/spacevibe-arena",highlighted:!1,preset:"duo",agents:["claude"]},{id:"spacevibe-api",label:"spacevibe-api",path:"…rkspace/spacevibe-api",highlighted:!1,preset:"quad",agents:["codex"]}]),js=O({duo:2,trio:3,quad:4}),Ws=O({[$.slug]:"busy","spacevibe-arena":"unread","spacevibe-api":"busy"}),re=O({1:{colorStops:["#646f7d","#d7dbdf","#4b535d"],amplitude:1},2:{colorStops:["#7c7e83","#eff0f0","#5c5d61"],amplitude:1.15},3:{colorStops:["#84796c","#e8e6e3","#625a50"],amplitude:1.25}}),K=O([{cmd:"echo $SHELL && alias claude",out:["/bin/zsh","claude='~/.claude/local/claude'"],chip:"Pty"},{cmd:'echo "box-drawing ├─┬─┐ │ └─┴─┘ renders clean ✓"',out:["box-drawing ├─┬─┐ │ └─┴─┘ renders clean ✓"],chip:"Pty"},{cmd:`grep -ri telemetry ${$.bundlePath}`,out:["(no matches)"],chip:"Local"},{cmd:`du -sh ${$.bundlePath}`,out:[` 18M	${$.bundlePath}`],chip:"Native"}]),Ge=3;function Hs(t,e,s){const r=e-s;return r<=0?0:Math.min(1,Math.max(0,-t/r))}function Xs(t,e=Ge){const s=Math.min(1,Math.max(0,t));return Math.min(e,Math.floor(s*e)+1)}const V="❯ ";function Ys(t){const e=[...t.querySelectorAll("[data-reveal]")],s=new IntersectionObserver(r=>{for(const n of r)n.isIntersecting&&(n.target.classList.add("is-revealed"),s.unobserve(n.target))},{threshold:.25});return e.forEach(r=>s.observe(r)),()=>s.disconnect()}function Zs(t,e){const s=t.querySelector(".tour__appwin");if(!s)throw new Error("Tour window markup is missing.");if(e.matches)return s.classList.add("is-entered"),()=>{};const r=new IntersectionObserver(n=>{for(const i of n)i.isIntersecting&&(i.target.classList.add("is-entered"),r.disconnect())},{threshold:.3});return r.observe(s),()=>r.disconnect()}function Qs(t,e,s){const r=window.matchMedia("(max-width: 768px)");function n(){r.matches?(t.classList.add("tour--static"),t.dataset.chapter="3",s.setScene(re[3])):(t.classList.remove("tour--static"),e())}return n(),r.addEventListener("change",n),()=>r.removeEventListener("change",n)}function Ks(t,e){const s=t.querySelector("[data-proof-term]"),r=new Map([...t.querySelectorAll("[data-proof]")].map(d=>[d.dataset.proof,d]));if(!s)throw new Error("Proof terminal markup is missing.");let n=null,i=!1,a=!1;function l(d){const f=document.createElement("div");return f.className=d,s.append(f),f}function o(){l("tour__tl tour__tl--cmd tour__tl--idle").textContent=V}function c(){var d;for(const f of K){l("tour__tl tour__tl--cmd").textContent=V+f.cmd;for(const p of f.out)l("tour__tl tour__tl--out").textContent=p;(d=r.get(f.chip))==null||d.classList.add("is-lit")}o()}function h(d){if(a)return;if(d>=K.length){o();return}const f=K[d],p=l("tour__tl tour__tl--cmd tour__tl--typing");p.textContent=V;let g=0;function m(){if(!a){if(g<f.cmd.length){g+=1,p.textContent=V+f.cmd.slice(0,g),n=setTimeout(m,26+Math.random()*38);return}p.classList.remove("tour__tl--typing"),y(0)}}function y(w){var b;if(!a){if(w<f.out.length){l("tour__tl tour__tl--out").textContent=f.out[w],n=setTimeout(()=>y(w+1),150);return}(b=r.get(f.chip))==null||b.classList.add("is-lit"),n=setTimeout(()=>h(d+1),680)}}n=setTimeout(m,220)}const u=new IntersectionObserver(d=>{i||!d.some(f=>f.isIntersecting)||(i=!0,u.disconnect(),e.matches?c():h(0))},{threshold:.35});return u.observe(s),()=>{a=!0,clearTimeout(n),u.disconnect()}}function Js(t){const e=[1,2,3].map(s=>`
        <button type="button" class="tour__chapter" data-ch="${s}">
          <span class="tour__chapnum">0${s}</span>
          <span class="tour__chaptext">
            <strong data-copy="tourCh${s}Title">${t[`tourCh${s}Title`]}</strong>
            <span data-copy="tourCh${s}Body">${t[`tourCh${s}Body`]}</span>
          </span>
        </button>
      `).join("");return`
    <aside class="tour__rail">
      <p class="band-label" data-copy="tourKicker">${t.tourKicker}</p>
      ${e}
    </aside>
  `}function er(t){const e=Vs[t];return`<span class="tour__agentchip" style="--chip-tint: ${e.tint}">${e.monogram}</span>`}function tr(t){const e="<i></i>".repeat(js[t]);return`<span class="tour__thumb" data-preset="${t}">${e}</span>`}function sr(t){return`
    <div class="tour__recent${t.highlighted?" is-hot":""}">
      ${tr(t.preset)}
      <span class="tour__rectext">
        <strong>${t.label}</strong>
        <span>${t.path}</span>
      </span>
      <span class="tour__recagents">${t.agents.map(er).join("")}</span>
      ${t.highlighted?'<kbd class="tour__openkbd">↵ Open</kbd>':""}
    </div>
  `}function rr(){return`
    <div class="tour__board">
      <div class="tour__boardlogo">
        <img src="${W}" alt="" />
        <span>${$.name}</span>
      </div>
      <div class="tour__recents">${Gs.map(sr).join("")}</div>
    </div>
  `}function nr(){const[t,e,s]=ne;return`
    <figure class="a-appwin tour__appwin" data-enter role="img" aria-label="${ke}">
      ${Te()}
      <div class="a-appwin__body" aria-hidden="true">
        ${Fe(Ws)}
        <div class="tour__scene">
          ${rr()}
          <div class="a-appwin__grid tour__scenegrid">
            <div class="a-appwin__col">
              ${I(t)}
              ${I(e)}
            </div>
            ${I(s)}
          </div>
        </div>
      </div>
      ${Re()}
    </figure>
  `}function ir(t){const e=["Pty","Local","Native"].map((r,n)=>`
        <article class="tour__proof" data-proof="${r}" data-reveal style="--reveal-delay: ${80+n*80}ms">
          <strong data-copy="proof${r}Title">${t[`proof${r}Title`]}</strong>
          <p data-copy="proof${r}Body">${t[`proof${r}Body`]}</p>
        </article>
      `).join(""),s=[["⌘D","scSplit"],["⌘⇧D","scSplitH"],["⌘T","scTab"],["⌘E","scExpand"],["⌘F","scFind"],["⌘K","scClear"]].map(([r,n])=>`
        <span class="tour__sc">
          <kbd>${r}</kbd>
          <span data-copy="${n}">${t[n]}</span>
        </span>
      `).join("");return`
    <footer class="tour__finale">
      <div class="tour__band" data-reveal>
        <p class="band-label" data-copy="finaleLabel">${t.finaleLabel}</p>
        <h2 data-copy="finaleTitle">${t.finaleTitle}</h2>
      </div>
      <div class="tour__finale-grid">
        <div class="tour__proofs">${e}</div>
        <figure
          class="tour__proofterm"
          data-reveal
          style="--reveal-delay: 200ms"
          aria-label="Terminal session proving the shell is untouched"
        >
          <div class="tour__proofterm-head" aria-hidden="true">
            <i></i>zsh — ${$.slug}
          </div>
          <div class="tour__proofterm-body" data-proof-term aria-hidden="true"></div>
        </figure>
      </div>
      <div class="tour__shortcuts" data-reveal style="--reveal-delay: 120ms">${s}</div>
      <div class="tour__ctas" data-reveal style="--reveal-delay: 220ms">
        <a
          class="tour__cta tour__cta--primary"
          href="https://github.com/mxrsv/spacevibe-deck/releases/latest"
          target="_blank"
          rel="noreferrer"
        >
          <span class="a-cta-lead">
            ${Pe()}
            <span data-copy="downloadMac">${t.downloadMac}</span>
          </span>
          <span aria-hidden="true">↓</span>
        </a>
        <button class="tour__cta" type="button" disabled>
          <span class="a-cta-lead">
            ${Oe()}
            <span data-copy="downloadWin">${t.downloadWin}</span>
          </span>
          <span class="a-cta-tag" data-copy="comingSoon">${t.comingSoon}</span>
        </button>
        <a class="tour__cta" href="#${B}">
          <span data-copy="primaryCta">${t.primaryCta}</span>
          <span aria-hidden="true">↑</span>
        </a>
        <a
          class="tour__cta"
          href="https://github.com/mxrsv/spacevibe-deck"
          target="_blank"
          rel="noreferrer"
        >
          <span data-copy="secondaryCta">${t.secondaryCta}</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </footer>
  `}const D="https://github.com/mxrsv/spacevibe-deck";function ar(t){return`
    <footer class="site-footer">
      <div class="site-footer__glow" aria-hidden="true"></div>
      <div class="site-footer__inner">
        <div class="site-footer__brand">
          <span class="site-footer__mark">
            <img src="${W}" alt="" width="30" height="30" />
            <strong data-copy="navProduct">${t.navProduct}</strong>
          </span>
          <p class="site-footer__tagline" data-copy="footerTagline">${t.footerTagline}</p>
        </div>
        <nav class="site-footer__col" aria-label="${t.footerColProduct}">
          <span class="site-footer__coltitle" data-copy="footerColProduct">${t.footerColProduct}</span>
          <a href="${D}/releases/latest" target="_blank" rel="noreferrer" data-copy="downloadMac">${t.downloadMac}</a>
          <a class="site-footer__link" href="#${B}" data-copy="primaryCta">${t.primaryCta}</a>
        </nav>
        <nav class="site-footer__col" aria-label="${t.footerColProject}">
          <span class="site-footer__coltitle" data-copy="footerColProject">${t.footerColProject}</span>
          <a href="${D}" target="_blank" rel="noreferrer" data-copy="navGithub">${t.navGithub}</a>
          <a href="${D}/releases" target="_blank" rel="noreferrer" data-copy="footerReleases">${t.footerReleases}</a>
          <a href="${D}/issues" target="_blank" rel="noreferrer" data-copy="footerIssues">${t.footerIssues}</a>
          <a href="${D}/blob/main/LICENSE" target="_blank" rel="noreferrer" data-copy="footerLicense">${t.footerLicense}</a>
        </nav>
      </div>
      <div class="site-footer__base">
        <span>© 2026 mxrsv</span>
        <span class="site-footer__built" data-copy="footerBuilt">${t.footerBuilt}</span>
      </div>
    </footer>
  `}function lr(t){return{markup:`
      <section class="tour" data-chapter="1">
        <div class="tour__track">
          <div class="tour__sticky">
            <div class="tour__motion" aria-hidden="true"></div>
            <div class="tour__layout">
              ${Js(t)}
              ${nr()}
            </div>
          </div>
        </div>
        ${ir(t)}
        ${ar(t)}
      </section>
    `,mount(e){const s=e.querySelector(".tour");if(!s)throw new Error("Tour root is missing.");const r=s.querySelector(".tour__track"),n=window.matchMedia("(prefers-reduced-motion: reduce)"),i=Us(s.querySelector(".tour__motion"),re[1]),a=Ie(s.querySelector(".tour__scenegrid")),l=Ys(s),o=Ks(s,n),c=Zs(s,n);let h=null;function u(){if(h=null,s.classList.contains("tour--static"))return;const g=r.getBoundingClientRect(),m=Hs(g.top,g.height,window.innerHeight);if(g.height-window.innerHeight<=0)return;const y=String(Xs(m));s.dataset.chapter!==y&&(s.dataset.chapter=y,i.setScene(re[y]))}function d(){h===null&&(h=requestAnimationFrame(u))}function f(g){if(s.classList.contains("tour--static"))return;const m=g.target.closest(".tour__chapter");if(!m||!s.contains(m))return;const y=r.getBoundingClientRect(),w=y.height-window.innerHeight,b=Number(m.dataset.ch)-1,_=window.scrollY+y.top+w*((b+.5)/Ge);window.scrollTo({top:_,behavior:n.matches?"auto":"smooth"})}window.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",d,{passive:!0}),s.addEventListener("click",f);const p=Qs(s,u,i);return()=>{window.removeEventListener("scroll",d),window.removeEventListener("resize",d),s.removeEventListener("click",f),h!==null&&cancelAnimationFrame(h),p(),c(),o(),l(),a(),i.dispose()}}}}function or(t,e){const s=t.querySelector(".tour");if(!s)throw new Error("Tour root is missing.");for(const r of s.querySelectorAll("[data-copy]")){const n=e[r.dataset.copy];typeof n=="string"&&(r.textContent=n)}}const P=document.querySelector("#specimen-root");if(!P)throw new Error("Landing page root is missing.");let F=qe(window.location),$e=()=>{};function cr(){$e();const t=ht(z[F],F),e=Je(z[F]),s=lr(z[F]);P.innerHTML=t.markup+e.markup+s.markup;const r=t.mount(P),n=e.mount(P),i=s.mount(P);$e=()=>{i(),n(),r()},document.documentElement.lang=F}function hr(t){const e=t.target.closest("button[data-locale]");if(!e||!P.contains(e))return;const s=e.dataset.locale;!Be.includes(s)||s===F||(ut(s),F=qe(window.location),dt(P,z[F],F),Ke(P,z[F]),or(P,z[F]),document.documentElement.lang=F)}P.addEventListener("click",hr);cr();
