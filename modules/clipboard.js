/**
 * Módulo de gestión del portapapeles
 * Funciones para copiar texto al portapapeles
 */

import { showFeedback } from './uiUtils.js';

/**
 * Copia texto al portapapeles
 * @param {string} text - Texto a copiar
 * @param {HTMLElement} button - Botón para feedback
 */
export const copyToClipboard = async (text, button) => {
    // Usar la API Clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
        try {
            await navigator.clipboard.writeText(text);
            showFeedback(button);
        } catch (err) {
            // Fallback si falla la API moderna
            fallbackCopy(text, button);
        }
    } else {
        // Fallback para navegadores antiguos
        fallbackCopy(text, button);
    }
};

/**
 * Función fallback para navegadores antiguos
 * @param {string} text - Texto a copiar
 * @param {HTMLElement} button - Botón para feedback
 */
const fallbackCopy = (text, button) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showFeedback(button);
    } catch (err) {
        console.error('Error al copiar:', err);
    }
    document.body.removeChild(textarea);
};
