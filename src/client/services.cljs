(ns client.services)

(let [services (.module js/angular "services" #js[])]
 (.service services "dataService" #js["$http" (fn [$http] #js {"hello" (fn [callback] (.then (.get $http "/hello") (fn [res] (callback (.-data res))) (fn [res])))})]))
