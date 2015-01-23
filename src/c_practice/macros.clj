(ns c-practice.macros)

(defmacro meta-map [prefix f s]
  `(map-indexed (fn [i# s#] ^{:key (str ~prefix i#)} [~f s#]) ~s))
