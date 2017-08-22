(ns server.utils
 (:require [clojure.string :as string]
           [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(defn args->map [args]
 (let [m (atom {})]
  (doseq [[k v] (map #(string/split % #"=") args)] (swap! m assoc (keyword (string/lower-case k)) v)) @m))
