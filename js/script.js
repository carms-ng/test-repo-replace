// create coordinates
let xs = []
for (var i = 9; i < 500; i++) {
  xs.push(i)
}

// set time to 0
let t = 0

function animate() {

  let points = xs.map(x => {
    // electrical line
    // return [x, x + Math.random() * 20]

    //      offsetY      frequency   wavelength
    let y = 200 + Math.sin((x + t) / 20) * 50
    return [x, y]
  })

  let path = "M" + points.map(([x, y]) => {
    return `${x},${y}`
  }).join (" L")
  // console.log(path)
  document.querySelector("path").setAttribute("d", path)

  // speed
  t += 1

  requestAnimationFrame(animate)
}

animate()
