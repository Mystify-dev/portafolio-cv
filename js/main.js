document.addEventListener('DOMContentLoaded', () => {

    // LÓGICA DEL MODO OSCURO
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️ Modo Claro';
        } else {
            themeToggleBtn.textContent = '🌙 Modo Oscuro';
        }
    });

    // LÓGICA DEL CAMBIO DE IDIOMA
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = 'es';

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        langToggleBtn.textContent = currentLang === 'es' ? '🇺🇸 English' : '🇲🇽 Español';

        const translatableElements = document.querySelectorAll('[data-es]');

        translatableElements.forEach(el => {
            el.textContent = el.getAttribute(`data-${currentLang}`);
        });
    });

});