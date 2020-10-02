function name() {
var year = document.getElementById("nam").Value;
var month = document.getElementById("mon").Value;
var day = document.getElementById("dat").Value;
var date = new Date(`${year}-${month}-${day}`);
var ground = date.getDay();
var male = document.getElementById("male");
var female = document.getElementById("female");
var bring = document.getElementById("possible");
var daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Awoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama",];
}
if (year == "" || year.length < 4 || year.length > 4) {
    alert(" Please enter a valid year!");
} else if (month < 0 || month > 12) {
    alert("Please enter a valid month!");
} else if (day < 0 || day > 31) {
    alert("Please enter a valid date!");
} else if (male.checked == false && female.checked == false) {
    alert("Please specify your gender!");
} else if (male.checked == true) {
    bring.innerHTML = "Congrats" + maleNames[ground] + ". your birth day is on "  + daysWeek[ground] + ". and that's your Akan Name.";
} else if (female.checked == true) {
    bring.innerHTML = "Congrats" + femaleNames[ground] + ". your birth day is on " + daysWeek[ground] + ". and that's your Akan Name."
}   else {
    alert("Contnue");
}