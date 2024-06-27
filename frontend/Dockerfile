# ==================================
# CREATING BASE IMAGE
# ==================================
FROM node:latest As base

WORKDIR /app
COPY package*.json ./

# ==================================
# FOR DEVELOPMENT PURPOSE ONLY
# ==================================
FROM base as development

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

# ==================================
# BUILDING FOR PRODUCTION
# ==================================
FROM base As production

RUN npm install --ONLY=production

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]