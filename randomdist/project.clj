(defproject randomdist "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.7.0-RC1"]
                 [quil "2.2.6"]
                 [org.clojure/clojurescript "0.0-3308"]]

  :plugins [[lein-cljsbuild "1.0.6"]
            [lein-figwheel "0.3.3"]]
  :hooks [leiningen.cljsbuild]

  :cljsbuild
  {:builds [{:source-paths ["src"]
             :figwheel true
             :compiler
             {:output-to "js/main.js"
              :output-dir "out"
              :main "randomdist.core"
              :optimizations :none
              :pretty-print true}}]})
