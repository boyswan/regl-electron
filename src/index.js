
// As usual, we start by creating a full screen regl object
const regl = require('regl')()


let hold = [];
for (let i=0;i<=100;i++) {
  hold.push(
    { offset: [-i * Math.random(), -i * Math.random()] },
    { offset: [-i * Math.random(), 0] },
    { offset: [-i * Math.random(), i * Math.random()] },
    { offset: [0, -i * Math.random()] },
    { offset: [0, 0] },
    { offset: [0, i * Math.random()] },
    { offset: [i * Math.random(), -i * Math.random()] },
    { offset: [i * Math.random(), 0] },
    { offset: [i * Math.random(), i * Math.random()] }
  )
}

// Next we create our command
const draw = regl({
  vert: require('./shaders/test.vert'),
  frag: require('./shaders/test.frag'),

  attributes: {
    position: [
      0.5, 0.5,
      0, 15, 0.5,
      1, 1]
  },

  uniforms: {
    // the batchId parameter gives the index of the command
    color: ({tick}, props, batchId) => [
      Math.sin(0.02 * ((0.1 + Math.sin(batchId)) * tick + 3.0 * batchId)),
      Math.cos(0.02 * (0.02 * tick + 0.1 * batchId)),
      Math.sin(0.02 * ((0.3 + Math.cos(2.0 * batchId)) * tick + 0.8 * batchId)),
      1
    ],
    angle: ({tick}) => 0.01 * tick,
    offset: regl.prop('offset')
  },

  count: 3
})

// Here we register a per-frame callback to draw the whole scene
regl.frame(function () {
  regl.clear({
    color: [0, 0, 0, 1]
  })

  // This tells regl to execute the command once for each object
  draw(hold)
})
