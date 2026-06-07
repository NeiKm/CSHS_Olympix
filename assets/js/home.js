const translations = {
    ko: {
        schoolName: "천안상업고등학교",
        dateText: new Date(),
        students: "학생 수",
        teachers: "교직원 수",
        register: "회원가입",
        scheduleTitle: "📚 시간표",
        lunchTitle: "🍱 점심시간",
        topTitle: "🏆 주간 탑 5 우수학생"
    },
    ru: {
        schoolName: "Старшая школа коммерции Чхонан",
        dateText: new Date(),
        students: "Учеников",
        teachers: "Учителей",
        register: "Зарегистрироваться",
        scheduleTitle: "📚 Расписание уроков",
        lunchTitle: "🍱 Большая перемена",
        topTitle: "🏆 Топ-5 Лидеров"
    },
    en: {
        schoolName: "Cheonan Commercial High School",
        dateText: new Date(),
        students: "Students",
        teachers: "Teachers",
        register: "Sign Up",
        scheduleTitle: "📚 Class Schedule",
        lunchTitle: "🍱 Lunch Break",
        topTitle: "🏆 Top 5 Leaders"
    },
    zh: {
        schoolName: "天安商业高中",
        dateText: new Date(),
        students: "学生人数",
        teachers: "教师人数",
        register: "注册",
        scheduleTitle: "📚 课程表",
        lunchTitle: "🍱 午餐时间",
        topTitle: "🏆 前5名优秀学生"
    },
    vi: {
        schoolName: "Trường THPT Thương mại Cheonan",
        dateText: new Date(),
        students: "Học sinh",
        teachers: "Giáo viên",
        register: "Đăng ký",
        scheduleTitle: "📚 Thời khóa biểu",
        lunchTitle: "🍱 Giờ ăn trưa",
        topTitle: "🏆 Top 5 Học sinh"
    }
};

function changeLanguage() {
    const lang = document.getElementById('lang-select').value;
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
    document.documentElement.lang = lang;
}

changeLanguage();
