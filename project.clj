(defproject c-practice "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2311"]
                 [alandipert/storage-atom "1.2.3"]
                 [reagent "0.4.2"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "c-practice"
              :source-paths ["src"]
              :compiler {
                :output-to "c_practice.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
