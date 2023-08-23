# Build Stage
FROM node:20-alpine AS BUILD_IMAGE

WORKDIR /usr/src/project-home-frontend

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

# Production Stage
FROM node:20-alpine AS PRODUCTION_STAGE

WORKDIR /usr/src/project-home-frontend

COPY --from=BUILD_IMAGE /usr/src/project-home-frontend/package.json /usr/src/project-home-frontend/yarn.lock ./
COPY --from=BUILD_IMAGE /usr/src/project-home-frontend/public ./public
COPY --from=BUILD_IMAGE /usr/src/project-home-frontend/next.config.js ./
COPY --from=BUILD_IMAGE /usr/src/project-home-frontend/.next/standalone ./
COPY --from=BUILD_IMAGE /usr/src/project-home-frontend/.next/static ./.next/static
COPY --from=BUILD_IMAGE /usr/src/project-home-frontend/node_modules ./node_modules

ENV NODE_ENV production

EXPOSE 3000

CMD ["node", "./server.js"]