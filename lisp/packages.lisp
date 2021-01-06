(defpackage #:ngl
  (:use #:common-lisp)
  (:shadow #:structure)
  (:export
    #:ambient-color
    #:ambient-intensity
    #:aspect-ratio
    #:assembly
    #:atom-quad
    #:auto-view
    #:backbone
    #:background
    #:background-color
    #:ball-and-stick
    #:base
    #:bond-scale
    #:bond-spacing
    #:buffer
    #:buffer-representation
    #:camera-eye-sep
    #:camera-fov
    #:camera-type
    #:capped
    #:cartoon
    #:clip-center
    #:clip-dist
    #:clip-far
    #:clip-mode
    #:clip-near
    #:clip-radius
    #:clip-scale
    #:color-domain
    #:color-mode
    #:color-reverse
    #:color-scale
    #:color-scheme
    #:color-value
    #:color-volume
    #:component
    #:components
    #:contour
    #:cutoff
    #:cylinder-only
    #:depth-write
    #:diffuse
    #:diffuse-interior
    #:dihedral
    #:direction
    #:disable-impostor
    #:disable-picking
    #:ext
    #:filter-sele
    #:flat-shaded
    #:fog-far
    #:fog-near
    #:frame
    #:fullscreen
    #:hover-timeout
    #:impostor
    #:interior-color
    #:interior-darkening
    #:interpolate-step
    #:interpolate-type
    #:is-running
    #:label-color
    #:label-size
    #:label-visible
    #:label-z-offset
    #:lazy
    #:licorice
    #:light-color
    #:light-intensity
    #:line
    #:line-only
    #:linewidth
    #:matrix
    #:measurement
    #:metalness
    #:mode
    #:mouse-preset
    #:multiple-bond
    #:name
    #:on-pick
    #:on-stage-pick
    #:opacity
    #:opaque-back
    #:open-ended
    #:pan-speed
    #:pause
    #:pick-filter
    #:play
    #:%position
    #:positions
    #:primitives
    #:probe-radius
    #:quality
    #:quaternion
    #:radial-segments
    #:representation
    #:representations
    #:ribbon
    #:rock
    #:rotate-speed
    #:roughness
    #:sample-level
    #:scale
    #:scale-factor
    #:sele
    #:shape
    #:side
    #:smooth
    #:smooth-sheet
    #:spacefill
    #:sphere-detail
    #:spin
    #:stage
    #:%step
    #:stop
    #:structure
    #:structure-representation
    #:subdiv
    #:surface
    #:surface-type
    #:tension
    #:timeout
    #:tooltip
    #:trajectories
    #:trajectory
    #:update-position
    #:use-interior-color
    #:use-worker
    #:uuid
    #:value
    #:value
    #:visible
    #:wireframe
    #:worker-default
    #:zoom-speed))

