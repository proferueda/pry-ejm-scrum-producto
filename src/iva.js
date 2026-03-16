/**
 * Módulo de cálculo del IVA (Impuesto al Valor Agregado)
 * Tasa estándar en Colombia: 19%
 */

const TASA_IVA = 0.19;

/**
 * Calcula el valor del IVA de un precio base.
 * @param {number} precioBase - Precio sin IVA
 * @param {number} [tasa=0.19] - Tasa de IVA (por defecto 19%)
 * @returns {number} Valor del IVA redondeado a 2 decimales
 */
function calcularIVA(precioBase, tasa = TASA_IVA) {
  if (typeof precioBase !== "number" || isNaN(precioBase)) {
    throw new Error("El precio base debe ser un número válido");
  }
  if (precioBase < 0) {
    throw new Error("El precio base no puede ser negativo");
  }
  if (typeof tasa !== "number" || isNaN(tasa) || tasa < 0) {
    throw new Error("La tasa de IVA debe ser un número no negativo");
  }
  return Math.round(precioBase * tasa * 100) / 100;
}

/**
 * Calcula el precio total incluyendo IVA.
 * @param {number} precioBase - Precio sin IVA
 * @param {number} [tasa=0.19] - Tasa de IVA (por defecto 19%)
 * @returns {number} Precio total con IVA redondeado a 2 decimales
 */
function calcularPrecioConIVA(precioBase, tasa = TASA_IVA) {
  const iva = calcularIVA(precioBase, tasa);
  return Math.round((precioBase + iva) * 100) / 100;
}

/**
 * Desglosa un precio en base e IVA.
 * @param {number} precioBase - Precio sin IVA
 * @param {number} [tasa=0.19] - Tasa de IVA (por defecto 19%)
 * @returns {{ precioBase: number, iva: number, total: number }}
 */
function desglosarIVA(precioBase, tasa = TASA_IVA) {
  const iva = calcularIVA(precioBase, tasa);
  const total = calcularPrecioConIVA(precioBase, tasa);
  return { precioBase, iva, total };
}

module.exports = { calcularIVA, calcularPrecioConIVA, desglosarIVA, TASA_IVA };
