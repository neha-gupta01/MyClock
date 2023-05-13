const currentTime = document.getElementById("currentTime");
setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;
  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

// Add 0 to the begining of number if less than 10
function formatTime(time) {
  return time.toString().padStart(2, "0");
}
function isAmPm(hours) {
  return hours >= 12 ? "PM" : "AM";
}
function clock() {
  hours.textContent = formatTime(htime);
  minutes.textContent = formatTime(mtime);
  seconds.textContent = formatTime(stime);
  ampm.textContent = isAmPm(htime);
}
setInterval(clock, 1000);
