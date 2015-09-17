(ns walker.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (q/background 255)
  (q/stroke 0)
  {:x (/ (q/width) 2)
   :y (/ (q/height) 2)})

(defn update-state [state]
  (let [stepx (dec (int (q/random 3))) 
        stepy (dec (int (q/random 3)))]
    {:x (+ (:x state) stepx)
     :y (+ (:y state) stepy)}))

(defn draw-state [state]
  (q/point (:x state) (:y state)))

(q/defsketch walker
  :host "walker"
  :size [640 360]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
