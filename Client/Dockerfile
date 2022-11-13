FROM node:alpine as builder

WORKDIR /app

COPY package*.json .

RUN yarn install && yarn cache clean --force

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]