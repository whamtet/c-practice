(ns c-practice.core)

(defn -main [& args]
  (println "copying...")
  (spit "index.html"
        (format (slurp "index2.html") (slurp "../bushou/data/tuttle.csv"))))
