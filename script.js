var today = dayjs();
$("#timeCurrent").text(today.format("MMM DD, YYYY, hh:mm:ss a"));

//Need to use a time.Interval function to display the date and time every second, updating!

var time = $("#displayTime");

function displayTime() {
  var timeNow = dayjs().format("MMM DD, YYYY, hh:mm:ss a");
  today.text(timeNow);
}

setInterval(today, 1000);

displayTime();
