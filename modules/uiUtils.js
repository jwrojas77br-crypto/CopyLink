/**
 * Módulo de utilidades de interfaz de usuario
 * Funciones para feedback visual y notificaciones
 */

/**
 * Muestra feedback visual al copiar
 * @param {HTMLElement} button - Botón a modificar
 * @param {string} message - Mensaje del toast
 */
export const showFeedback = (button, message = '¡Texto copiado al portapapeles!') => {
    // Cambiar color del botón
    button.classList.add('copied');
    const originalText = button.textContent;
    button.textContent = 'Copiado';

    // Mostrar notificación toast
    showToast(message);

    // Restaurar el botón después de 2 segundos
    setTimeout(() => {
        button.classList.remove('copied');
        button.textContent = originalText;
    }, 2000);
};

/**
 * Muestra una notificación toast
 * @param {string} message - Mensaje a mostrar
 */
export const showToast = (message) => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Remover el toast después de 3 segundos
    setTimeout(() => {
        toast.remove();
    }, 3000);
};
