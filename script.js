//Current time display
var timeDisplay = $("#time-display");

setInterval("displayTime()", 1000);

function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplay.text(rightNow);
}

//local storage area for text box'
var saveButton = document.getElementById("saveBtn");
var comment = document.getElementById("todo");

function addToDo() {
  var newToDo = {
    comment: comment.value.trim(),
  };
  localStorage.setItem("addToDo", JSON.stringify(newToDo));
}

function renderToDo() {
  var lastToDo = JSON.parse(localStorage.getItem("newToDo"));

  if (lastToDo !== null) {
    document.getElementById("saved-comment").innerHTML = lastToDo.comment;
  } else {
    return;
  }
}

//highlighting area depending on time of day
var timeHighlight = function () {
  var currentTime = moment().hour();

  for (var i = 8; i < 9; i++) {
    var timeArea = $("#todo" + i);
    if (currentTime > i) {
      $(timeArea).addClass("past");
    } else if (currentTime === i) {
      $(timeArea).addClass("present");
    } else {
      $(timeArea).addClass("future");
    }
  }
};

saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  addToDo();
  renderToDo();
});

function init() {
  renderToDo();
}

init();
