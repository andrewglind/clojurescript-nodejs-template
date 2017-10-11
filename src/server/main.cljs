(ns server.main
 (:require [cljs.nodejs :as nodejs]
           [server.utils :as utils]))

(nodejs/enable-util-print!)

(def express (nodejs/require "express"))

(def app (express))
(.use app (.static express "public"))
(.set app "view engine" "pug")

(.get app "/hello"
 (fn [req res]
  (.send res "Hello, Lisp!")))

(.get app "/"
 (fn [req res]
  (.render res "index")))

(.get app "/views/:name"
 (fn [req res]
  (.render res (.-name (.-params req)) #js{})))

(defn -main [& args]
 (let [m (utils/args->map args)
       port (if (contains? m :port) (:port m) 3000)]
  (.listen app port #(println (str "Listening on port " port)))))

(set! *main-cli-fn* -main)
