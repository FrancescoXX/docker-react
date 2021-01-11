# 1 Build Dependencies
FROM node:14 as dependecies
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

# 2 Nginx
FROM nginx:1.12-alpine
COPY --from=dependecies /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]