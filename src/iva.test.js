const { calcularIVA, calcularPrecioConIVA, desglosarIVA, TASA_IVA } = require("./iva");

describe("calcularIVA", () => {
  test("calcula el IVA estándar (19%) correctamente", () => {
    expect(calcularIVA(100)).toBe(19);
  });

  test("calcula el IVA para precios decimales", () => {
    expect(calcularIVA(50.5)).toBe(9.6);
  });

  test("calcula el IVA con tasa personalizada", () => {
    expect(calcularIVA(100, 0.05)).toBe(5);
  });

  test("calcula el IVA de 0 es 0", () => {
    expect(calcularIVA(0)).toBe(0);
  });

  test("lanza error para precio negativo", () => {
    expect(() => calcularIVA(-10)).toThrow("El precio base no puede ser negativo");
  });

  test("lanza error para precio no numérico", () => {
    expect(() => calcularIVA("abc")).toThrow("El precio base debe ser un número válido");
  });

  test("lanza error para tasa negativa", () => {
    expect(() => calcularIVA(100, -0.1)).toThrow("La tasa de IVA debe ser un número no negativo");
  });

  test("la tasa estándar de IVA es 19%", () => {
    expect(TASA_IVA).toBe(0.19);
  });
});

describe("calcularPrecioConIVA", () => {
  test("calcula el precio total con IVA (19%)", () => {
    expect(calcularPrecioConIVA(100)).toBe(119);
  });

  test("calcula el precio total con IVA para precio decimal", () => {
    expect(calcularPrecioConIVA(50.5)).toBe(60.1);
  });

  test("calcula el precio total con tasa personalizada", () => {
    expect(calcularPrecioConIVA(200, 0.05)).toBe(210);
  });

  test("precio base 0 da total 0", () => {
    expect(calcularPrecioConIVA(0)).toBe(0);
  });
});

describe("desglosarIVA", () => {
  test("desglosa correctamente base, IVA y total", () => {
    const resultado = desglosarIVA(100);
    expect(resultado).toEqual({ precioBase: 100, iva: 19, total: 119 });
  });

  test("desglosa correctamente con precio decimal", () => {
    const resultado = desglosarIVA(50.5);
    expect(resultado).toEqual({ precioBase: 50.5, iva: 9.6, total: 60.1 });
  });
});
