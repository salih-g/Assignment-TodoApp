FROM node:14.17.0 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run test:unit
RUN npm run build
FROM nginx:latest AS production
COPY --from=build /app/dist /usr/share/nginx/html
# EXPOSE 80
CMD [ "nginx","-g","daemon off;" ]