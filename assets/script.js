document.addEventListener('DOMContentLoaded', () => {

    // Плавное появление секций при прокрутке
    const sections = document.querySelectorAll('.content-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Отключаем наблюдение после того, как элемент стал видимым, для оптимизации
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Секция считается видимой, когда видна на 10%
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});
