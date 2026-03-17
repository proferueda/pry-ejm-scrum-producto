# 🛒 Sistema de Pagos — Proyecto Ejemplo Scrum

[![Estado del Proyecto](https://img.shields.io/badge/estado-en%20desarrollo-yellow)](https://github.com/proferueda/pry-ejm-scrum-producto)
[![Metodología](https://img.shields.io/badge/metodología-Scrum-blue)](https://github.com/proferueda/pry-ejm-scrum-producto)
[![Sprint Actual](https://img.shields.io/badge/sprint%20actual-Sprint%205%3A%20Pagos-green)](https://github.com/proferueda/pry-ejm-scrum-producto/milestones)

---

## 📋 Descripción General

Este repositorio contiene el código fuente de un **Sistema de Pagos** desarrollado como proyecto de ejemplo para ilustrar la metodología ágil **Scrum**. El sistema está orientado al mercado colombiano e incluye funcionalidades clave para gestionar pagos electrónicos, cálculo de impuestos y reembolsos.

El proyecto sirve como referencia académica y práctica para equipos que deseen aprender a organizar su trabajo mediante Sprints, Product Backlog e Issues en GitHub.

---

## 🚀 Sprint Actual: Sprint 5 — Pagos

El sprint en curso se enfoca en el **módulo de pagos**. A continuación se detallan las historias de usuario e ítems del backlog activos en este sprint:

| # | Historia de Usuario / Tarea | Tipo | Estado |
|---|---|---|---|
| [#1](https://github.com/proferueda/pry-ejm-scrum-producto/issues/1) | Integrar API de PSE | Feature | 🔄 En progreso |
| [#2](https://github.com/proferueda/pry-ejm-scrum-producto/issues/2) | Diseñar botón de pago | Feature | 🔄 En progreso |
| [#3](https://github.com/proferueda/pry-ejm-scrum-producto/issues/3) | Error en el cálculo del IVA | Bug | ✅ En revisión ([PR #5](https://github.com/proferueda/pry-ejm-scrum-producto/pull/5)) |
| [#4](https://github.com/proferueda/pry-ejm-scrum-producto/issues/4) | Documentar proceso de reembolsos | Documentación | 🔄 En progreso |

---

## 🏗️ Funcionalidades Principales

- **Integración con PSE** — Conexión con la pasarela de pagos PSE para procesar transacciones bancarias en línea, ampliamente utilizada en Colombia.
- **Botón de Pago** — Interfaz de usuario para iniciar el flujo de pago de forma intuitiva y segura.
- **Cálculo de IVA** — Módulo de cómputo del Impuesto al Valor Agregado (IVA) a la tasa colombiana estándar del **19%**, con soporte para tasas personalizadas y validación de entradas.
- **Cálculo de Parafiscales** — Módulo para calcular los aportes patronales obligatorios en Colombia: SENA (2%), ICBF (3%) y Caja de Compensación Familiar (4%), con desglose detallado por concepto.
- **Proceso de Reembolsos** — Gestión y documentación del flujo de reembolso de transacciones.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Uso |
|---|---|
| **Node.js** | Entorno de ejecución principal |
| **Jest** | Framework de pruebas unitarias |
| **GitHub Projects** | Gestión del backlog y tablero Scrum |
| **GitHub Issues & Milestones** | Seguimiento de historias de usuario y sprints |

---

## 📁 Estructura del Proyecto

```
pry-ejm-scrum-producto/
├── src/
│   ├── iva.js                # Módulo de cálculo de IVA (19% colombiano)
│   ├── iva.test.js           # Pruebas unitarias del módulo IVA
│   ├── parafiscales.js       # Módulo de cálculo de parafiscales (SENA, ICBF, Caja)
│   └── parafiscales.test.js  # Pruebas unitarias del módulo de parafiscales
├── package.json              # Configuración del proyecto y dependencias
└── README.md                 # Documentación del proyecto
```

---

## ⚙️ Instalación y Uso

### Requisitos previos

- [Node.js](https://nodejs.org/) v16 o superior
- npm v8 o superior

### Pasos de instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/proferueda/pry-ejm-scrum-producto.git
cd pry-ejm-scrum-producto

# 2. Instalar dependencias
npm install
```

### Ejecutar las pruebas

```bash
npm test
```

### Ejemplo de uso del módulo IVA

```js
const { calcularIVA, calcularPrecioConIVA, desglosarIVA } = require('./src/iva');

calcularIVA(100);           // → 19
calcularPrecioConIVA(100);  // → 119
desglosarIVA(50.5);         // → { precioBase: 50.5, iva: 9.6, total: 60.1 }  (valores redondeados a 2 decimales)
```

### Ejemplo de uso del módulo de Parafiscales

```js
const { calcularSENA, calcularICBF, calcularCajaCompensacion, calcularTotalParafiscales, desglosarParafiscales } = require('./src/parafiscales');

calcularSENA(1000000);              // → 20000   (2% del sueldo)
calcularICBF(1000000);              // → 30000   (3% del sueldo)
calcularCajaCompensacion(1000000);  // → 40000   (4% del sueldo)
calcularTotalParafiscales(1000000); // → 90000   (9% total)

desglosarParafiscales(1300000);
// → { sueldoBasico: 1300000, sena: 26000, icbf: 39000, cajaCompensacion: 52000, total: 117000 }
```

---

## 🔄 Metodología de Trabajo (Scrum)

Este proyecto sigue la metodología **Scrum** con los siguientes artefactos gestionados directamente en GitHub:

| Artefacto Scrum | Herramienta GitHub |
|---|---|
| **Product Backlog** | [Issues](https://github.com/proferueda/pry-ejm-scrum-producto/issues) del repositorio |
| **Sprint Backlog** | [Milestones](https://github.com/proferueda/pry-ejm-scrum-producto/milestones) (ej. *Sprint 5: Pagos*) |
| **Tablero Kanban** | [GitHub Projects](https://github.com/proferueda/pry-ejm-scrum-producto/projects) |
| **Definición de listo** | Pull Request aprobado + pruebas pasando |

### Flujo de trabajo

```
Product Backlog (Issue abierto)
        ↓
Sprint Planning → Issue asignado al Milestone del Sprint
        ↓
Desarrollo → Branch dedicada + Pull Request
        ↓
Code Review → PR revisado y aprobado
        ↓
Done → PR mergeado, Issue cerrado
```

---

## 🤝 Contribución

1. **Revisa el backlog** — Consulta los [Issues abiertos](https://github.com/proferueda/pry-ejm-scrum-producto/issues) para ver las tareas disponibles.
2. **Crea una rama** — Usa el formato `feature/<nombre-tarea>` o `fix/<nombre-bug>`.
3. **Desarrolla y prueba** — Asegúrate de que todas las pruebas pasen con `npm test`.
4. **Abre un Pull Request** — Describe los cambios realizados y referencia el Issue correspondiente con `Fixes #<número>`.
5. **Espera la revisión** — Un miembro del equipo revisará el PR antes de hacer merge.

---

## 📄 Licencia

Este proyecto es de uso educativo y está disponible libremente para fines de aprendizaje y demostración de metodologías ágiles.

---

> **Profesor / Maintainer:** [@proferueda](https://github.com/proferueda)  
> **Repositorio:** [proferueda/pry-ejm-scrum-producto](https://github.com/proferueda/pry-ejm-scrum-producto)