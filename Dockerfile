FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

<<<<<<< HEAD
CMD ["node","server.js"]
=======
CMD ["node","server.js"]
>>>>>>> main
