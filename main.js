arranger.spread((canvas) => {
  let ctx = canvas.getContext('2d')
  ctx.fillStyle = 'rgb(0,0,0)'
  ctx.rotate(Math.random() * 2 * Math.PI)
  ctx.fillRect(Math.random() * canvas.width / 2, Math.random() * canvas.height, Math.random() * 3 * canvas.width / 4, 20)
})