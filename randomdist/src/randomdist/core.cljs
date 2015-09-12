(ns randomdist.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  ; Initialize a vector of 20 zeroes.
  {:random-counts (vec (take 20 (repeat 0)))})

(defn update-state [state]
  ; FIXME:  increment one number in the vector randomly
  state)

(defn draw-state [state]
  ; FIXME: draw a rect for each random-count
  (q/background 255)
  (q/stroke 0)
  (q/fill 175))

(q/defsketch randomdist
  :host "randomdist"
  :size [640 240]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
