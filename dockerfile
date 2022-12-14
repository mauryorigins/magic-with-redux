FROM node:16.3.0-alpine

# Create app directory
WORKDIR /frontend-react-app

#Environment variables
ENV PORT=3000

# VOLUME ["/home/botz/certificates/"]
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "node", "prodServer.js" ]