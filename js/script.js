const taskListShow = document.querySelector(".taskList");
const taskInput = document.querySelector("#taskInput");
const date = document.querySelector(".date");
const taskList = [];
$(".date").datepicker({});
function complete (x) {
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
function renderList() {
  let helper = "";
    taskList.forEach((val, index) => {
        let myClass = ''
        val.done?myClass='taskDone':myClass=''
    helper += `<li class="${myClass}" onclick="complete(${index})" role='button'>${val.title} | ${
      val.date
    }<button>Edit</button><button>Delete</button></li>`;
  });
    taskListShow.innerHTML = helper;
    
}
