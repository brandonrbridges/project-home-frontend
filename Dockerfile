# Build Stage
FROM node:20-alpine AS BUILD_IMAGE
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

# Production Stage
FROM node:20-alpine AS PRODUCTION_STAGE
WORKDIR /app
COPY --from=BUILD_IMAGE /app/package.json /app/yarn.lock ./
COPY --from=BUILD_IMAGE /app/public ./public
COPY --from=BUILD_IMAGE /app/next.config.js ./
COPY --from=BUILD_IMAGE /app/.next/standalone ./
COPY --from=BUILD_IMAGE /app/.next/static ./.next/static
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "./server.js"]