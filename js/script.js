// create coordinates
let xs = []
for (var i = 9; i < 500; i++) {
  xs.push(i)
}
// console.log(xs)

function animate() {
  // console.log('sup')

  let points = xs.map(x => {
    // calculation
    return [x, x + Math.random() * 20]
  })

  let path = "M" + points.map(([x, y]) => {
    return `${x},${y}`
  }).join (" L")
  // console.log(path)
  document.querySelector("path").setAttribute("d", path)

  requestAnimationFrame(animate)
}

animate()
