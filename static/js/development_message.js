document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const content = document.querySelector('.dev-content');
        if (content) content.classList.add('active');
        
        setTimeout(() => {
            const bar = document.querySelector('.progress-fill');
            if (bar) bar.style.width = bar.style.getPropertyValue('--target');
        }, 400);
    }, 100);

    const notifyBtn = document.querySelector('.btn-notify');
    if (notifyBtn) {
        notifyBtn.addEventListener('click', async () => {
            const originalText = notifyBtn.dataset.i18nNotify || notifyBtn.textContent;
            notifyBtn.disabled = true;
            notifyBtn.innerHTML = '✅ Вы подписаны!';

            setTimeout(() => {
                notifyBtn.disabled = false;
                notifyBtn.textContent = originalText;
            }, 3000);
        });
    }
});