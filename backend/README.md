# TikLive Backend

Bienvenido al backend de TikLive, una aplicación diseñada para gestionar juegos en vivo en TikTok. Este backend está construido con NodeJS y MongoDB, proporcionando una API robusta y segura para manejar la autenticación de usuarios y la gestión de datos.

## Índice

- [TikLive Backend](#tiklive-backend)
  - [Índice](#índice)
  - [Introducción](#introducción)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Guía de Instalación](#guía-de-instalación)
  - [Guía de Uso](#guía-de-uso)
  - [Rutas de la API](#rutas-de-la-api)
    - [Registro de Usuario](#registro-de-usuario)
    - [Autenticación de Usuario](#autenticación-de-usuario)
    - [Obtener Información de Usuario](#obtener-información-de-usuario)
    - [Actualizar Usuario](#actualizar-usuario)
    - [Eliminar Usuario](#eliminar-usuario)
  - [Conclusión](#conclusión)
  - [Contribuciones y Agradecimientos](#contribuciones-y-agradecimientos)
  - [Licencia](#licencia)
  - [Contacto](#contacto)

## Introducción

**Descripción**: Este backend proporciona los servicios necesarios para la gestión de usuarios y la autenticación, utilizando NodeJS, Express, y MongoDB. 

**Justificación**: Un backend sólido es crucial para manejar de manera eficiente y segura las solicitudes de los usuarios y la lógica del negocio en tiempo real.

**Objetivos**:
- Proveer una API segura y eficiente para la autenticación de usuarios.
- Manejar la lógica de negocio relacionada con la gestión de juegos en vivo.
- Garantizar la integridad y seguridad de los datos almacenados en MongoDB.

## Tecnologías Utilizadas

- **NodeJS**: Plataforma de desarrollo en JavaScript para construir aplicaciones rápidas y escalables.
- **Express**: Framework para NodeJS que facilita la creación de APIs robustas.
- **MongoDB**: Base de datos NoSQL para el almacenamiento de datos.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB y NodeJS.
- **bcryptjs**: Biblioteca para encriptar contraseñas.
- **jsonwebtoken**: Biblioteca para crear y verificar JSON Web Tokens (JWT).
- **dotenv**: Carga de variables de entorno desde un archivo `.env`.

## Guía de Instalación

1. **Clonar el Repositorio**:
    ```bash
    git clone https://github.com/tu-usuario/tiklive-backend.git
    cd tiklive-backend
    ```

2. **Instalar Dependencias**:
    ```bash
    npm install
    ```

3. **Configurar Variables de Entorno**:
    Crear un archivo `.env` en la raíz del proyecto y agregar las siguientes variables:
    ```
    MONGODB_URI=tu-mongodb-uri
    JWT_SECRET=tu-secreto-jwt
    PORT=puerto-del-servidor
    ```

4. **Iniciar el Servidor**:
    ```bash
    npm start
    ```

## Guía de Uso

1. **Iniciar el Servidor**:
    Asegúrate de que MongoDB esté ejecutándose y utiliza el comando `npm start` para iniciar el servidor.

2. **Realizar Solicitudes a la API**:
    Usa herramientas como Postman o cURL para interactuar con las rutas de la API.

## Rutas de la API

### Registro de Usuario

- **URL**: `/api/users/register`
- **Método**: `POST`
- **Descripción**: Crea un nuevo usuario.
- **Cuerpo de la Solicitud**:
    ```json
    {
        "username": "nombre_usuario",
        "email": "email_usuario",
        "password": "contraseña_usuario"
    }
    ```

### Autenticación de Usuario

- **URL**: `/api/users/login`
- **Método**: `POST`
- **Descripción**: Autentica un usuario y devuelve un token JWT.
- **Cuerpo de la Solicitud**:
    ```json
    {
        "email": "email_usuario",
        "password": "contraseña_usuario"
    }
    ```

### Obtener Información de Usuario

- **URL**: `/api/users/:id`
- **Método**: `GET`
- **Descripción**: Obtiene información de un usuario por ID.

### Actualizar Usuario

- **URL**: `/api/users/:id`
- **Método**: `PUT`
- **Descripción**: Actualiza los datos de un usuario.
- **Cuerpo de la Solicitud**:
    ```json
    {
        "username": "nuevo_nombre_usuario",
        "email": "nuevo_email_usuario",
        "password": "nueva_contraseña_usuario"
    }
    ```

### Eliminar Usuario

- **URL**: `/api/users/:id`
- **Método**: `DELETE`
- **Descripción**: Elimina un usuario por ID.

## Conclusión

El backend de TikLive está diseñado para ser seguro, escalable y fácil de usar, proporcionando todas las funcionalidades necesarias para gestionar usuarios y autenticaciones en una aplicación de juegos en vivo para TikTok.

## Contribuciones y Agradecimientos

Agradecemos las contribuciones de la comunidad. No dudes en enviar issues o pull requests.

Agradecimientos especiales a:
- La comunidad de NodeJS, Express y MongoDB por sus herramientas y soporte excepcionales.
- Los desarrolladores que ayudaron a probar y mejorar este proyecto.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Para cualquier consulta o sugerencia, por favor contacta a:

**José Antonio Márquez Flores**

- Email: [joseantonio.marquez@a.vedrunasj.es](mailto:joseantonio.marquez@a.vedrunasj.es)
- GitHub: [Jousemarquez](https://github.com/jousemarquez)

¡Gracias por usar TikLive!
