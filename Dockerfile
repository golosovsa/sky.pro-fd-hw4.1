FROM nginx:latest

RUN rm -frv /etc/nginx/conf.d/*
COPY nginx/nginx.conf /etc/nginx/conf.d/skypro-fd-cw4.ru.conf
WORKDIR /usr/web
COPY /dist .

CMD ["nginx", "-g", "daemon off;"]
