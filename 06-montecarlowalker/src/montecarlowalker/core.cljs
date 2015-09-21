(ns montecarlowalker.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  (q/background 255)
  (q/frame-rate 30)
  {:x 10 :y 10})

(defn montecarlo []
  ;; loop until found
  )

(defn update-state [state]
  (let [stepsize (montecarlo)
        stepx (q/random (- stepsize) stepsize)
        stepy (q/random (- stepsize) stepsize)]
    {:x (+ (:x state) stepx)
     :y (+ (:y state) stepy)}))

(defn draw-state [state]
  (q/stroke 0)
  (q/point (:x state) (:y state)))

(q/defsketch montecarlowalker
  :host "montecarlowalker"
  :size [500 500]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
