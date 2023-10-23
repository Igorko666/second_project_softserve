function deleteTask(index) {
  let taskList = document.getElementById("taskList");
  let liToDelete = taskList.children[index];
  taskList.removeChild(liToDelete);
}

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  let newLi = document.createElement("li");
  newLi.innerHTML = `${taskInput.value} <button class="deleteButton" onclick="deleteTask(${
    taskList.childElementCount - 1
  })">Видалити</button>`;
  taskList.appendChild(newLi);

  taskInput.value = "";
}



