# get basic image
FROM node:20-alpine

# install PM2
ENV NPM_CONFIG_REGISTRY=https://registry.npmmirror.com/
RUN npm install -g pnpm
RUN npm install -g pm2

WORKDIR /app