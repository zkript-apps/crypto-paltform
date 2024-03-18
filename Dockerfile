FROM node:20.10.0-slim

ENV API_ORIGINS="http://localhost:3000"
ENV WEB_URL="http://localhost:3000"
ENV API_URL="http://localhost:9000"
ENV MONGO_URL="mongodb+srv://patrick22:patrick22@cluster0.nex1c.mongodb.net/crypto-platform-dev?retryWrites=true&w=majority"
 
WORKDIR /usr/src/app
 
# Copy root folders files
COPY package.json ./
COPY package-lock.json ./
COPY .npmrc ./
COPY tsconfig.json ./
COPY turbo.json ./
 
# Copy sub folders files
COPY apps/api ./apps/api
COPY packages/eslint-config ./packages/eslint-config
COPY packages/typescript-config ./packages/typescript-config

# Install global packages
RUN npm install -g typescript

# Run setup
RUN npm install
RUN npm run build
 
EXPOSE 9000
 
CMD [ "npm", "run", "start" ]