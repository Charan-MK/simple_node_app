FROM node:22-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 4200

CMD [ "node", "src/index.js" ]
