(ns c-practice.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [alandipert.storage-atom :refer [local-storage]]
   ))

(enable-console-print!)

(def completed (local-storage (atom #{}) :completed))

(def p #(-> % pr-str println))
(defn t [] (p @completed))

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

(def shuffle-forward (let [
                          x (shuffle (range 802))
                          ]
                      (zipmap x (drop 1 (cycle x)))))

(def shuffle-backward (zipmap (vals shuffle-forward) (keys shuffle-forward)))

(defn smart-shuffler [f i]
  (if (= 802 (count @completed))
    0
    (loop [j (f i)]
      (if (@completed j)
        (recur (f j))
        j))))

(def smart-shuffle-forward #(smart-shuffler shuffle-forward %))
(def smart-shuffle-backward #(smart-shuffler shuffle-backward %))

(defn ban-i []
  (swap! completed conj @i)
  (swap! i smart-shuffle-forward))

(defn bounded-dec [x]
  (cond
   @random-mode? (smart-shuffle-backward x)
   (zero? x) x
   :default (dec x)))

(defn bounded-inc [x]
  (cond
   @random-mode? (smart-shuffle-forward x)
   (= 801 x) x
   :default (inc x)))

(def proceed
  #(let [
         value (if % (-> % .-target .-value) @proceed-text)
         id @i
         ]
     (if (= value (first (nth data id)))
       (do
         (reset! proceed-text "")
         (swap! i bounded-inc)
         (reset! j 2))
       (reset! proceed-text value))))

(defn render []
  (let [
        id @i
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
                                                                      #_(if-not checked?
                                                                        (swap! i smart-shuffle-forward)))
                } "Random Mode"][:br]
       ]]
     [:div
      [:input {:type "number" :value @text :min 0 :max 800 :on-change #(reset! text (-> % .-target .-value))}]
      [:input {:type "button" :value "Go" :on-click #(do
                                                       (reset! i (int @text))
                                                       (reset! j 2))}]
      ]
     [:br]
     [:br]
     (if @random-mode?
       [:div
        [:input {:type "button"
                 :value "I know it"
                 :on-click ban-i
                 }][:br][:br][:br]
        [:input {:type "button"
                 :value "Reset known"
                 :on-click #(reset! completed #{})
                 }]])
     ]))

(reagent/render-component
 [render]
 (.getElementById js/document "content"))

