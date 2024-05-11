// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");


// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);

// Functions
function addTodo(event){
    // Prevent form from submitting
    event.preventDefault(); 

    // DESIRED STRUCTURE 
    /* <div class="todo">
        <li></li>
        <button>checked</button>
        <button>delete</button>
    </div> */

    // Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo)
    // Checkmark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // Attach the big div to the ul
    todoList.appendChild(todoDiv);

    // Clear TodoInput VALUE
    todoInput.value = "";
}

function deleteCheck(e){
    // different functionality for todoList elements
    const item = e.target;
    // DELETE TODO
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall")
        //todo.remove();
        todo.addEventListener('transitionend', function(){
            todo.remove();
        }
        );// waits for the animation to finish
    }

    // CHECK MARK
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        if (todo.nodeType == Node.ELEMENT_NODE) {
             switch(e.target.value) {
                case "all":
                    todo.style.display = "flex";
                    break;
                case "completed":
                    if (todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = "none";
                    }
                    break; // dont forget the break after each case!
                case "uncompleted":
                    if (todo.classList.contains('completed')){
                        todo.style.display = 'none';
                    }
                    else{
                        todo.style.display = "flex";
                    }
                    break;
            }
        }
    }) 
}