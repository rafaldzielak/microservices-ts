FROM node:12.6.0

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 3250

CMD ["npm", "start"]
