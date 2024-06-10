# TikLive Frontend

Bienvenido al frontend de TikLive, una aplicación diseñada para gestionar juegos en vivo en TikTok utilizando React y Vite. Este frontend proporciona una interfaz de usuario interactiva y receptiva para los streamers y espectadores.

## Índice

- [TikLive Frontend](#tiklive-frontend)
  - [Índice](#índice)
  - [Introducción](#introducción)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Guía de Instalación](#guía-de-instalación)
  - [Guía de Uso](#guía-de-uso)
  - [Rutas de la Aplicación](#rutas-de-la-aplicación)
    - [Rutas Públicas](#rutas-públicas)
    - [Rutas Privadas](#rutas-privadas)
  - [Conclusión](#conclusión)
  - [Contribuciones y Agradecimientos](#contribuciones-y-agradecimientos)
  - [Licencia](#licencia)
  - [Contacto](#contacto)

## Introducción

**Descripción**: El frontend de TikLive está diseñado para proporcionar una experiencia de usuario fluida y atractiva para la gestión de juegos en vivo en TikTok. Utilizando React y Vite, este proyecto se centra en la velocidad y la interactividad.

**Justificación**: Con el aumento de la popularidad de las transmisiones en vivo, es crucial tener una interfaz de usuario que sea rápida, intuitiva y fácil de usar.

**Objetivos**:
- Proveer una interfaz de usuario interactiva y receptiva.
- Facilitar la gestión de juegos en vivo para los streamers.
- Mejorar la experiencia del espectador en las transmisiones en vivo de TikTok.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de desarrollo rápida y ligera para proyectos de frontend.
- **React Router**: Librería para la navegación y enrutamiento en aplicaciones React.
- **Axios**: Cliente HTTP basado en promesas para realizar solicitudes a la API.
- **CSS**: Estilos personalizados para la interfaz de usuario.

## Guía de Instalación

1. **Clonar el Repositorio**:
    ```bash
    git clone https://github.com/TikLive/tiklive.git
    cd tiklive-frontend
    ```

2. **Instalar Dependencias**:
    ```bash
    npm install
    ```

3. **Configurar Variables de Entorno**:
    Crear un archivo `.env` en la raíz del proyecto y agregar las siguientes variables:
    ```
    VITE_API_URL=tu-url-de-la-api
    ```

4. **Iniciar el Servidor de Desarrollo**:
    ```bash
    npm run dev
    ```

## Guía de Uso

1. **Iniciar el Servidor**:
    Usa el comando `npm run dev` para iniciar el servidor de desarrollo.

2. **Acceder a la Aplicación**:
    Abre tu navegador y navega a `http://localhost:5173`.

3. **Navegar por la Aplicación**:
    - Regístrate o inicia sesión para acceder a las funcionalidades de la aplicación.
    - Gestiona juegos en vivo desde la página principal.

## Rutas de la Aplicación

### Rutas Públicas

- **/login**: Página de inicio de sesión.
- **/register**: Página de registro.

### Rutas Privadas

- **/**: Página principal (requiere autenticación).

## Conclusión

El frontend de TikLive está diseñado para ser rápido, interactivo y fácil de usar, proporcionando todas las funcionalidades necesarias para gestionar juegos en vivo en TikTok de manera eficiente.

## Contribuciones y Agradecimientos

Agradecemos las contribuciones de la comunidad. No dudes en enviar issues o pull requests.

Agradecimientos especiales a:
- La comunidad de React y Vite por sus excelentes herramientas y soporte.
- Los diseñadores y desarrolladores que ayudaron a crear esta interfaz.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Para cualquier consulta o sugerencia, por favor contacta a:

**José Antonio Márquez Flores**

- Email: [joseantonio.marquez@a.vedrunasj.es](mailto:joseantonio.marquez@a.vedrunasj.es)
- GitHub: [Jousemarquez](https://github.com/jousemarquez)

¡Gracias por usar TikLive!
