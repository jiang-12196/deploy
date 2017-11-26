FROM mhart/alpine-node:latest

ADD ./ ./server


WORKDIR /server

VOLUME /data

EXPOSE 5000

CMD node index.js
