Full Stack ClojureScript 
========================

This project aims to provide a template for anyone wanting to build a full stack web application using ClojureScript.

You will need to install [NodeJS](http://nodejs.org) and the ClojureScript compiler before using this template, it is available [here](https://github.com/clojure/clojurescript).

Put the *cljs.jar* somewhere on your filesystem (by default I assume it is installed at /usr/local/clojure). If you install in a different location either export CLOJURESCRIPT_HOME or edit **bin/cljsc.sh** to set the new path.

To build, issue the following commands:
  
  `npm install`
  
  `gulp` or `gulp <env>`, where env is either **dev** (default) or **prod**
  
To run, issue the following command:

  `node server.js`
  
By default the application will start on port 3000. You can specify a different port with the following command:

  `node server.js port=<port>`

Have fun!
