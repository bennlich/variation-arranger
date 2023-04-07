const arranger = {

  canvases: [],

  createCanvases: (opts) => {
    let numAcross = 8
    let numHigh = 4
    let width = window.innerWidth / numAcross
    let height = window.innerHeight / numHigh

    let canvases = []
    for (var i = 0; i < numAcross; i++) {
      for (var j = 0; j < numHigh; j++) {
        let canvas = document.createElement('canvas')
        canvas.style.position = 'absolute'
        canvas.style.display = 'block'
        canvas.width = width
        canvas.height = height
        canvas.style.left = `${i * width}px`
        canvas.style.top = `${j * height}px`
        document.body.append(canvas)
        canvases.push(canvas)
      }
    }

    return canvases
  },

  spread: (renderFn, opts) => {

    if (arranger.canvases.length === 0) {
      arranger.canvases = arranger.createCanvases(opts)
    }

    for (let canvas of arranger.canvases) {
      renderFn(canvas)
    }

  }

}

window.arranger = arranger