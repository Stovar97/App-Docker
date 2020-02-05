FROM node
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
COPY . /app
CMD DEBUG=microservice:* npm start
EXPOSE 3000