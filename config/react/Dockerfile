FROM node:20.3.1-alpine

WORKDIR /usr/src/app

COPY ../FrontEnd/ /usr/src/app

EXPOSE 3000

RUN npm install

RUN npm run build

CMD npm install && npm run build && npm start
