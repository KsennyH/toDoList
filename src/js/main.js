const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
const tasksList = document.querySelector('.tasks');
const taskHeaderWrapper = document.querySelector('.todo__tasks');

let toDoList = [];

if(localStorage.getItem('tasks')) {
    toDoList = JSON.parse(localStorage.getItem('tasks'));
    toDoList.forEach((el) => renderTaskItem(el))
}

checkEmptyList();

form.addEventListener('submit', addTask);

tasksList.addEventListener('click', removeTask);

tasksList.addEventListener('click', doneTask);

function addTask(e) {
    e.preventDefault();

    const textValue = input.value;

    const newTask = {
        id: Date.now(),
        text: textValue,
        status: false
    }

    toDoList.push(newTask);

    addElemToLocalStorage();

    renderTaskItem(newTask);

    input.value = '';
    input.focus();

    checkEmptyList();
    
}

function removeTask(e) {
    if(e.target.classList.contains("btn_delete")) {
        const parent = e.target.closest('.tasks__item');

        const taskId = Number(parent.id);

        const taskIndex = toDoList.findIndex((el) => el.id === taskId);

        toDoList.splice(taskIndex, 1);

        addElemToLocalStorage();

        parent.remove();

        checkEmptyList()
    }
}

function doneTask(e) {
    if(e.target.classList.contains("btn_done")) {
        const parent = e.target.closest('.tasks__item');

        const taskId = Number(parent.id);

        const taskElem = toDoList.find((el) => el.id === taskId);

        taskElem.status = !taskElem.status;

        addElemToLocalStorage();

        const taskText = parent.querySelector('.task__text');
        taskText.classList.toggle('task__text_done');
    }
}

function checkEmptyList() {
    if(toDoList.length === 0) {
        const taskHeader = `<div class="task-header">
                                <div class="task-header__wrapper"> 
                                    <p class="task-header__text">Задачи в списке отсутствуют</p>
                                    <img src="img/face.webp" alt="">
                                </div>
                            </div>`
        taskHeaderWrapper.insertAdjacentHTML('afterbegin', taskHeader);   
    } else {
        const taskHeader = document.querySelector('.task-header');
        taskHeader ? taskHeader.remove() : null;
    }
}

function addElemToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(toDoList));
}

function renderTaskItem(el) {
    const taskClass = el.status ? "task__text task__text_done" : "task__text";

    const taskTemplate = `<div id="${el.id}" class="tasks__item">
                            <div class="task"> 
                                <div class="task__wrapper"> 
                                    <p class="${taskClass}">${el.text}</p>
                                    <div class="task__buttons">
                                        <button class="task__btn btn btn_done" type="button"><img src="img/done.svg" alt=""></button>
                                        <button class="task__btn btn btn_delete" type="button"><img src="img/delete.svg" alt=""></button>
                                    </div>
                                </div>
                            </div>
                        </div>`

    tasksList.insertAdjacentHTML("beforeend", taskTemplate);
}

