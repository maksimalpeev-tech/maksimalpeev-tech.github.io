// Простой скрипт для интерактивности
document.addEventListener('DOMContentLoaded', function() {
    
    // Плавная прокрутка к якорям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Анимация кнопок "В корзину"
    const cartButtons = document.querySelectorAll('.btn-outline-danger');
    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = '✓ Добавлено';
            this.classList.remove('btn-outline-danger');
            this.classList.add('btn-success');
            
            setTimeout(() => {
                this.textContent = originalText;
                this.classList.remove('btn-success');
                this.classList.add('btn-outline-danger');
            }, 1500);
        });
    });
    
});