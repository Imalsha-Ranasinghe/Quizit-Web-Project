FROM node:20-alpine

WORKDIR /app/frontend

COPY package.json .

COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

COPY frontend ./

EXPOSE 5173

CMD ["npm", "run", "dev"]
