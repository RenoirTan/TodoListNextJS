FROM node:20-alpine as base

FROM base as deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

FROM base as dev
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
CMD ["npm", "run", "dev"]