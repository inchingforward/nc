(ns mousewalker.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (q/background 255)
  (q/frame-rate 30)
  {:x 10 :y 10})

(defn update-state [state]
  {:x (q/random 500) 
   :y (q/random 500)})

(defn draw-state [state]
  (q/stroke 0)
  (q/point (:x state) (:y state)))

(q/defsketch mousewalker
  :host "mousewalker"
  :size [500 500]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
