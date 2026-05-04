document.addEventListener('DOMContentLoaded', () => {
    const podiumContainer = document.getElementById('top-podium');
    const listContainer = document.getElementById('leader-list');
    const tabs = document.querySelectorAll('#category-tabs .tab');
    const searchInput = document.getElementById('search-input');

    const i18n = window.i18n || { dict: { ru: { lb_no_results: "Ничего не найдено" } }, current: 'ru' };

    function generateData(category) {
        const names = ["김승리", "슈퍼마리오", "김길길", "김키릴", "강상오", "김민규", "오레오", "유익환", " 성민준", "김리나", "김명원", "오수아", "김계란", "한지민", "이순신", "정민수", "정시은", "김시은", "김민수", "최민수", "박민수", "고무성", "이무성", "김재성", "홍정표", "문수빈", "이재명", "정훈", "이동연", "박건희"];
        
        return Array.from({length: 30}, (_, i) => {
            const base = category === 'dev' ? 15000 : category === 'sport' ? 12000 : 13500;
            const score = Math.max(3000, base - i * 380 + Math.floor(Math.random() * 200));
            const trendVal = Math.random();
            const trend = trendVal > 0.6 ? 'up' : trendVal > 0.3 ? 'down' : 'neutral';
            const change = trend === 'neutral' ? 0 : Math.floor(Math.random() * 4) + 1;
            return {
                rank: i + 1, name: names[i], id: `CSHS-${1000+i}`, score, trend, change,
                avatar: names[i].split(' ').map(w => w[0]).join('')
            };
        }).sort((a,b) => b.score - a.score).map((d, i) => ({...d, rank: i+1}));
    }

    let currentData = [];
    let maxScore = 0;

    const fmt = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    function renderPodium(top3) {
        podiumContainer.innerHTML = '';
        top3.forEach((user, i) => {
            const rankClass = `rank-${i+1}`;
            const trendIcon = user.trend === 'up' ? '▲' : user.trend === 'down' ? '▼' : '➔';
            const html = `
                <div class="podium-card ${rankClass}">
                    ${i===0 ? '<div class="crown">👑</div>' : ''}
                    <div class="podium-avatar">${user.avatar}</div>
                    <div class="podium-name">${user.name}</div>
                    <div class="podium-score" data-score="${user.score}">0</div>
                    <span class="podium-trend trend-${user.trend}">${trendIcon} ${user.change > 0 ? user.change : ''}</span>
                </div>
            `;
            podiumContainer.insertAdjacentHTML('beforeend', html);
        });

        requestAnimationFrame(() => {
            document.querySelectorAll('.podium-card').forEach((el, i) => {
                setTimeout(() => el.classList.add('animate'), i * 100);
            });
            document.querySelectorAll('.podium-score').forEach(el => {
                const target = +el.dataset.score;
                animateValue(el, 0, target, 1000);
            });
        });
    }

    function renderList(data) {
        listContainer.innerHTML = '';
        
        if (!data || data.length === 0) {
            const text = i18n.dict[i18n.current]?.lb_no_results || "🔍 Ничего не найдено";
            listContainer.innerHTML = `<div style="text-align:center;padding:40px;color:var(--text-muted)">${text}</div>`;
            return;
        }

        maxScore = data[0]?.score || 1;

        data.forEach((user, i) => {
            const rank = user.rank > 3 ? user.rank : '';
            const trendIcon = user.trend === 'up' ? '▲' : user.trend === 'down' ? '▼' : '➔';
            const progressPct = (user.score / maxScore * 100).toFixed(1);
            
            const html = `
                <div class="leader-row" style="animation-delay: ${i * 0.04}s">
                    <div class="row-rank">${rank || ['🥇','🥈','🥉'][user.rank-1]}</div>
                    <div class="row-profile">
                        <div class="row-avatar">${user.avatar}</div>
                        <div>
                            <div class="row-name">${user.name}</div>
                            <div class="row-id">${user.id}</div>
                        </div>
                    </div>
                    <div class="row-score" data-score="${user.score}">0</div>
                    <div class="row-trend trend-${user.trend}">${trendIcon} ${user.change > 0 ? user.change : ''}</div>
                    <div class="row-progress"><div class="progress-fill" style="--target: ${progressPct}%"></div></div>
                </div>
            `;
            listContainer.insertAdjacentHTML('beforeend', html);
        });

        requestAnimationFrame(() => {
            document.querySelectorAll('.leader-row').forEach(el => el.classList.add('animate'));
            document.querySelectorAll('.row-score').forEach(el => {
                const target = +el.dataset.score;
                setTimeout(() => animateValue(el, 0, target, 600), 200);
            });
            document.querySelectorAll('.progress-fill').forEach(el => {
                el.style.width = el.style.getPropertyValue('--target');
            });
        });
    }

    function animateValue(el, start, end, duration) {
        const startTime = performance.now();
        const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            el.textContent = fmt(Math.floor(start + (end - start) * progress));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }

    function switchCategory(cat) {
        tabs.forEach(t => t.classList.toggle('active', t.dataset.cat === cat));
        currentData = generateData(cat);
        searchInput.value = '';
        const top3 = currentData.slice(0, 3);
        const rest = currentData.slice(3, 30);
        renderPodium(top3);
        renderList(rest);
    }

    tabs.forEach(tab => tab.addEventListener('click', () => switchCategory(tab.dataset.cat)));

    switchCategory('study'); 

    searchInput.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase();
        const filtered = currentData.filter(d => d.name.toLowerCase().includes(q) || d.id.toLowerCase().includes(q));
        
        const dataToShow = filtered.length > 0 ? filtered : [];
        renderList(dataToShow);
    });
});