document.getElementById('formTask').addEventListener('submit', saveTask );

function saveTask(e){
let title = document.getElementById('title').value;
let description = document.getElementById('description').value;

let task = {
    title: title,
    description : description
};


if(localStorage.getItem('tareas') === null){
    let tareas = [];
    tareas.push(task);
    localStorage.setItem('tareas',JSON.stringify(tareas) )
}else{
  
    let tareas = JSON.parse(localStorage.getItem('tareas')) 
    tareas.push(task);
    localStorage.setItem('tareas',JSON.stringify(tareas) )
    
}

getTask();
document.getElementById('formTask').reset();
e.preventDefault();

}

function getTask(){
   let tareas =  JSON.parse(localStorage.getItem('tareas'));
   
   let taskView = document.getElementById('task');
   
   taskView.innerHTML = '';

   for(let i = 0 ;  i< tareas.length; i++){
    

    let title = tareas[i].title;
    let description = tareas[i].description
   
    taskView.innerHTML += `<div class="card mb-3">  
    <div class="card-body">
      <p>${title} <br>  ${description}<br> 
      <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">
      Delete</a>
      </p>
    </div>
  </div>`;

   }

}


function deleteTask(title){
    let tareas= JSON.parse(localStorage.getItem('tareas')) ;
    for(let i = 0 ;  i< tareas.length; i++){
        if (tareas[i].title == title){
            tareas.splice(i,1);
        }
    }

localStorage.setItem('tareas', JSON.stringify(tareas));
getTask();
}

getTask();