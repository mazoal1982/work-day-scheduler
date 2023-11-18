// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Set the date at the top of the page
// console. Log(currentTime)
updateCurrentTime() 
function updateCurrentTime() {
var currentTime = dayjs().format('MMM D, YYYY h:mm:ss ')
console.log(currentTime)
$('#currentDay').text(currentTime)
  setInterval(updateCurrentTime, 1000);}
//save button below
var textInput = document.querySelector("#hour-9 textarea")
var saveButton = $('.saveBtn')
var text = textInput.value;
saveButton.on('click', function (event) {
event.preventDefault();
localStorage.setItem("hour-9", textInput.value);
})
function LogTextAreaVaLue() {
const element = document.getElementById('#textArea')
const value = element.value
console. Log(value)
}
// Set the status of each time-block
$(".time-block").each(function() {
var currentTime = dayjs().format("HH");
var timeBlock = parseInt($(this).attr("id").split("-")[1]);
if (timeBlock < currentTime) {
$(this).addClass("past");
} else if (timeBlock == currentTime) {
$(this).addClass("present");
} else {
$(this).addClass("future");
}
});

// Load any saved data from localStorage
$(".description").each(function() {
var timeBlock = $(this).parent().attr("id");
var savedData = localStorage.getItem(timeBlock);
if (savedData) {
$(this).val(savedData);
}
});

// Save the data to localStorage on click
$(".saveBtn").on("click", function() {
var timeBlock = $(this).parent().attr("id");
var description = $(this).siblings(".description").val();
localStorage.setItem(timeBlock, description);
});