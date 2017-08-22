(ns client.controllers)

(let [controllers (.module js/angular "controllers" #js[])]
 (.controller controllers "HelloController" #js["$scope" "dataService" (fn [$scope dataService] (.hello dataService #(set! (.-message $scope) %)))]))
