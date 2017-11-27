FROM mhart/alpine-node:latest

ADD ./ ./server

WORKDIR /server

RUN apk update  && apk add sshpass && apk add openssh

EXPOSE 5000

CMD node index.js
