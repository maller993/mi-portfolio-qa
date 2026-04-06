# 🧪 Mi Portfolio QA - Automatización de APIs

Portfolio personal de automatización de pruebas de APIs REST, desarrollado con Playwright y TypeScript.

## 🚀 Tecnologías utilizadas

- **Playwright** - Framework de automatización de pruebas
- **TypeScript** - Lenguaje de programación
- **Node.js** - Entorno de ejecución
- **JSONPlaceholder** - API REST pública utilizada para las pruebas

## 📁 Estructura del proyecto
```
mi-portfolio-qa/
├── helpers/
│   └── api-helper.ts        # Helper reutilizable para llamadas HTTP
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


## ⚙️ Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/maller993/mi-portfolio-qa.git
cd mi-portfolio-qa
```

2. Instalar dependencias
```bash
npm install
```

3. Instalar browsers de Playwright
```bash
npx playwright install
```

4. Configurar variables de entorno
```bash
cp .env.example .env
```

## ▶️ Correr los tests

Correr todos los tests:
```bash
npx playwright test
```

Correr un archivo específico:
```bash
npx playwright test tests/api/Users/get-users.api.spec.ts
```

Ver reporte HTML:
```bash
npx playwright show-report
```

## 📋 Casos de prueba

### Users - GET /users
| ID | Descripción | Resultado esperado |
|---|---|---|
| CP001 | Obtener lista de usuarios y validar estructura | 200 |
| CP002 | Obtener usuario por ID válido | 200 |
| CP003 | Obtener usuario inexistente | 404 |

### Users - POST /users
| ID | Descripción | Resultado esperado |
|---|---|---|
| CP001 | Crear usuario con datos válidos | 201 |
| CP002 | Crear usuario sin nombre | 201 |
| CP003 | Crear usuario con body vacío | 201 |

### Users - PUT /users/{id}
| ID | Descripción | Resultado esperado |
|---|---|---|
| CP001 | Actualizar usuario con datos válidos | 200 |
| CP002 | Actualizar usuario inexistente | 200/500 |

### Users - DELETE /users/{id}
| ID | Descripción | Resultado esperado |
|---|---|---|
| CP001 | Eliminar usuario existente | 200 |
| CP002 | Eliminar usuario inexistente | 200 |

## 👩‍💻 Sobre mí

QA Engineer con 5 años de experiencia en testing manual y en proceso de especialización en automatización. Este portfolio refleja mi aprendizaje y crecimiento en el área de automatización de pruebas.

📧 [maller.arg@gmail.com]
💼 [http://linkedin.com/maria-aller]
