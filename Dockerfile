FROM node:12.13.1-alpine
WORKDIR /usr/local/share/app
COPY node_modules ./node_modules
COPY out ./out
COPY public ./public
COPY views ./views
COPY server.js ./server.js
EXPOSE 3000
CMD ["node", "server.js"]