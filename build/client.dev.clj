(require 'cljs.build.api)

(cljs.build.api/build "src/client"
 {:main 'client.main
  :include '('client.services 'client.controllers)
  :output-to "public/js/client.js"
  :output-dir "public/js"
  :asset-path "js"
 })
