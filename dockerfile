FROM node:latest
COPY . .
RUN npm i
EXPOSE 5500
CMD [ "node","index.js" ]