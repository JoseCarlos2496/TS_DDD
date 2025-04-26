# Usa una imagen base de Node.js para construir la aplicación
FROM node:18-slim AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY package*.json ./
COPY tsconfig.json ./
COPY public ./public
COPY src ./src

# Instala las dependencias
RUN npm install

# Construye la aplicación para producción
RUN npm run build

# Usa una imagen base de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos al directorio de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80 para el servidor Nginx
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]