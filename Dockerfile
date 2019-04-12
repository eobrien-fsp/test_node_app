FROM node:8

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install --only=prod --no-save

COPY . .

CMD ["npm", "run", "start"]