/**
 * Módulo de procesamiento de texto
 * Funciones para decodificar y procesar texto enriquecido
 */

/**
 * Decodifica encodings de URL
 * @param {string} text - Texto con encodings
 * @returns {string} Texto decodificado
 */
export const decodeURLEncodings = (text) => {
    return text
        .replace(/%20/g, ' ')      // Espaciado
        .replace(/%0A/g, '\n')     // Saltos de línea
        .replace(/%0a/g, '\n');    // Saltos de línea (minúsculas)
};

/**
 * Procesa markdown simple (negritas)
 * @param {string} text - Texto con markdown
 * @returns {string} HTML con formato
 */
export const processMarkdown = (text) => {
    // Convertir **texto** a <strong>texto</strong>
    return text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
};

/**
 * Limpia markdown al copiar
 * @param {string} text - Texto con markdown
 * @returns {string} Texto limpio
 */
export const cleanMarkdown = (text) => {
    // Remover ** de negritas pero mantener el texto
    return text.replace(/\*\*(.+?)\*\*/g, '$1');
};
