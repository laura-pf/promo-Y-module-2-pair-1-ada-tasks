'use strict';

const taskList = document.querySelector(".js-taskList");


const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  { name: "Aprender cómo se realizan las peticiones al servidor en JavaScript", completed: false, id: 4,},
];

for(const task of tasks){
    // taskList.innerHTML += `
    //     <li>${task.name}</li>`;

    if (task.completed === true){
      taskList.innerHTML += `
      <li class="line-through">${task.name}</li>`

     } else {
      taskList.innerHTML += `
        <li>${task.name}</li>`
      
     }
};

