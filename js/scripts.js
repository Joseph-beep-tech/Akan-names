function findZinc() {
    var year = document.getElementById("nam").value;
    var month = document.getElementById("mon").value;
    var day = document.getElementById("dat").value;
    var date = new Date(`${year}-${month}-${day}`);
    var myDay = date.getDay();
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var result = document.getElementById("result");
    var daysWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwaku", "Kwabena", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "AKua", "Yaa", "Afua", "Ama"];
    if (year === "" || year.length < 4 || year.length > 4) {
        alert("Please enter a valid year!");
    } else if (month <= 0 || month > 12) {
        alert("Please enter a valid month!");
    } else if (day <= 0 || day > 31) {
        alert("Please enter a valid date!");
    } else if (male.checked == false && female.checked == false) {
        alert("Please specify your gender!");
    } else if (male.checked == true) {
        result.innerHTML = "Congrats " + maleNames[myDay] + ". you were born on a " + daysWeek[myDay] + " and that's your Akan Name.";
    } else if (female.checked == true) {
        result.innerHTML = "Congrats " + femaleNames[myDay] + ". you were born on a " + daysWeek[myDay] + " and that's your Akan Name.";
    }
}