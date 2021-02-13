var username;
var userresult;

username = prompt("お名前を教えて下さい。");
document.getElementById("name").innerHTML = username;

if (username == ""){
  document.getElementById("name").innerHTML = "名無し";  
}

var rand = Math.floor( Math.random() * 5);
var ruck = ["大吉","中吉","小吉","吉","凶"]
document.getElementById("result").innerHTML = ruck[rand];

