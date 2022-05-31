var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
var hours;
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
var myDate = new Date();
const parts = {
        date: myDate.getDate(),
        day: myDate.getDay(),
        month: myDate.getMonth(),
        year: myDate.getFullYear(),
        hour: myDate.getHours(),
    };
var hours = parts.hour;
date.innerHTML = "Today is: " + days[`${parts.day}`] + " " + months[`${parts.month}`] + ' ' + parts.date + ", " + parts.year ;



function test(){

console.log(nineInput.value);
}
