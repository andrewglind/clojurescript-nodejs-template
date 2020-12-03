(require 'cljs.build.api)

(cljs.build.api/build "src/server"
 {:pseudo-names true
  :pretty-print true
  :output-to "server.js"
  :target :nodejs
  :optimizations :simple
 })
