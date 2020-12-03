(require 'cljs.build.api)

(cljs.build.api/build "src/server"
 {:main 'server.main
  :output-to "server.js"
  :target :nodejs
 })
