const {
  calcularSENA,
  calcularICBF,
  calcularCajaCompensacion,
  calcularTotalParafiscales,
  desglosarParafiscales,
  TASA_SENA,
  TASA_ICBF,
  TASA_CAJA_COMPENSACION,
} = require("./parafiscales");

describe("calcularSENA", () => {
  test("calcula el aporte al SENA (2%) correctamente", () => {
    expect(calcularSENA(1000000)).toBe(20000);
  });

  test("calcula el aporte al SENA para sueldo decimal", () => {
    expect(calcularSENA(1300000.5)).toBe(26000.01);
  });

  test("calcula el aporte al SENA de 0 es 0", () => {
    expect(calcularSENA(0)).toBe(0);
  });

  test("lanza error para sueldo negativo", () => {
    expect(() => calcularSENA(-500000)).toThrow(
      "El sueldo básico no puede ser negativo"
    );
  });

  test("lanza error para sueldo no numérico", () => {
    expect(() => calcularSENA("abc")).toThrow(
      "El sueldo básico debe ser un número válido"
    );
  });

  test("la tasa del SENA es 2%", () => {
    expect(TASA_SENA).toBe(0.02);
  });
});

describe("calcularICBF", () => {
  test("calcula el aporte al ICBF (3%) correctamente", () => {
    expect(calcularICBF(1000000)).toBe(30000);
  });

  test("calcula el aporte al ICBF para sueldo decimal", () => {
    expect(calcularICBF(1300000.5)).toBe(39000.02);
  });

  test("calcula el aporte al ICBF de 0 es 0", () => {
    expect(calcularICBF(0)).toBe(0);
  });

  test("lanza error para sueldo negativo", () => {
    expect(() => calcularICBF(-500000)).toThrow(
      "El sueldo básico no puede ser negativo"
    );
  });

  test("lanza error para sueldo no numérico", () => {
    expect(() => calcularICBF("abc")).toThrow(
      "El sueldo básico debe ser un número válido"
    );
  });

  test("la tasa del ICBF es 3%", () => {
    expect(TASA_ICBF).toBe(0.03);
  });
});

describe("calcularCajaCompensacion", () => {
  test("calcula el aporte a la Caja de Compensación (4%) correctamente", () => {
    expect(calcularCajaCompensacion(1000000)).toBe(40000);
  });

  test("calcula el aporte a la Caja de Compensación para sueldo decimal", () => {
    expect(calcularCajaCompensacion(1300000.5)).toBe(52000.02);
  });

  test("calcula el aporte a la Caja de Compensación de 0 es 0", () => {
    expect(calcularCajaCompensacion(0)).toBe(0);
  });

  test("lanza error para sueldo negativo", () => {
    expect(() => calcularCajaCompensacion(-500000)).toThrow(
      "El sueldo básico no puede ser negativo"
    );
  });

  test("lanza error para sueldo no numérico", () => {
    expect(() => calcularCajaCompensacion("abc")).toThrow(
      "El sueldo básico debe ser un número válido"
    );
  });

  test("la tasa de la Caja de Compensación es 4%", () => {
    expect(TASA_CAJA_COMPENSACION).toBe(0.04);
  });
});

describe("calcularTotalParafiscales", () => {
  test("calcula el total de parafiscales (9%) correctamente", () => {
    expect(calcularTotalParafiscales(1000000)).toBe(90000);
  });

  test("calcula el total de parafiscales para el salario mínimo legal vigente", () => {
    // SMLV 2024: $1.300.000
    expect(calcularTotalParafiscales(1300000)).toBe(117000);
  });

  test("calcula el total de parafiscales de 0 es 0", () => {
    expect(calcularTotalParafiscales(0)).toBe(0);
  });

  test("lanza error para sueldo negativo", () => {
    expect(() => calcularTotalParafiscales(-500000)).toThrow(
      "El sueldo básico no puede ser negativo"
    );
  });

  test("lanza error para sueldo no numérico", () => {
    expect(() => calcularTotalParafiscales("abc")).toThrow(
      "El sueldo básico debe ser un número válido"
    );
  });
});

describe("desglosarParafiscales", () => {
  test("desglosa correctamente todos los conceptos para un millón", () => {
    const resultado = desglosarParafiscales(1000000);
    expect(resultado).toEqual({
      sueldoBasico: 1000000,
      sena: 20000,
      icbf: 30000,
      cajaCompensacion: 40000,
      total: 90000,
    });
  });

  test("desglosa correctamente para el salario mínimo legal vigente 2024", () => {
    const resultado = desglosarParafiscales(1300000);
    expect(resultado).toEqual({
      sueldoBasico: 1300000,
      sena: 26000,
      icbf: 39000,
      cajaCompensacion: 52000,
      total: 117000,
    });
  });

  test("desglosa correctamente para sueldo 0", () => {
    const resultado = desglosarParafiscales(0);
    expect(resultado).toEqual({
      sueldoBasico: 0,
      sena: 0,
      icbf: 0,
      cajaCompensacion: 0,
      total: 0,
    });
  });

  test("lanza error para sueldo negativo", () => {
    expect(() => desglosarParafiscales(-100000)).toThrow(
      "El sueldo básico no puede ser negativo"
    );
  });
});
