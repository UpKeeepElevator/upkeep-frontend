FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
# RUN npm install @ionic/cli
RUN npm install @ionic/cli
RUN npm install
# RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points
COPY . .
RUN npm run build

FROM nginx:stable
COPY --from=build /app/www/browser /usr/share/nginx/html
EXPOSE 80

