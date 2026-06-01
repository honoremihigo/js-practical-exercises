function bmi(weight, height) {
  const bmi = weight / (height ** 2)
  let msg = ""
  if(bmi <=  18.5){
    msg = "Underweight"
  }else if( bmi <= 25.0){
    msg = "Normal"
  }else if(bmi <= 30.0){
    msg = "Overweight"
  }else if(bmi > 30.0){
    msg = "Obese"
  }
  return msg
}

console.log(bmi(70, 1.75)) // Normal