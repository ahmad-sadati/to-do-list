const taskListShow = document.querySelector(".taskList");
const taskInput = document.querySelector("#taskInput");
const date = document.querySelector(".date");
const taskList = [];
$(".date").datepicker({});
function complete(x) {
  if (taskList[x].done) {
    taskList[x].done = false;
  } else {
    taskList[x].done = true;
  }
  renderList();
}
taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    taskList.push({
      title: taskInput.value,
      date: date.value,
      done: false,
      onEdit: false,
    });
    taskInput.value = "";
    renderList();
  }
});
function renderList() {
  let helper = "";
  taskList.forEach((val, index) => {
    let myClass = "";
    let Show = "";
    val.done ? (myClass = "taskDone") : (myClass = "");
    val.onEdit ? (Show = "d-inline") : (Show = "d-none")
    helper += `<li class="${myClass}" onclick="complete(${index})" role='button'>${val.title} |
     ${val.date}</li><button class="" onclick="edit(${index})">Edit</button><button class="${Show}" onclick="SaveEdit(${index})">Save Edit</button><button class="" onclick="remove(${index})">Delete</button>`;
  });
  taskListShow.innerHTML = helper;
}
function edit(index) {
  let taskEdit = taskList[index];
  taskInput.value = taskEdit.title;
  onEdit = true
  console.log(onEdit);
  renderList()
}
function SaveEdit(index) {
  let taskEdit = taskList[index];
  taskEdit.title = taskInput.value;
  renderList();
  taskInput.value = "";
}
function remove(index) {
  console.log(index);
  taskList.splice(index, 1);
  console.log("ok");
  renderList();
}
