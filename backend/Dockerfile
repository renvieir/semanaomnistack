FROM node:lts-slim

RUN mkdir /app

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm install --silent

EXPOSE 5000

CMD [ "npm", "run", "dev" ]