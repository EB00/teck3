FROM node:latest


WORKDIR /usr/src/app
COPY package.json ./
#COPY package-lock.json ./
RUN npm install
COPY . .


EXPOSE 3000
CMD ["npm", "start"]
#CMD ["node", "server.js"]



#################################
#                               #
#                               #
# docker build -t monimage      #
# docker run -p 80:80 monimage  #
#                               #
#                               #
#################################   
