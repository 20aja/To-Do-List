let add = document.querySelector(".add");
let text = document.querySelector(".text");
let box = document.querySelector(".box");
let count = document.querySelector(".count");
let edit = document.querySelector(".edit");
let del = document.querySelector(".delete");
let mode = "create";
let index;

// Save In Local Storage
if (localStorage.Tasks != null) {
  allTasks = JSON.parse(localStorage.Tasks);
} else {
  allTasks = [];
}

// Add Task
add.onclick = function () {
  if (mode == "create") {
    if (text.value !== "") {
      allTasks.push(text.value);
    }
  } else {
    allTasks[index] = text.value;
    mode = "create";
    add.textContent = "➕";
  }
  localStorage.setItem("Tasks", JSON.stringify(allTasks));
  clear();
  show();
};

// Clear
function clear() {
  text.value = "";
}

// Show
function show() {
  box.innerHTML = "";
  for (let i = 0; i < allTasks.length; i++) {
    count.textContent = allTasks.length;
    box.innerHTML += `
        
        <div class="task-name">
          <div class="my-task">${i+1}. ${allTasks[i]}</div>
          <a onclick = "updata(${i})" class="edit"><img src="img/edit.png" alt="edit" /></a>
          <a onclick = "deletetask(${i})" class="delete"><img src="img/bin.png" alt="delete" /></a>
        </div>
        `;
  }
}
show();

// Delete
function deletetask(i) {
  allTasks.splice(i, 1);
  localStorage.Tasks = JSON.stringify(allTasks);
  show();
  count.textContent = allTasks.length;
}

// Updata

function updata(i) {
  text.value = allTasks[i];
  add.textContent = "✔";
  mode = "updata";
  index = i;
  show();
}
