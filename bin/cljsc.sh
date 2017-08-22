#!/bin/sh

if [ -z $CLOJURESCRIPT_HOME ]; then
 CLOJURESCRIPT_HOME=/usr/local/clojure
fi

java -cp $CLOJURESCRIPT_HOME/cljs.jar:./src clojure.main $1
