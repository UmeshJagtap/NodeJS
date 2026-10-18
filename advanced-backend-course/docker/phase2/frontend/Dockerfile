FROM node

WORKDIR /app

#--COPY source dest--
COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]