ClojureScript on Node.js 
========================

This project intends to be a bootstrap for [ClojureScript](http://clojurescript.org) development on Node.js.

You will need to install [Node.js](http://nodejs.org), and [cURL](https://curl.haxx.se).

To build, issue the following commands:
 
  `npm install -g gulp-cli`
 
  `npm install`
  
  `gulp` or `ENV=<env> gulp`, where env is either **dev** (default) or **prod**
  
To run, issue the following command:

  `node server.js`
  
By default the application will start on port 3000. You can specify a different port with the following command:

  `node server.js port=<port>`

Have fun!
