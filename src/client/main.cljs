(ns client.main
 (:require [client.services :as services]
           [client.controllers :as controllers]))

(def app (.module js/angular "app" #js["ngRoute" "services" "controllers"]))

(.config app #js["$routeProvider" (fn [$routeProvider] (.otherwise (.when $routeProvider "/" #js{"templateUrl" "/views/hello" "controller" "HelloController"}) #js{"redirectTo" "/"}))])
