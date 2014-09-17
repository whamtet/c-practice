(ns c-practice.core
  (:require
      [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(def p #(-> % pr-str println))

(def data
  (for [line (-> "tuttle" js/document.getElementById .-innerHTML .trim (.split "\n"))]
    (-> line .trim (.split ","))))

(def i (atom 0))
(def j (atom 2))
(def text (atom ""))

(defn render []
  [:div {:style {:font-size "2em"}}
   [:div @i " " (apply str (interpose " " (take @j (nth data @i))))]
   [:div
    [:input {:type "button" :value "Previous" :on-click #(do
                                                           (swap! i dec)
                                                           (reset! j 2))}]
    [:input {:type "button" :value "Next" :on-click #(do
                                                       (swap! i inc)
                                                       (reset! j 2))}]
    [:input {:type "button" :value "Hint" :on-click #(swap! j inc)}]]
   [:div
    [:input {:type "text" :value @text :on-change #(reset! text (-> % .-target .-value))}]
    [:input {:type "button" :value "Go" :on-click #(reset! i (int @text))}]
    ]])

(reagent/render-component
 [render]
 (.getElementById js/document "content"))

