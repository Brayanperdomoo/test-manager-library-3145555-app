FROM node:24-alpine AS build
WORKDIR /workspace
COPY client/package*.json ./
RUN npm ci --include=optional --no-audit --no-fund
COPY client/ ./
ARG VITE_API_URL=/api/v1
ENV VITE_API_URL=${VITE_API_URL}
RUN npm run build

FROM nginx:1.27-alpine
COPY client/deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /workspace/dist /usr/share/nginx/html
EXPOSE 80
