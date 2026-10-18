FROM node

WORKDIR /app

#--COPY source dest--
COPY package*.json .

RUN npm install

COPY . .

CMD ["node", "index.js"]