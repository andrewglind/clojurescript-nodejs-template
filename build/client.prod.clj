(require 'cljs.build.api)

(cljs.build.api/build "src/client"
 {:pseudo-names true
  :pretty-print true
  :output-to "public/js/client.js"
  :output-dir "public/js"
  :asset-path "js"
  :optimizations :simple
 })
