(require 'cljs.build.api)

(cljs.build.api/build "src/client"
 {:main 'client.main
  :output-to "public/js/client.js"
  :output-dir "public/js"
  :asset-path "js"
 })
