(ns c-practice.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [alandipert.storage-atom :refer [local-storage]]
    ))

(enable-console-print!)

(def completed (local-storage (atom #{}) :completed))

(defn s [] (reset! completed 3))
(defn t [] @completed)

(def p #(-> % pr-str println))

(def data
  (for [line (-> "tuttle" js/document.getElementById .-innerHTML .trim (.split "\n"))]
    (-> line .trim (.split ","))))

(def i (atom 0))
(def j (atom 2))
;(def k (atom 0))

(def text (atom 0))
(def proceed-text (atom ""))
(def show-char? (atom true))
(def auto-proceed? (atom false))
(def random-mode? (atom false))
(def shuffler (let [
                    x (shuffle (range 802))
                    ]
                (zipmap x (drop 1 (cycle x)))))

(defn bounded-dec [x]
  (if (zero? x) x (dec x)))
(defn bounded-inc [x]
  (if (= 801 x) x (inc x)))


(def proceed
  #(let [
         value (if % (-> % .-target .-value) @proceed-text)
         id (if @random-mode?
              (shuffler @i) @i)
         ]
     (if (= value (first (nth data id)))
       (do
         (reset! proceed-text "")
         (swap! i bounded-inc)
         (reset! j 2))
       (reset! proceed-text value))))

(defn render []
  (let [
        id (if @random-mode?
            (shuffler @i) @i)
        s (if @show-char?
            (take @j (nth data id))
            (drop 1 (take @j (nth data id))))
        ]
    [:div
     [:div
      {:style {:font-size "2em"}}
      id " " (apply str (interpose " " s))]
     [:div
      [:input {:type "button" :value "Previous" :on-click #(do
                                                             (reset! proceed-text "")
                                                             (swap! i bounded-dec)
                                                             (reset! j 2))}]
      [:input {:type "button" :value "Next" :on-click #(do
                                                         (reset! proceed-text "")
                                                         (swap! i bounded-inc)
                                                         (reset! j 2))}]
      [:input {:type "button" :value "Hint" :on-click #(swap! j inc)}]]
     #_[:div
      [:input {:type "button" :value "Random Previous" :on-click #(do
                                                                    (reset! proceed-text "")
                                                                    (swap! k bounded-dec)
                                                                    (reset! i (nth shuffled @k))
                                                                    (reset! j 2))}]
      [:input {:type "button" :value "Random Next" :on-click #(do
                                                                (reset! proceed-text "")
                                                                (swap! k bounded-inc)
                                                                (reset! i (nth shuffled @k))
                                                                (reset! j 2))}]]
     [:div
      [:form
       {:on-submit (fn [] (proceed) false)}
      [:input {:type "text" :value @proceed-text :on-change #(if @auto-proceed?
                                                               (proceed %)
                                                               (let [
                                                                     value (-> % .-target .-value)
                                                                     ]
                                                                 (reset! proceed-text value))
                                                               )
               :on-focus #(reset! proceed-text "")}]
      (if-not @auto-proceed?
        [:input {:type "button" :value "Go" :on-click #(proceed)}])[:br]
      [:input {:type "checkbox" :checked @show-char? :on-change #(reset! show-char? (-> % .-target .-checked))} "Show Char"][:br]
      [:input {:type "checkbox" :checked @auto-proceed? :on-change #(reset! auto-proceed? (-> % .-target .-checked))} "Auto Proceed"][:br]
      [:input {:type "checkbox" :checked @random-mode? :on-change #(let [
                                                                         checked? (-> % .-target .-checked)
                                                                         ]
                                                                     (reset! random-mode? checked?)
                                                                     (if-not checked?
                                                                       (swap! i shuffler)))
                                                                      } "Random Mode"][:br]
      ]]
     [:div
      [:input {:type "number" :value @text :min 0 :max 800 :on-change #(reset! text (-> % .-target .-value))}]
      [:input {:type "button" :value "Go" :on-click #(do
                                                       (reset! i (int @text))
                                                       (reset! j 2))}]
      ]]))

(reagent/render-component
 [render]
 (.getElementById js/document "content"))

