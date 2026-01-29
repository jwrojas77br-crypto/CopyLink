/**
 * Módulo de cuenta regresiva para cierre automático
 */

/**
 * Inicia una cuenta regresiva visible y cierra la ventana al finalizar
 * @param {Object} options - Configuración
 * @param {number} options.seconds - Segundos para la cuenta regresiva
 * @param {string} options.elementId - ID del elemento de la cuenta regresiva
 * @param {string} options.containerSelector - Selector del contenedor donde se insertará
 * @param {string} options.message - Texto base del mensaje
 * @param {Function} options.onFinish - Callback opcional al finalizar
 * @returns {Function} Función para detener la cuenta regresiva
 */
export const startAutoCloseCountdown = ({
    seconds = 10,
    elementId = 'autoCloseCountdown',
    containerSelector = '.modal',
    message = 'Cerrando en',
    onFinish
} = {}) => {
    const container = document.querySelector(containerSelector);
    if (!container) {
        return () => {};
    }

    let countdownEl = document.getElementById(elementId);
    if (!countdownEl) {
        countdownEl = document.createElement('div');
        countdownEl.id = elementId;
        countdownEl.className = 'countdown';
        container.appendChild(countdownEl);
    }

    let remaining = Math.max(0, Number(seconds) || 0);

    const updateText = () => {
        countdownEl.textContent = `${message} ${remaining}s`;
    };

    updateText();

    const intervalId = setInterval(() => {
        remaining -= 1;
        if (remaining <= 0) {
            clearInterval(intervalId);
            countdownEl.textContent = 'Cerrando...';
            if (typeof onFinish === 'function') {
                onFinish();
            }
            try {
                window.close();
            } catch (err) {
                // No-op si el navegador bloquea el cierre
            }
            return;
        }
        updateText();
    }, 1000);

    return () => clearInterval(intervalId);
};
