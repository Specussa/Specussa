// цифровые часы
function time(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function dayclock() {
  var date = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
  date = new Date(date);
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("clock").innerHTML = days[date.getDay()]
}
dayclock();
function aclock() {
  var date = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
  date = new Date(date);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  hours = time(hours);
  minutes = time(minutes);
  seconds = time(seconds);
  document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
}
aclock();
window.setInterval(aclock, 1000);

// аналоговые часы
function dclock() {
  var date = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
  date = new Date(date);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  if (hours > 12) {
    hours -= 12;
  }
  var secondsStartDegree = 360 / 60 * seconds,
  minutesStartDegree = 360 / 60 * minutes + 6 / 60 * seconds,
  hoursStartDegree = 360 / 12 * hours + 30 / 60 * minutes + 0.5 / 60 * seconds;
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = '\
  @keyframes rotate--hour {\
  from {transform: rotate(' + hoursStartDegree + 'deg) translate(-102px)}\
  to {transform: rotate(' + (hoursStartDegree + 360) + 'deg) translate(-102px)}\
  }\
  @keyframes rotate--minute {\
  from {transform: rotate(' + minutesStartDegree + 'deg) translate(-102px)}\
  to {transform: rotate(' + (minutesStartDegree + 360) + 'deg) translate(-102px)}\
  }\
  @keyframes rotate--second {\
  from {transform: rotate(' + secondsStartDegree + 'deg) translate(-102px)}\
  to {transform: rotate(' + (secondsStartDegree + 360) + 'deg) translate(-102px)}\
  }\
  @-webkit-keyframes rotate--hour {\
  from {transform: rotate(' + hoursStartDegree + 'deg) translate(-102px)}\
  to {transform: rotate(' + (hoursStartDegree + 360) + 'deg) translate(-102px)}\
  }\
  @-webkit-keyframes rotate--minute {\
  from {transform: rotate(' + minutesStartDegree + 'deg) translate(-102px)}\
  to {transform: rotate(' + (minutesStartDegree + 360) + 'deg) translate(-102px)}\
  }\
  @-webkit-keyframes rotate--second {\
  from {transform: rotate(' + secondsStartDegree + 'deg) translate(-102px)}\
  to {transform: rotate(' + (secondsStartDegree + 360) + 'deg) translate(-102px)}\
  }';
  document.getElementsByTagName('head')[0].appendChild(style);
}
dclock();
window.setInterval(dclock, 600000);