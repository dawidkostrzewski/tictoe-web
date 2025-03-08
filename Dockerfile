FROM nginx:latest

COPY ./nginx.conf /etc/nginx/nginx.conf
# Usuń domyślną stronę Nginx
RUN rm -rf /usr/share/nginx/html/*

# Skopiuj wygenerowane pliki aplikacji Angular do katalogu publicznego Nginx
COPY ./dist/tictoe-web/browser/* /usr/share/nginx/html

# Wystaw port 80
EXPOSE 80

# Uruchom serwer Nginx
CMD ["nginx", "-g", "daemon off;"]
