# Utiliza una imagen base de Node
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y el package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Exponer el puerto que utiliza la aplicación NodeJS
EXPOSE 3060

# Comando para iniciar la aplicación
CMD ["node", "index.js"]