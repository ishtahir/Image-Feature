FROM node:10

WORKDIR /image-feature-fec
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4015

CMD [ "npm", "start" ]

