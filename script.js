//selectors
const todoInput = document.getElementById('input');
const addButton = document.getElementById('addButton');
const todoList = document.querySelector('.todo-list');
const filter = document.querySelector('.filters');
const checkAll = document.querySelector('.check-all');
const taskLeft = document.querySelector('#counter');
var task = 0;

//event listeners
addButton.addEventListener('click',addTodo);
todoList.addEventListener('click',checkOrDelete);
filter.addEventListener('click',filterTodo);
checkAll.addEventListener('click',checkList);

//functions
function addTodo(event){

    event.preventDefault();

    if(todoInput.value==='')
        return;

    //create new list item on clicking add button
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');

    //check button
    const checkButton = document.createElement('button');
    checkButton.classList.add('check-button');
    checkButton.innerHTML = '<i class="far fa-check-square"></i>';
    listItem.appendChild(checkButton);

    //todo-text
    const todoText = document.createElement('div');
    todoText.classList.add('todo-text');
    todoText.innerText = todoInput.value;
    listItem.appendChild(todoText);
    
    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    listItem.appendChild(deleteButton);

    //Append the list item to the ul
    todoList.appendChild(listItem);

    //clear input value
    todoInput.value = '';

    task++;
    taskLeft.innerText = task;
}

function checkOrDelete(event){
    //Delete functionality
    if(event.target.classList[0]==='delete-button'){
        //maintain task count
        if(!event.target.parentElement.classList.contains('checked'))
            task--;

       event.target.parentElement.classList.add('disappear');
       setTimeout(function(){event.target.parentElement.remove();},900);
       
    }
    //Checkmark functionality
    if(event.target.classList[0]==='check-button'){
        //maintain task count
        if(!event.target.parentElement.classList.contains('checked'))
            task--;
        else
            task++;
        //add checked effect
        event.target.parentElement.classList.toggle('checked');
    }

    taskLeft.innerText = task;
}

function filterTodo(event){
    const todos = todoList.childNodes;
    todos.forEach(function(item){
        switch(event.target.value){
            case "all":
                item.style.display = 'flex';
                break;
            case "checked":
                if(item.classList.contains('checked')){
                    item.style.display = 'flex';
                }
                else{
                    item.style.display = 'none';
                }
                break;
            case "unchecked":
                if(item.classList.contains('checked')){
                    item.style.display = 'none';
                }
                else{
                    item.style.display = 'flex';
                }
                break;

        }
    }); 

}

function checkList(event){
    const todos = todoList.childNodes;
    todos.forEach(function(item){
            item.classList.add('checked');
    });
}
