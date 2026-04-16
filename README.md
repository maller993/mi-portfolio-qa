# QA Automation Portfolio — API Testing with Playwright

[![Playwright API Tests](https://github.com/maller993/mi-portfolio-qa/actions/workflows/playwright.yml/badge.svg)](https://github.com/maller993/mi-portfolio-qa/actions)

**María Aller** · QA Automation Engineer (SSR+)  
[LinkedIn](https://www.linkedin.com/in/maria-aller/) · maller.arg@gmail.com

---

## Sobre este proyecto

Portfolio de automatización de pruebas de APIs REST, construido con **Playwright + TypeScript**.  
Cubre el ciclo CRUD completo del recurso `/users` contra [JSONPlaceholder](https://jsonplaceholder.typicode.com/), incluyendo casos felices, flujos negativos y validación de esquemas de respuesta.

El foco está en escribir tests mantenibles, con helpers reutilizables y una estructura que escala.

---

## Stack

| Herramienta | Rol |
|---|---|
| Playwright | Framework de automatización (API testing) |
| TypeScript | Tipado estático y mejor DX |
| Node.js | Entorno de ejecución |
| JSONPlaceholder | API pública de pruebas |

---

## Estructura del proyecto

```
mi-portfolio-qa/
├── helpers/
│   └── api-helper.ts        # Cliente HTTP reutilizable (baseURL, headers, auth)
├── tests/
│   └── api/
│       └── Users/
│           ├── get-users.api.spec.ts
│           ├── post-users.api.spec.ts
│           ├── put-users.api.spec.ts
│           └── delete-users.api.spec.ts
├── .env.example
├── playwright.config.ts
└── tsconfig.json
```

---

## Instalación y ejecución

```bash
# 1. Clonar e instalar
git clone https://github.com/maller993/mi-portfolio-qa.git
cd mi-portfolio-qa
npm install

# 2. Variables de entorno
cp .env.example .env

# 3. Correr todos los tests
npx playwright test

# 4. Correr un archivo específico
npx playwright test tests/api/Users/get-users.api.spec.ts

# 5. Ver reporte HTML
npx playwright show-report
```

---

## Casos de prueba

### GET /users

| ID | Escenario | Status esperado |
|---|---|---|
| CP001 | Obtener lista completa y validar estructura del array | 200 |
| CP002 | Obtener usuario por ID válido | 200 |
| CP003 | Solicitar usuario con ID inexistente | 404 |

### POST /users

| ID | Escenario | Status esperado |
|---|---|---|
| CP001 | Crear usuario con todos los campos válidos | 201 |
| CP002 | Crear usuario omitiendo campo `name` | 201 |
| CP003 | Crear usuario con body vacío (caso borde) | 201 |

### PUT /users/{id}

| ID | Escenario | Status esperado |
|---|---|---|
| CP001 | Actualizar usuario existente con datos válidos | 200 |
| CP002 | Intentar actualizar usuario inexistente | 200 / 500 |

### DELETE /users/{id}

| ID | Escenario | Status esperado |
|---|---|---|
| CP001 | Eliminar usuario existente | 200 |
| CP002 | Intentar eliminar usuario inexistente | 200 |

---

## Decisiones de diseño

- **`api-helper.ts`** centraliza la configuración HTTP para evitar repetir baseURL, headers y manejo de errores en cada test.
- Los tests están organizados por **recurso + verbo HTTP**, lo que facilita la navegación y el mantenimiento a medida que crece la suite.
- Se usan **variables de entorno** para la configuración sensible (base URL, credenciales), pensando en integración con CI/CD.
- Cada spec cubre tanto el **happy path** como **casos negativos y de borde**, porque los bugs críticos suelen vivir ahí.

---

## Otros proyectos

> **Automatización mobile con Maestro + Android Studio**  
> Flujos E2E sobre app Android: login, navegación, formularios y validación visual en múltiples dispositivos.  
> *(repositorio próximamente)*

---

## Sobre mí

QA Engineer con más de 5 años de experiencia en testing, especializada en automatización de APIs y mobile.  
Trabajo con **Playwright** para testing de endpoints REST y con **Maestro** para automatización de apps Android, incorporando IA como herramienta para acelerar generación de casos y cobertura de regresión.

Me enfoco en calidad end-to-end: desde el diseño de estrategias de testing hasta el análisis de bugs críticos y casos borde.

[LinkedIn](https://www.linkedin.com/in/maria-aller/) · maller.arg@gmail.com
