(ns walker.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:color 0
   :x (/ (q/width) 2)
   :y (/ (q/height) 2)})

(defn update-state [state]
  (let [choice (rand-int 4)]
    (case choice
      0 (assoc state :x (inc (:x state)))
      1 (assoc state :x (dec (:x state)))
      2 (assoc state :y (inc (:y state)))
      3 (assoc state :y (dec (:y state))))))

(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  ;(q/background 240)
  ; Set circle color.
  (q/fill (:color state) 255 255)
  ; Calculate x and y coordinates of the circle.
  (q/point (:x state) (:y state)))
  ;(let [angle (:angle state)
  ;      x (* 150 (q/cos angle))
  ;      y (* 150 (q/sin angle))]
  ;  ; Move origin point to the center of the sketch.
  ;  (q/with-translation [(/ (q/width) 2)
  ;                       (/ (q/height) 2)]
  ;    ; Draw the circle.
  ;    (q/ellipse x y 100 100))))

(q/defsketch walker
  :host "walker"
  :size [500 500]
  ; setup function called only once, during sketch initialization.
  :setup setup
  ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
  ; This sketch uses functional-mode middleware.
  ; Check quil wiki for more info about middlewares and particularly
  ; fun-mode.
  :middleware [m/fun-mode])
