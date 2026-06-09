function narcissistic(value) {
  let sum = 0
  for(const number of value.toString()){
      sum+= (number** value.toString().length)
  }
  return Number(sum) === value
}