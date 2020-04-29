const MAX_ANGLE = 360;
const MIN_ANGLE = 0;

function dms(angle) {
  angle = checkAngle(angle) 
  
  let degrees = Math.floor(angle);
  let minutes = ((angle - Math.floor(angle)) * 60);
  let seconds = ((minutes - Math.floor(minutes)) * 60);

  degrees = padZero(Math.floor(degrees));
  minutes = padZero(Math.floor(minutes));
  seconds = padZero(Math.floor(seconds));  
  return `${degrees}°${minutes}'${seconds}"`;

}

function checkAngle(ang) {
  if (ang > MAX_ANGLE) {
    return ang - MAX_ANGLE; 
  } else if (ang < MIN_ANGLE && ang > -MAX_ANGLE) {
    return ang + MAX_ANGLE
  } else if(ang < -MAX_ANGLE) {
    return (ang + MAX_ANGLE) + MAX_ANGLE
  } else return ang
}

function padZero(num) {
  let numString = String(num)
  
  return numString.length < 2 ? ('0' + numString) : numString
}

console.log(dms(30));
console.log(dms(76.73));
console.log(dms(254.6));
console.log(dms(93.034773));
console.log(dms(0));
console.log(dms(360));
console.log(dms(-1));
console.log(dms(400));
console.log(dms(-40));
console.log(dms(-420));
