FROM node:alpine3.17 as build-runner
WORKDIR /tmp/app
COPY package*.json ./
RUN NODE_ENV=development npm i
COPY src ./src
COPY tsconfig.json .
COPY index.html .
RUN npm run build

FROM node:alpine3.17 as prod-runner
WORKDIR /app
COPY --from=build-runner /tmp/app/package*.json ./
RUN npm i --omit=dev
COPY --from=build-runner /tmp/app/dist ./dist
RUN npm i -g serve
EXPOSE 3500
CMD [ "serve", "-s", "dist", "-l", "3500"]
