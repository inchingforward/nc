(ns rightwalker.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (q/background 255)
  (q/stroke 0)
  {:x (/ (q/width) 2)
   :y (/ (q/height) 2)})

(defn update-state [state]
  (let [r (q/random 1)
        x (:x state)
        y (:y state)]
    (cond (< r 0.4) (assoc state :x (inc x))
          (< r 0.6) (assoc state :x (dec x))
          (< r 0.8) (assoc state :y (inc y))
          :else     (assoc state :y (dec y)))))

(defn draw-state [state]
  (q/point (:x state) (:y state)))

(q/defsketch rightwalker
  :host "rightwalker"
  :size [500 500]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
