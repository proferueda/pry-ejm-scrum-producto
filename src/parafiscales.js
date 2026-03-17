/**
 * Módulo de cálculo de parafiscales sobre el sueldo básico legal en Colombia.
 *
 * Los parafiscales son aportes patronales obligatorios:
 *   - SENA:                      2% del sueldo básico
 *   - ICBF:                      3% del sueldo básico
 *   - Caja de Compensación Familiar: 4% del sueldo básico
 */

const TASA_SENA = 0.02;
const TASA_ICBF = 0.03;
const TASA_CAJA_COMPENSACION = 0.04;

/**
 * Valida que el sueldo básico sea un número válido y no negativo.
 * @param {number} sueldoBasico
 */
function validarSueldo(sueldoBasico) {
  if (typeof sueldoBasico !== "number" || isNaN(sueldoBasico)) {
    throw new Error("El sueldo básico debe ser un número válido");
  }
  if (sueldoBasico < 0) {
    throw new Error("El sueldo básico no puede ser negativo");
  }
}

/**
 * Calcula el aporte al SENA (2% del sueldo básico).
 * @param {number} sueldoBasico - Sueldo básico mensual
 * @returns {number} Valor del aporte al SENA redondeado a 2 decimales
 */
function calcularSENA(sueldoBasico) {
  validarSueldo(sueldoBasico);
  return Math.round(sueldoBasico * TASA_SENA * 100) / 100;
}

/**
 * Calcula el aporte al ICBF (3% del sueldo básico).
 * @param {number} sueldoBasico - Sueldo básico mensual
 * @returns {number} Valor del aporte al ICBF redondeado a 2 decimales
 */
function calcularICBF(sueldoBasico) {
  validarSueldo(sueldoBasico);
  return Math.round(sueldoBasico * TASA_ICBF * 100) / 100;
}

/**
 * Calcula el aporte a la Caja de Compensación Familiar (4% del sueldo básico).
 * @param {number} sueldoBasico - Sueldo básico mensual
 * @returns {number} Valor del aporte a la Caja redondeado a 2 decimales
 */
function calcularCajaCompensacion(sueldoBasico) {
  validarSueldo(sueldoBasico);
  return Math.round(sueldoBasico * TASA_CAJA_COMPENSACION * 100) / 100;
}

/**
 * Calcula el total de parafiscales (SENA + ICBF + Caja de Compensación = 9%).
 * @param {number} sueldoBasico - Sueldo básico mensual
 * @returns {number} Total de parafiscales redondeado a 2 decimales
 */
function calcularTotalParafiscales(sueldoBasico) {
  validarSueldo(sueldoBasico);
  const sena = calcularSENA(sueldoBasico);
  const icbf = calcularICBF(sueldoBasico);
  const caja = calcularCajaCompensacion(sueldoBasico);
  return Math.round((sena + icbf + caja) * 100) / 100;
}

/**
 * Desglosa los parafiscales por concepto.
 * @param {number} sueldoBasico - Sueldo básico mensual
 * @returns {{ sueldoBasico: number, sena: number, icbf: number, cajaCompensacion: number, total: number }}
 */
function desglosarParafiscales(sueldoBasico) {
  validarSueldo(sueldoBasico);
  const sena = calcularSENA(sueldoBasico);
  const icbf = calcularICBF(sueldoBasico);
  const cajaCompensacion = calcularCajaCompensacion(sueldoBasico);
  const total = Math.round((sena + icbf + cajaCompensacion) * 100) / 100;
  return { sueldoBasico, sena, icbf, cajaCompensacion, total };
}

module.exports = {
  calcularSENA,
  calcularICBF,
  calcularCajaCompensacion,
  calcularTotalParafiscales,
  desglosarParafiscales,
  TASA_SENA,
  TASA_ICBF,
  TASA_CAJA_COMPENSACION,
};
