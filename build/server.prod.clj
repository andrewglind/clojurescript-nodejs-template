(require 'cljs.build.api)

(cljs.build.api/build "src/server"
 {:main 'server.main
  :include '('server.utils)
  :output-to "server.js"
  :target :nodejs
  :optimizations :simple
  :language-in :ecmascript5
 })
