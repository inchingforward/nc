(ns randomdist.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  ;; Initialize a vector of 20 zeroes.
  {:random-counts (vec (take 20 (repeat 0)))})

(defn update-state [state]
  (let [index (rand-int (count (:random-counts state)))]
    (update-in state [:random-counts index] #(inc %))))

(defn draw-state [state]
  (let [counts (:random-counts state)
        rect-width (/ (q/width) (count counts))] 
    (q/background 255)
    (q/stroke 0)
    (q/fill 175)
    (doseq [index (range (count counts))]
      (q/rect (* index rect-width)
              (- (q/height) (inc (get counts index)))
              (- rect-width 1)
              (get counts index)))))

(q/defsketch randomdist
  :host "randomdist"
  :size [640 240]
  :setup setup
  :update update-state
  :draw draw-state
  :middleware [m/fun-mode])
