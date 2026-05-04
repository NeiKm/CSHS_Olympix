document.addEventListener('DOMContentLoaded', () => {
    const i18n = {
        current: 'ko',
        dict: {
            ko: {
                nav_dashboard: "메인", nav_schedule: "시간표", nav_cafeteria: "급식", nav_login: "로그인",
                hero_badge: "CSHS 리더보드: 정상을 향해 도전하세요.", hero_title: "CSHS Olympix<br>천안상업고등학교",
                hero_desc: "천안상업고등학교 랭킹의 정상을 차지하세요.",
                stat_time: "현재 시간", stat_weather: "천안시 날씨",
                lb_badge: "명예의 전당", lb_title: "순위표", lb_desc: "학업, 체육, 개발 분야의 최고 학생들.",
                tab_study: "📚 학업", tab_sport: "🏃 체육", tab_dev: "💻 개발",
                lb_btn: "전체 순위 →", card_tasks: "과제", card_tasks_desc: "이번 주 주요 과제입니다.", card_tasks_btn: "확인하기",
                card_it: "IT 지원", card_it_desc: "PC 또는 소프트웨어 문제?", card_it_btn: "신청하기",
                sched_title: "시간표", sched_class_label: "학급:", sched_next_label: "다음 수업까지:", sched_calendar: "전체 캘린더",
                meal_title: "오늘의 급식", meal_img: "오늘의 급식 사진", meal_btn: "내일 메뉴",
                event_title: "학사일정 (이벤트)", event_1: "중간고사 시작", event_2: "체육대회", event_btn: "모든 행사 →",
                footer_text: "2026 천안상업고등학교 | 비공식 학생 프로젝트",
                footer_be: "문의: CSHS_olympix", footer_fe: "개발 지원: https://github.com/NeiKm/CSHS_Olympix.git",
                dev_badge: "진행 중", dev_title: "개발 중인 섹션",
                dev_msg_1: "이 섹션은 아직 개발 중이며 점진적으로 개선되고 있습니다. 본 프로젝트는 1인 개발자가 운영하는 스타트업이므로 일부 기능은 즉시 제공되지 않을 수 있습니다.",
                dev_msg_2: "디자인, 웹 개발(HTML, CSS, JS) 기술이 있거나 Python 백엔드(FastAPI)에 익숙하다면 개발에 참여하여 프로젝트 발전에 기여해 주시기 바랍니다.",
                dev_contact: "Instagram으로 연락: @CSHS_Olympix", dev_back: "← 메인으로 돌아가기",

                lb_hero_badge: "Top 30 순위", lb_search: "이름 또는 ID로 검색...", 
                lb_loading: "⏳ 순위 로딩 중...", lb_no_results: "🔍 결과 없음"
            },
            en: {
                nav_dashboard: "Dashboard", nav_schedule: "Schedule", nav_cafeteria: "Cafeteria", nav_login: "Login",
                hero_badge: "CSHS Leaderboard: Climb to the top.", hero_title: "CSHS Olympix<br>천안상업고등학교",
                hero_desc: "Rise to the top of the Cheonan Commercial High School rankings.",
                stat_time: "Current Time", stat_weather: "Cheonan Weather",
                lb_badge: "Hall of Fame", lb_title: "Leaderboard", lb_desc: "Top students in academics, sports, and development.",
                tab_study: "📚 Academics", tab_sport: "🏃 Sports", tab_dev: "💻 Dev",
                lb_btn: "View Full Ranking →", card_tasks: "Tasks", card_tasks_desc: "Main tasks for this week.", card_tasks_btn: "Check",
                card_it: "IT Support", card_it_desc: "PC or software issues?", card_it_btn: "Submit Ticket",
                sched_title: "Class Schedule", sched_class_label: "Your Class:", sched_next_label: "Next class in:", sched_calendar: "Full Calendar",
                meal_title: "Today's Lunch", meal_img: "Today's meal image", meal_btn: "Tomorrow's Menu",
                event_title: "School Schedule (Events)", event_1: "Midterm Exams Start", event_2: "Sports Day", event_btn: "All Events →",
                footer_text: "2026 천안상업고등학교 | Unofficial Student Project",
                footer_be: "Contact: CSHS_olympix", footer_fe: "Dev Help: https://github.com/NeiKm/CSHS_Olympix.git",
                dev_badge: "In Progress", dev_title: "Section Under Development",
                dev_msg_1: "This section is still under development and is being gradually improved. The project is a startup currently run by a single developer, so some features may not be available immediately.",
                dev_msg_2: "If you have skills in design, web development (HTML, CSS, JS), or are proficient in Python backend (FastAPI), you are welcome to join the development and contribute to the project's growth.",
                dev_contact: "Contact via Instagram: @CSHS_Olympix", dev_back: "← Back to Dashboard",

                lb_hero_badge: "Top 30 Rankings", lb_search: "Search by name or ID...",
                lb_loading: "⏳ Loading Rankings...", lb_no_results: "🔍 No results found"
            },
            ru: {
                nav_dashboard: "Главное", nav_schedule: "Расписание", nav_cafeteria: "Столовая", nav_login: "Войти",
                hero_badge: "Таблица лидеров CSHS: поднимись в топ.", hero_title: "CSHS Olympix<br>천안상업고등학교",
                hero_desc: "Поднимись на вершину рейтинга 천안상업고등학교",
                stat_time: "Текущее время", stat_weather: "천안시 Погода",
                lb_badge: "Зал славы", lb_title: "Таблица лидеров", lb_desc: "Лучшие ученики в учебе, спорте и разработке.",
                tab_study: "📚 Учеба", tab_sport: "🏃 Спорт", tab_dev: "💻 Dev",
                lb_btn: "Полный рейтинг →", card_tasks: "Задания", card_tasks_desc: "Актуальные задачи на неделю.", card_tasks_btn: "Проверить",
                card_it: "IT-Поддержка", card_it_desc: "Проблемы с ПК или софтом?", card_it_btn: "Заявка",
                sched_title: "Расписание занятий", sched_class_label: "Ваш класс:", sched_next_label: "Следующий урок через:", sched_calendar: "Весь календарь",
                meal_title: "Сегодняшний обед", meal_img: "Изображение сегодняшнего блюда", meal_btn: "Меню на завтра",
                event_title: "학사일정 (События)", event_1: "중간고사 시작", event_2: "체육대회", event_btn: "Все события →",
                footer_text: "2026 천안상업고등학교 | Неофициальный студенческий проект",
                footer_be: "Связь: CSHS_olympix", footer_fe: "Помощь в разработке: https://github.com/NeiKm/CSHS_Olympix.git",
                dev_badge: "В процессе", dev_title: "Этот раздел в разработке",
                dev_msg_1: "Этот раздел всё ещё находится в разработке и постепенно улучшается. Проект является стартапом, над которым сейчас работает один разработчик, поэтому некоторые функции могут добавляться не сразу.",
                dev_msg_2: "Если у вас есть навыки в дизайне, веб-разработке (HTML, CSS, JavaScript) или вы разбираетесь в бэкенде на Python (FastAPI), вы можете присоединиться к разработке и внести свой вклад в развитие проекта.",
                dev_contact: "Связаться можно в Instagram: @CSHS_Olympix", dev_back: "← Вернуться на главную",

                lb_hero_badge: "Топ-30 рейтинга", lb_search: "Поиск ученика или ID...",
                lb_loading: "⏳ Загрузка рейтинга...", lb_no_results: "🔍 Ничего не найдено"
            },
            zh: {
                nav_dashboard: "主页", nav_schedule: "课程表", nav_cafeteria: "食堂", nav_login: "登录",
                hero_badge: "CSHS排行榜：向顶峰攀登。", hero_title: "CSHS Olympix<br>천안상업고등학교",
                hero_desc: "登上天安市商业高中排行榜的巅峰。",
                stat_time: "当前时间", stat_weather: "天安市天气",
                lb_badge: "名人堂", lb_title: "排行榜", lb_desc: "学术、体育与开发领域的顶尖学生。",
                tab_study: "📚 学术", tab_sport: "🏃 体育", tab_dev: "💻 开发",
                lb_btn: "查看完整排名 →", card_tasks: "任务", card_tasks_desc: "本周主要任务。", card_tasks_btn: "查看",
                card_it: "IT支持", card_it_desc: "电脑或软件问题？", card_it_btn: "提交工单",
                sched_title: "课程表", sched_class_label: "你的班级:", sched_next_label: "距离下节课:", sched_calendar: "完整日历",
                meal_title: "今日午餐", meal_img: "今日餐食图片", meal_btn: "明日菜单",
                event_title: "校历 (活动)", event_1: "期中考试开始", event_2: "运动会", event_btn: "所有活动 →",
                footer_text: "2026 천안상업고등학교 | 非官方学生项目",
                footer_be: "联系: CSHS_olympix", footer_fe: "开发协助: https://github.com/NeiKm/CSHS_Olympix.git",
                dev_badge: "进行中", dev_title: "版块开发中",
                dev_msg_1: "此版块仍在开发中并正在逐步完善。该项目是由单人开发者运营的创业项目，因此部分功能可能无法立即上线。",
                dev_msg_2: "如果您在设计、Web 开发 (HTML, CSS, JS) 或 Python 后端 (FastAPI) 方面有专长，诚邀您加入开发团队，为项目发展贡献力量。",
                dev_contact: "通过 Instagram 联系: @CSHS_Olympix", dev_back: "← 返回首页",

                lb_hero_badge: "Top 30 排行榜", lb_search: "按姓名或 ID 搜索...",
                lb_loading: "⏳ 正在加载排行榜...", lb_no_results: "🔍 未找到结果"
            },
            vi: {
                nav_dashboard: "Trang chủ", nav_schedule: "Thời khóa biểu", nav_cafeteria: "Nhà ăn", nav_login: "Đăng nhập",
                hero_badge: "Bảng xếp hạng CSHS: Chinh phục đỉnh cao.", hero_title: "CSHS Olympix<br>천안상업고등학교",
                hero_desc: "Leo lên đỉnh bảng xếp hạng Trường THPT Thương mại Cheonan.",
                stat_time: "Thời gian hiện tại", stat_weather: "Thời tiết Cheonan",
                lb_badge: "Đại sảnh Danh vọng", lb_title: "Bảng xếp hạng", lb_desc: "Học sinh xuất sắc nhất trong học tập, thể thao và phát triển.",
                tab_study: "📚 Học tập", tab_sport: "🏃 Thể thao", tab_dev: "💻 Lập trình",
                lb_btn: "Xem bảng xếp hạng đầy đủ →", card_tasks: "Nhiệm vụ", card_tasks_desc: "Nhiệm vụ chính trong tuần này.", card_tasks_btn: "Kiểm tra",
                card_it: "Hỗ trợ IT", card_it_desc: "Lỗi PC hoặc phần mềm?", card_it_btn: "Gửi yêu cầu",
                sched_title: "Thời khóa biểu", sched_class_label: "Lớp của bạn:", sched_next_label: "Tiết học tiếp theo sau:", sched_calendar: "Lịch đầy đủ",
                meal_title: "Bữa trưa hôm nay", meal_img: "Hình ảnh bữa ăn hôm nay", meal_btn: "Thực đơn ngày mai",
                event_title: "Lịch học (Sự kiện)", event_1: "Bắt đầu kiểm tra giữa kỳ", event_2: "Hội thao", event_btn: "Tất cả sự kiện →",
                footer_text: "2026 천안상업고등학교 | Dự án học sinh không chính thức",
                footer_be: "Liên hệ: CSHS_olympix", footer_fe: "Hỗ trợ phát triển: https://github.com/NeiKm/CSHS_Olympix.git",
                dev_badge: "Đang thực hiện", dev_title: "Đang phát triển",
                dev_msg_1: "Mục này đang được phát triển và cải tiến dần dần. Dự án là một startup do một lập trình viên duy nhất vận hành, nên một số tính năng có thể chưa có ngay.",
                dev_msg_2: "Nếu bạn có kỹ năng thiết kế, phát triển web (HTML, CSS, JS) hoặc thành thạo Python backend (FastAPI), bạn có thể tham gia đóng góp vào sự phát triển của dự án.",
                dev_contact: "Liên hệ qua Instagram: @CSHS_Olympix", dev_back: "← Quay lại trang chủ",

                lb_hero_badge: "Top 30 Bảng xếp hạng", lb_search: "Tìm kiếm theo tên hoặc ID...",
                lb_loading: "⏳ Đang tải bảng xếp hạng...", lb_no_results: "🔍 Không tìm thấy kết quả"
            },
            mn: {
                nav_dashboard: "Үндсэн хэсэг", nav_schedule: "Хичээлийн хуваарь", nav_cafeteria: "Хоолны газар", nav_login: "Нэвтрэх",
                hero_badge: "CSHS жагсаалт: Орой руу тэмүүл.", hero_title: "CSHS Olympix<br>천안상업고등학교",
                hero_desc: "Чонан арилжааны ахлах сургуулийн рейтингийн оройд гараарай.",
                stat_time: "Одоо цаг", stat_weather: "Чонан хотын цаг агаар",
                lb_badge: "Алдрын танхим", lb_title: "Амжилтын жагсаалт", lb_desc: "Сурлага, спорт, хөгжлөөрөө тэргүүлэгч сурагчид.",
                tab_study: "📚 Сурлага", tab_sport: "🏃 Биеийн тамир", tab_dev: "💻 Хөгжил",
                lb_btn: "Бүх жагсаалтыг харах →", card_tasks: "Даалгавар", card_tasks_desc: "Энэ долоо хоногийн гол даалгавар.", card_tasks_btn: "Шалгах",
                card_it: "IT тусламж", card_it_desc: "PC эсвэл программ хангамжийн асуудал уу?", card_it_btn: "Хүсэлт илгээх",
                sched_title: "Хичээлийн хуваарь", sched_class_label: "Танай анги:", sched_next_label: "Дараагийн хичээл хүртэл:", sched_calendar: "Бүтэн календарь",
                meal_title: "Өнөөдрийн хоол", meal_img: "Өнөөдрийн хоолны зураг", meal_btn: "Маргаашийн хоол",
                event_title: "Сургуулийн хуваарь (Арга хэмжээ)", event_1: "Хагас жилийн шалгалт", event_2: "Спортын өдөрлөг", event_btn: "Бүх арга хэмжээ →",
                footer_text: "2026 천안상업고등학교 | Сурагчдын албан бус төсөл",
                footer_be: "Холбоо барих: CSHS_olympix", footer_fe: "Хөгжлийн тусламж: https://github.com/NeiKm/CSHS_Olympix.git",
                dev_badge: "Хийгдэж байгаа", dev_title: "Хөгжүүлэлтийн шатанд",
                dev_msg_1: "Энэ хэсэг хөгжүүлэлтийн шатанд байгаа бөгөөд аажмаар сайжирч байна. Төсөл нь нэг хөгжүүлэгчийн эхлүүлсэн старт-ап учраас зарим функцийг нэмэхэд хугацаа шаардагдана.",
                dev_msg_2: "Хэрэв та дизайн, вэб хөгжүүлэлт (HTML, CSS, JS) эсвэл Python backend (FastAPI)-ийн мэдлэгтэй бол төслийн хөгжилд хувь нэмэр оруулахыг урьж байна.",
                dev_contact: "Instagram-ээр холбогдох: @CSHS_Olympix", dev_back: "← Үндсэн хуудас руу буцах",

                lb_hero_badge: "Top 30 Жагсаалт", lb_search: "Нэр эсвэл ID-ээр хайх...",
                lb_loading: "⏳ Жагсаалт ачааллаж байна...", lb_no_results: "🔍 Үр дүн олдсонгүй"
            },
            ja: {
                nav_dashboard: "メイン", nav_schedule: "時間割", nav_cafeteria: "食堂", nav_login: "ログイン",
                hero_badge: "CSHSリーダーボード：頂点を目指そう。", hero_title: "CSHS Olympix<br>천안상업고등학교",
                hero_desc: "天安商業高等学校のランキングで頂点に立ちましょう。",
                stat_time: "現在時刻", stat_weather: "天安市の天気",
                lb_badge: "栄誉の殿堂", lb_title: "リーダーボード", lb_desc: "学業、スポーツ、開発分野でトップの生徒たち。",
                tab_study: "📚 学業", tab_sport: "🏃 体育", tab_dev: "💻 開発",
                lb_btn: "ランキング全体を見る →", card_tasks: "課題", card_tasks_desc: "今週の主な課題です。", card_tasks_btn: "確認する",
                card_it: "ITサポート", card_it_desc: "PCやソフトウェアに問題がありますか？", card_it_btn: "チケットを送信",
                sched_title: "時間割", sched_class_label: "あなたのクラス:", sched_next_label: "次の授業まで:", sched_calendar: "全カレンダー",
                meal_title: "今日の給食", meal_img: "今日の献立画像", meal_btn: "明日のメニュー",
                event_title: "学校行事 (イベント)", event_1: "中間試験開始", event_2: "体育大会", event_btn: "すべてのイベント →",
                footer_text: "2026 천안상업고등학교 | 非公式学生プロジェクト",
                footer_be: "連絡先: CSHS_olympix", footer_fe: "開発支援: https://github.com/NeiKm/CSHS_Olympix.git",
                dev_badge: "開発中", dev_title: "開発中のセクション",
                dev_msg_1: "このセクションは現在開発中であり、段階的に改善されています。本プロジェクトは1名の開発者が運営するスタートアップであるため、一部の機能の実装に時間がかかる場合があります。",
                dev_msg_2: "デザイン、Web 開発 (HTML, CSS, JS)、または Python バックエンド (FastAPI) のスキルをお持ちの方は、ぜひ開発に参加し、プロジェクトの成長にご協力ください。",
                dev_contact: "Instagram で連絡: @CSHS_Olympix", dev_back: "← ダッシュボードに戻る",
   
                lb_hero_badge: "Top 30 ランキング", lb_search: "名前または ID で検索...",
                lb_loading: "⏳ ランキングを読み込み中...", lb_no_results: "🔍 結果が見つかりません"
            }
        },
        init() {
            const saved = localStorage.getItem('lang');
            const detected = navigator.language.split('-')[0];
            this.current = (saved && this.dict[saved]) ? saved : (this.dict[detected] ? detected : 'ko');
            this.apply();
            
            const selector = document.getElementById('lang-selector');
            selector.value = this.current;
            selector.addEventListener('change', (e) => {
                this.current = e.target.value;
                this.apply();
            });
        },
        apply() {
            localStorage.setItem('lang', this.current);
            document.documentElement.lang = this.current;

            document.body.style.fontFamily = (this.current === 'ko' || this.current === 'ja') 
                ? "'Noto Sans KR', 'Inter', system-ui, sans-serif" 
                : "'Inter', system-ui, sans-serif";

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.dataset.i18n;
                if (this.dict[this.current][key]) {
                    el.innerHTML = this.dict[this.current][key];
                }
            });
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.dataset.i18nPlaceholder;
                if (this.dict[this.current][key]) {
                    el.setAttribute('placeholder', this.dict[this.current][key]);
                }
            });
        }
    };

    i18n.init();

    const clockEl = document.getElementById('current-time');
    const updateClock = () => {
        const now = new Date();
        clockEl.textContent = now.toLocaleTimeString(i18n.current === 'ko' ? 'ko-KR' : 'en-US', { hour: '2-digit', minute: '2-digit' });
    };
    setInterval(updateClock, 1000); updateClock();

    const menuBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuBtn.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        menuBtn.textContent = isOpen ? '✕' : '☰';
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('active')));

    const timerEl = document.getElementById('lesson-timer');
    let targetHour = 10, targetMin = 0;
    const updateCountdown = () => {
        const now = new Date();
        const target = new Date();
        target.setHours(targetHour, targetMin, 0, 0);
        if (now >= target) target.setDate(target.getDate() + 1);
        const diff = target - now;
        const h = Math.floor(diff / 3600000).toString().padStart(2, '0');
        const m = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
        const s = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
        timerEl.textContent = `${h}:${m}:${s}`;
    };
    setInterval(updateCountdown, 1000); updateCountdown();

    const progressBar = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const progress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = `${progress}%`;
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.classList.contains('leaderboard-highlight')) animatePoints();
            }
        });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    function animatePoints() {
        document.querySelectorAll('.points[data-points]').forEach(el => {
            const target = +el.dataset.points;
            const duration = 1200; const start = performance.now();
            const step = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                el.textContent = Math.floor(target * progress).toLocaleString();
                if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        });
    }

    const tabs = document.querySelectorAll('.tab-btn');
    const podiumData = {
        study: [{n: 'Kim Dev', p: 12420, t: '↑ 1'}, {n: 'Lee Code', p: 9850, t: '↑ 2'}, {n: 'Park Gym', p: 9210, t: '↓ 1'}],
        sport: [{n: 'Park Gym', p: 11800, t: '↑ 1'}, {n: 'Choi Run', p: 10200, t: '→ 0'}, {n: 'Kim Dev', p: 8900, t: '↓ 2'}],
        dev: [{n: 'Lee Code', p: 14500, t: '↑ 1'}, {n: 'Kim Dev', p: 13100, t: '→ 0'}, {n: 'Jung Web', p: 11200, t: '↑ 3'}]
    };
    tabs.forEach(btn => {
        btn.addEventListener('click', () => {
            tabs.forEach(b => b.classList.remove('active')); btn.classList.add('active');
            const data = podiumData[btn.dataset.category.replace('tab_', '')] || podiumData.study;
            document.querySelectorAll('.podium-item').forEach((el, i) => {
                const item = data[i];
                el.querySelector('h4').textContent = item.n;
                el.querySelector('.points').dataset.points = item.p;
                el.querySelector('.points').textContent = '0';
                el.querySelector('.trend').textContent = item.t;
                el.querySelector('.trend').className = `trend ${item.t.includes('↑') ? 'up' : item.t.includes('↓') ? 'down' : ''}`;
            });
            animatePoints();
        });
    });

    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    root.setAttribute('data-theme', savedTheme); themeToggle.textContent = savedTheme === 'light' ? '🌙' : '☀️';
    themeToggle.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', next); localStorage.setItem('theme', next);
        themeToggle.textContent = next === 'light' ? '🌙' : '☀️';
    });
});