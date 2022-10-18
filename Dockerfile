FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY package.json ./

RUN npm i 

COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]