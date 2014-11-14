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
(def show-char? (atom true))
(def auto-proceed? (atom false))

(def proceed
  #(let [
         value (if % (-> % .-target .-value) @proceed-text)
         ]
     (if (= value (first (nth data @i)))
       (do
         (reset! proceed-text "")
         (swap! i inc)
         (reset! j 2))
       (reset! proceed-text value))))

(defn render []
  (let [
        s (if @show-char?
            (take @j (nth data @i))
            (drop 1 (take @j (nth data @i))))
        ]
    [:div
     [:div
      {:style {:font-size "2em"}}
      @i " " (apply str (interpose " " s))]
     [:div
      [:input {:type "button" :value "Previous" :on-click #(do
                                                             (reset! proceed-text "")
                                                             (swap! i dec)
                                                             (reset! j 2))}]
      [:input {:type "button" :value "Next" :on-click #(do
                                                         (reset! proceed-text "")
                                                         (swap! i inc)
                                                         (reset! j 2))}]
      [:input {:type "button" :value "Hint" :on-click #(swap! j inc)}]]
     [:div
      [:input {:type "text" :value @proceed-text :on-change #(if @auto-proceed?
                                                               (proceed %)
                                                               (reset! proceed-text (-> % .-target .-value))
                                                               )
               :on-focus #(reset! proceed-text "")}]
      (if-not @auto-proceed?
        [:input {:type "button" :value "Go" :on-click #(proceed)}])
      [:br]
      [:input {:type "checkbox" :checked @show-char? :on-change #(reset! show-char? (-> % .-target .-checked))} "Show Char"][:br]
      [:input {:type "checkbox" :checked @auto-proceed? :on-change #(reset! auto-proceed? (-> % .-target .-checked))} "Auto Proceed"]
      ]
     [:br]
     [:div
      [:input {:type "number" :value @text :min 0 :max 800 :on-change #(reset! text (-> % .-target .-value))}]
      [:input {:type "button" :value "Go" :on-click #(do
                                                       (reset! i (int @text))
                                                       (reset! j 2))}]
      ]]))

(reagent/render-component
 [render]
 (.getElementById js/document "content"))

(defn t []
  (println @proceed-text (first (nth data @i))))
