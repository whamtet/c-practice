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
(def text (atom 0))
(def proceed-text (atom ""))

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
    [:input {:type "text" :value @proceed-text :on-change #(reset! proceed-text (-> % .-target .-value))
             :on-focus #(reset! proceed-text "")}]
    [:input {:type "button" :value "Conditional Proceed" :on-click #(when (= @proceed-text (first (nth data @i)))
                                                                    (swap! i inc)
                                                                    (reset! j 2))}]]
   [:br]
   [:div
    [:input {:type "number" :value @text :min 0 :max 800 :on-change #(reset! text (-> % .-target .-value))}]
    [:input {:type "button" :value "Go" :on-click #(do
                                                     (reset! i (int @text))
                                                     (reset! j 2))}]
    ]])

(reagent/render-component
 [render]
 (.getElementById js/document "content"))

(defn t []
  (println @proceed-text (first (nth data @i))))
