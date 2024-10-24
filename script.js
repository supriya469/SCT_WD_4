function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    
    if (taskInput.value === '' || taskDate.value === '') {
        alert('Please fill out both fields');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    
    const taskInfo = document.createElement('div');
    taskInfo.classList.add('task-info');
    taskInfo.innerHTML = `<span>${taskInput.value}</span><small>Due: ${new Date(taskDate.value).toLocaleString()}</small>`;
    
    const taskActions = document.createElement('div');
    taskActions.classList.add('task-actions');
    
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = 'Complete';
    completeBtn.onclick = () => {
        li.classList.toggle('completed');
    };

    const editBtn = document.createElement('button');
    editBtn.innerHTML = 'Edit';
    editBtn.onclick = () => {
        editTask(li, taskInput, taskDate);
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.onclick = () => {
        taskList.removeChild(li);
    };

    taskActions.appendChild(completeBtn);
    taskActions.appendChild(editBtn);
    taskActions.appendChild(deleteBtn);
    
    li.appendChild(taskInfo);
    li.appendChild(taskActions);
    taskList.appendChild(li);
    
    taskInput.value = '';
    taskDate.value = '';
}

function editTask(taskItem, taskInput, taskDate) {
    const currentTaskText = taskItem.querySelector('.task-info span').innerText;
    const currentTaskDate = taskItem.querySelector('.task-info small').innerText.split('Due: ')[1];
    
    taskInput.value = currentTaskText;
    taskDate.value = new Date(currentTaskDate).toISOString().slice(0, 16);

    taskItem.remove();
}
