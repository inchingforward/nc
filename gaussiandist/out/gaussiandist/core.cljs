(ns gaussiandist.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn get-next-x []
  (let [n (q/random-gaussian)
        sd 60
        mean 320]
  (+ (* sd n) mean)))

(defn setup []
  (q/background 255)
  (q/no-stroke)
  (q/fill 0 10)
  (q/frame-rate 30)
  {:x (get-next-x)})

(defn update-state [state]
  {:x (get-next-x)})

(defn draw-state [state]
  (q/ellipse (:x state) 180, 16, 16))

(q/defsketch gaussiandist
  :host "gaussiandist"
  :size [640 320]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
