FROM node:alpine3.17 as build-runner
WORKDIR /tmp/app
COPY package*.json ./
RUN NODE_ENV=development npm i
COPY src ./src
COPY tsconfig.json .
COPY index.html .
RUN npm run build

FROM node:alpine3.17 as prod-runner
ENV SURGE_TOKEN
WORKDIR /app
COPY --from=build-runner /tmp/app/package*.json ./
RUN npm i --omit=dev
COPY --from=build-runner /tmp/app/dist ./dist
RUN npm i -g surge
CMD [ "surge", "dist", "https://app.jonathan.com.ar" "--token", '$SURGE_TOKEN']
