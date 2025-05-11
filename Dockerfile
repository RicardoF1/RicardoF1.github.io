# Usa nginx para servir archivos estáticos
FROM nginx:alpine

# Borra el contenido por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copia TODO el contenido de tu proyecto (ajustado a tu estructura)
COPY . /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80
