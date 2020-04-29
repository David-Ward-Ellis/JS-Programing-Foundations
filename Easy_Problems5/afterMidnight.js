// Was unable to do either of these by myself

onst MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = MINUTES_PER_HOUR * HOURS_PER_DAY;

function leadingZero(time) {
  return time < 10 ? `0${time}` :  String(time)
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`

}

function timeOfDay (deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else deltaMinutes = (deltaMinutes % MINUTES_PER_DAY);

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime (hours, minutes)
}

function afterMidnight(timeStr) {
  let [hours, minutes] = timeStr.split(':').map(num => Number(num));
  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight (timeStr) {
 let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
 if (deltaMinutes === MINUTES_PER_DAY) {
   return 0
 }
 return deltaMinutes;
}
console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);