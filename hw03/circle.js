function circleArea(rad) {
  let result = Math.PI * (rad**2);
  console.log(result);
}

function circleCircumference(rad) {
  let result = 2 * Math.PI * rad;
  console.log(result);
}

module.exports = {
  circleArea,
  circleCircumference
}