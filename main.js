'use strict';

const taskList = document.querySelector(".js-taskList");
const inputAdd = document.querySelector(".js-inputAdd");
const buttonAdd = document.querySelector(".js-buttonAdd");
const buttonSearch = document.querySelector(".js-buttonSearch");
const inputSearch = document.querySelector(".js-inputSearch");
let tasks = []; //declaramos variable global de array vacio que se actualiza en el fetch, porque es igual a data.results para poder acceder a la lista de tareas en la funcion manejadora.
const SERVER_URL = `https://dev.adalab.es/api/todo/`;

//funcion que renderiza las tareas
function renderTasks(arrayTasks) {
  taskList.innerHTML = '';
  for(const task of arrayTasks){

    const itemList = document.createElement("li");
    const inputList = document.createElement("input");
    const taskName = document.createElement("span");
    taskList.appendChild(itemList);
    itemList.appendChild(inputList);
    const taskNameMessage = document.createTextNode(task.name);
    taskName.appendChild(taskNameMessage);
    itemList.appendChild(taskName);
    inputList.setAttribute("type", "checkbox");
    inputList.setAttribute("id", task.id);

    if (task.completed === true){

      itemList.setAttribute("class", "border-li line-through list-dec list");
      inputList.setAttribute("checked", "");
      inputList.setAttribute("class", "inputMargin")

  }else{

      itemList.setAttribute("class", "border-li list-dec list")
      inputList.setAttribute("class", "inputMargin")

     }
  }
};

renderTasks(tasks);

// petición al servidor, y almacenamiento del local storage
const tasksLocalStorage = JSON.parse(localStorage.getItem("listTasks"));
  if (tasksLocalStorage) {
    tasks = tasksLocalStorage
    renderTasks(tasksLocalStorage)
} else {
    fetch(SERVER_URL)
  .then(response => response.json())
  .then(data => {
    const list = data.results;
    tasks = list;
    localStorage.setItem("listTasks", JSON.stringify(tasks))
    renderTasks(tasks);

  })
}

// ejercicio: cuando escribo una nueva tarea, se añade a la lista.
const handleNewTask = (event) => {
  event.preventDefault();
  const inputAddValue = inputAdd.value;

  const newTask = {
    name: inputAddValue,
    completed: false,
    id: tasks.length + 1,
  }
  tasks.push(newTask);
  renderTasks(tasks);

}
 

buttonAdd.addEventListener("click", handleNewTask);

function handleSearchTask (event) {
  event.preventDefault()
  const valueSearch = inputSearch.value;

  const filterTasks = tasks.filter((task) => task.name.includes(valueSearch));
  renderTasks(filterTasks);

}

buttonSearch.addEventListener("click", handleSearchTask);

//cuando la usuaria haga click en la tarea, se marca el check y se tacha la tarea
function handleClick(event) {
  if (event.target.type === 'checkbox') {
    const taskIdCheckbox = parseInt(event.target.id);
    const task = tasks.find(task => {
      // console.log("taskIdCheckbox", taskIdCheckbox);
      // console.log("task.id", task.id)
      return task.id === taskIdCheckbox //la tarea que ha seleccionado la usuaria, coincida con el id de la tarea
    });
    task.completed = event.target.checked; //
    renderTasks(tasks);
  }
};

taskList.addEventListener("click", handleClick);











