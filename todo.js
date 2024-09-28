let todoList = [
  {
    item: 'Buy Milk',
    dueDate: '2024-09-22'
  },
  {
    item: 'Go To College',
    dueDate: '2024-09-22'
  }
];

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');

  let todoItem = inputElement.value.trim();
  let todoDate = dateElement.value;

  if (todoItem === '') {
    alert('Please enter a task.');
    return;
  }

  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = '';
  dateElement.value = '';

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('#todo-container');
  let newHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];
    newHtml += `
      <div class="todo-item">
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="deleteTodo(${i})">Delete</button>
      </div>
    `;
  }

  containerElement.innerHTML = newHtml;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayItems();
}

displayItems();
