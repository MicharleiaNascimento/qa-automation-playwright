# qa-automation-playwright

Proyecto de pruebas automatizadas de interfaz con Playwright. Incluye una
prueba sanity para comprobar que la pantalla inicial de SauceDemo carga y
presenta sus elementos principales.

## Tecnologías

- Node.js y npm
- TypeScript
- Playwright Test
- Chromium y Firefox

## Requisitos

- Node.js 20 o superior (incluye npm).
- Git, para clonar el repositorio.

## Instalación

Cloná el repositorio y entrá en la carpeta del proyecto:

```bash
git clone https://github.com/MicharleiaNascimento/qa-automation-playwright.git
cd qa-automation-playwright
```

Instalá las dependencias del proyecto:

```bash
npm install
```

Instalá los navegadores utilizados por las pruebas:

```bash
npx playwright install chromium firefox
```

## Ejecutar las pruebas

Para ejecutar todas las pruebas en Chromium y Firefox:

```bash
npx playwright test
```

Para ejecutar las pruebas mostrando las ventanas del navegador:

```bash
npx playwright test --headed
```

## Sanity Test

La prueba `tests/sanity.spec.ts` abre SauceDemo usando la `baseURL` definida en
`playwright.config.ts`. Comprueba que el campo de usuario (`Username`) y el
botón `Login` estén visibles. No realiza el inicio de sesión.
