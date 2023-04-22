const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
  btnDarkMode.classList.add("dark-mode-btn--active");
	document.body.classList.add("dark");
}

// 2. Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
  btnDarkMode.classList.remove("dark-mode-btn--active");
  document.body.classList.remove("dark");
}

// Если меняются системные настройки, меняем тему
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
  const newColorScheme = event.matches ? "dark" : "light";
  if (newColorScheme === "dark") {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
    localStorage.setItem("darkMode", "dark");
  } else {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
    localStorage.setItem("darkMode", "light");
  }
});

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");
  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
};

// цифровые часы
function time(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function aclock() {
var d = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
d = new Date(d);
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  h = time(h);
  m = time(m);
  s = time(s);
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("clock").innerHTML = days[d.getDay()]
}
aclock();
window.setInterval(aclock, 1000);

// аналоговые часы
function dclock() {
  var date = new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
  date = new Date(date),
  hours = date.getHours(),
  minutes = date.getMinutes(),
  seconds = date.getSeconds();
  
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