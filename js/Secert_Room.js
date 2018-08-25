
function createaNewAdmin(User, Pass) {
  localStorage.validAdminName.push(User);
  localStorage.validAdminPass.push(Pass);
}
function initAdmin() {
  var Name = prompt("What do you want the new Admin's username to be?");
  var passcode = prompt("What do you want the new Admin's passcode to be?");
  var confirmPasscode = prompt("Please confirm your passcode.");
  if (confirmPasscode == passcode) {
    createaNewAdmin(Name, passcode);
    alert("It worked!");
  }
}
function updateClock() {
    var now = new Date(), // current date
        months = ['January', 'February', '...']; // you get the idea

        time = now.getHours() + ':' + now.getMinutes() + ":" + now.getSeconds(), // again, you get the idea

        // a cleaner way than string concatenation
        date = [now.getDate(),
                months[now.getMonth()],
                now.getFullYear()].join(' ');

    // set the content of the element with the ID time to the formatted string
    document.getElementById('time').innerHTML = [date, time].join(' / ');

    // call this function again in 1000ms
    setTimeout(updateClock, 1000);
}
var x = 0;
window.setInterval(
     function () {
         x = x + 1;

     }, 1000);
if (x > 2) {
  updateClock();
}
