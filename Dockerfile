FROM node:10
WORKDIR /var/www/myapp
COPY ./server/package*.json ./
RUN npm install
COPY ./server .
EXPOSE 3000
CMD ["npm", "start"]