FROM node:alpine3.20 as build-runner
WORKDIR /tmp/app
COPY package*.json ./
RUN npm ci --legacy-peer-deps
COPY src ./src
COPY public ./public
COPY tsconfig.json .
COPY vite.config.ts .
COPY index.html .
RUN npm run build

FROM node:alpine3.20 as prod-runner
WORKDIR /app
COPY --from=build-runner /tmp/app/dist ./dist
RUN npm i -g serve
CMD ["serve", "-s", "dist", "-l", "4173"]