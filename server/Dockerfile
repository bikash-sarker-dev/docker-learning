# FROM node:24-slim

#  RUN sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get clean

# WORKDIR /app

# COPY package*.json ./

# RUN npm install 

# COPY . .
# EXPOSE 4000

# CMD [ "node", "index.js" ]

FROM node:24-slim

# Update system packages (no sudo in Docker)
RUN apt-get update \
 && apt-get upgrade -y \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node", "index.js"]

