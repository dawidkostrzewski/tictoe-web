FROM node:lts-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY angular.json .
COPY src ./src
COPY public .
COPY tsconfig.json .
COPY tsconfig.app.json .
COPY tsconfig.spec.json .

RUN npm run build

FROM nginx:latest

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# Usuń domyślną stronę Nginx
RUN rm -rf /usr/share/nginx/html/*

# Skopiuj wygenerowane pliki aplikacji Angular do katalogu publicznego Nginx
COPY --from=builder /app/dist/tictoe-web/browser /usr/share/nginx/html/tictoe/

COPY ./nginx/certs /etc/nginx/certs

# Wystaw port 80
EXPOSE 80 443

# Uruchom serwer Nginx
CMD ["nginx", "-g", "daemon off;"]
