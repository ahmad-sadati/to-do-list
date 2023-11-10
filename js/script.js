const taskListShow = document.querySelector(".taskList");
const taskInput = document.querySelector("#taskInput");
const date = document.querySelector(".date");
const taskList = [];
let currentTaskIndex;
let oldTaskIndex = '' ;
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
    });
    taskInput.value = "";
    renderList();
  }
});
function startEdit(x) {
  taskInput.value = taskList[x].title;
  date.value = taskList[x].date;
  document.getElementById("edit" + (x + 1)).style.display = "none";
  document.getElementById("save" + (x + 1)).style.display = "inline";
  console.log(x);
  if (oldTaskIndex!=='') {
    console.log(oldTaskIndex);
    document.getElementById("edit" + (oldTaskIndex + 1)).style.display =
      "inline";
    document.getElementById("save" + (oldTaskIndex + 1)).style.display = "none";
  }
  oldTaskIndex = x;
}
function update (index) {
  taskList[index].title = taskInput.value
  taskList[index].date = date.value
  taskInput.value = ''
  date.value = ''
  renderList();
}
function remove (index) {
  taskList.splice(index, 1);
  renderList()
}
function renderList() {
  let helper = "";
  taskList.forEach((val, index) => {
    let myClass = "";
    val.done ? (myClass = "taskDone") : (myClass = "");
    helper += `<li class="${myClass}" style="display:block;height:60px" role='button'><span onclick="complete(${index})">${
      val.title
    } | ${val.date}</span><span style="float:right"><button id="edit${
      index + 1
    }" onclick="startEdit(${index})">Edit</button><button style="display:none" id="save${
      index + 1
    }" onclick="update(${index})">save</button><button onclick=remove(${index})>Delete</button></li></span>`;
  });
  taskListShow.innerHTML = helper;
}
