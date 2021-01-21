# 1 Build Dependencies
FROM node:14 as dependecies

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

# Use latest version of npm
RUN npm install npm@latest -g

RUN npm install --no-optional && npm cache clean --force

COPY . ./

RUN npm run build

# 2 Nginx
FROM nginx:1.12-alpine

COPY --from=dependecies /usr/src/app/build /usr/share/nginx/html

EXPOSE 8080 

CMD ["nginx", "-g", "daemon off;"]