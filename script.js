/**
 * Script principal de la aplicación CopyLink
 * Módulo ES6 que importa y coordina todas las funcionalidades
 */

// Importar módulos
import { decodeURLEncodings, processMarkdown, cleanMarkdown } from './modules/textProcessor.js';
import { copyToClipboard } from './modules/clipboard.js';

// Obtener elementos del DOM
const copyBtn = document.getElementById('copyBtn');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');

/**
 * Obtiene los parámetros de la URL
 * @returns {Object} Objeto con title y text desde la URL
 */
const getURLParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        title: urlParams.get('title') || null,
        text: urlParams.get('text') || null
    };
};

/**
 * Inicializa el contenido procesado
 */
const initializeContent = () => {
    // Intentar obtener texto de la URL primero
    const urlParams = getURLParams();
    
    const rawTitle = urlParams.title || modalTitle.textContent;
    const rawText = urlParams.text || modalText.textContent;

    // Guardar el texto original con asteriscos para copiar
    modalTitle.setAttribute('data-original', rawTitle);
    modalText.setAttribute('data-original', rawText);

    // Decodificar URLs y procesar markdown para visualización
    const processedTitle = processMarkdown(decodeURLEncodings(rawTitle));
    const processedText = processMarkdown(decodeURLEncodings(rawText));

    // Actualizar el HTML con el contenido procesado
    modalTitle.innerHTML = processedTitle;
    modalText.innerHTML = processedText;
};

/**
 * Maneja el evento de copiar
 */
const handleCopy = () => {
    // Extraer el texto original con asteriscos (para WhatsApp)
    const title = modalTitle.getAttribute('data-original') || modalTitle.textContent;
    const paragraph = modalText.getAttribute('data-original') || modalText.textContent;
    const textToCopy = `${title}\n\n${paragraph}`;

    // Copiar al portapapeles
    copyToClipboard(textToCopy, copyBtn);
};

// Inicializar contenido al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    initializeContent();
    // Copiar automáticamente al cargar y mostrar notificación
    setTimeout(() => {
        handleCopy();
    }, 300);
});

// Event listener para el botón
copyBtn.addEventListener('click', handleCopy);

// Permitir copiar con Enter o Espacio si el botón está enfocado
copyBtn.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleCopy();
    }
});
