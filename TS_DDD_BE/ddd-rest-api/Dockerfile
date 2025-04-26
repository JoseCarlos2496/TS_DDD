# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código al contenedor
COPY . .

# Compila el proyecto (si usas TypeScript)
RUN npm run build

# Expone el puerto en el que corre la aplicación
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["npm", "start"]