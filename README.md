ClojureScript on Node.js 
========================

This project intends to be a bootstrap for [ClojureScript](http://clojurescript.org) development on Node.js.

You will need to install [Node.js](http://nodejs.org), and [cURL](https://curl.haxx.se).

To build, issue the following commands:
 
  `yarn`

  `yarn add -g gulp-cli`

  `yarn build` or `ENV=prod yarn build` to build with optimizations for production use
  
To run, issue the following command:

  `yarn start` or `node server.js`
  
By default the application will start on port 3000. You can specify a different port with the following command:

  `node server.js port=<port>`

To run as a Docker container, issue the following commands:

  `docker build -t cljs-on-nodejs .`

  `docker run -p 3000:3000 cljs-on-nodejs`

Have fun!
