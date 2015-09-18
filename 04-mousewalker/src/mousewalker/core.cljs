(ns mousewalker.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (q/background 255)
  (q/frame-rate 30)
  (q/stroke 0)
  {:x 10 :y 10})

(defn move-closer [from-pos to-pos]
  (if (< from-pos to-pos)
      (inc from-pos)
      (dec from-pos)))

(defn update-state [state]
  (let [mousex (q/mouse-x)
        mousey (q/mouse-y)
        r      (q/random 1)]
    (if (< r .5) 
      {:x (move-closer (:x state) mousex) 
       :y (move-closer (:y state) mousey)}
      state)))

(defn draw-state [state]
  (q/point (:x state) (:y state)))

(q/defsketch mousewalker
  :host "mousewalker"
  :size [500 500]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
