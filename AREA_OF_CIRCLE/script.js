function circleArea(radius) {
  if(radius <= 0 ) throw new Error("invalid radius")
  return (radius* radius) * Math.PI
}