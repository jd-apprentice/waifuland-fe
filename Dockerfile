FROM node:alpine3.17 as build-runner
WORKDIR /tmp/app
COPY package*.json ./
RUN npm i --legacy-peer-deps
COPY src ./src
COPY public ./public
COPY tsconfig.json .
COPY vite.config.ts .
COPY index.html .
RUN npm run build

FROM node:alpine3.17 as prod-runner
WORKDIR /app
COPY --from=build-runner /tmp/app/package*.json ./
RUN npm i --omit=dev --legacy-peer-deps
COPY --from=build-runner /tmp/app/dist ./dist
RUN npm i -g serve
EXPOSE 3500
CMD ["serve", "-s", "dist", "-l", "3500"]