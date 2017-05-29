FROM node:boron
COPY ./ /opt/demo-app-two
WORKDIR /opt/demo-app-two/
RUN npm install
EXPOSE 9000
CMD node index.js