FROM node:lts as builder

WORKDIR /opt/chirper-web

COPY . .

RUN yarn install

RUN yarn run build

FROM nginx

COPY --from=builder /opt/chirper-web/public/ /usr/share/nginx/html/
