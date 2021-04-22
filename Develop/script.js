var currentTime = $(".time");

var time = setInterval(myTimer, 1000);

function myTimer() {
  var date = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  $("#currentTime").text(date);
}

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

saveButton.addEventListener("click", function (event) {
  event.preventDefault();
  addToDo();
  renderToDo);
});

function init() {
  renderToDo();
}

init();