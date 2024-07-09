'use strict';

const taskList = document.querySelector(".js-taskList");


const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  { name: "Aprender cómo se realizan las peticiones al servidor en JavaScript", completed: false, id: 4,},
];


function renderTasks () {
  for(const task of tasks){

    if (task.completed === true){
      taskList.innerHTML += ` <li class="border-li line-through"><input type="checkbox" checked id="${task.id}"> <span>
      ${task.name} </span> </li> `;


     } else {
      taskList.innerHTML += `<li class="border-li"> <input type="checkbox" id="${task.id}"> <span> 
      ${task.name} </span> </li>`
      
     }
}
};

renderTasks();


function handleClick (event) {
  

};

taskList.addEventListener("click", handleClick);

