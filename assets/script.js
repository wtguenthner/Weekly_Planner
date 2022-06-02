var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var date = document.getElementById('currentDay')
var nineInput = document.getElementById('nineInput')
var tenInput = document.getElementById('tenInput')
var elevenInput = document.getElementById('elevenInput')
var twelveInput = document.getElementById('twelveInput')
var oneInput = document.getElementById('oneInput')
var twoInput = document.getElementById('twoInput')
var threeInput = document.getElementById('threeInput')
var fourInput = document.getElementById('fourInput')
var fiveInput = document.getElementById('fiveInput')

var change = document.getElementsByName('textField');

// Generates date/time
var myDate = new Date();

//Object created for each aspect of the date that is needed
const parts = {
        date: myDate.getDate(),
        day: myDate.getDay(),
        month: myDate.getMonth(),
        year: myDate.getFullYear(),
        hour: myDate.getHours(),
    };

//Sets a variable to the hour of the day for future use
var hours = parts.hour;

//Displays date
date.innerHTML = "Today is: " + days[`${parts.day}`] + " " + months[`${parts.month}`] + ' ' + parts.date + ", " + parts.year ;

//Checks the hour of the day and compares it to the value of each row.
// Changes class based on the relationship between the hour and value
for(var x=0; x< 9; x++){
    var value = change[x].getAttribute("value");
    if(hours > value){
        change[x].className = "past";
    }
    if(hours == value){
        change[x].className = "present";
    }
    if(hours < value){
        change[x].className = "future";
    }
}

// Pulls from local storage and sets the saved schedule to the correct time text box
nineInput.value= localStorage.getItem("nine");
tenInput.value = localStorage.getItem('ten');
elevenInput.value = localStorage.getItem('eleven');
twelveInput.value = localStorage.getItem('twelve');
oneInput.value = localStorage.getItem('one');
twoInput.value = localStorage.getItem('two');
threeInput.value = localStorage.getItem('three');
fourInput.value = localStorage.getItem('four');
fiveInput.value = localStorage.getItem('five');



// All functions for adding schedule to local storage
function nine(){
    localStorage.setItem("nine", nineInput.value)
}
function ten(){
    localStorage.setItem("ten", tenInput.value)
}
function eleven(){
    localStorage.setItem("eleven", elevenInput.value)
}
function twelve(){
    localStorage.setItem("twelve", twelveInput.value)

}
function one(){
    localStorage.setItem("one", oneInput.value)

}
function two(){
    localStorage.setItem("two", twoInput.value)

}
function three(){
    localStorage.setItem("three", threeInput.value)

}
function four(){
    localStorage.setItem("four", fourInput.value)

}
function five(){
    localStorage.setItem("five", fiveInput.value)

}

