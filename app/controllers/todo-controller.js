import TodoService from "../services/todo-service.js";
import store from "../store.js";

// Draw Todos on the list
function _drawTodos() {
  let todos = store.State.todos
  let template = ''
  todos.forEach(t => template += t.Template)
  document.getElementById('todos').innerHTML = template
  let totalTodos = todos.filter(t => t.completed != true)
  if (todos.length > 1 || totalTodos.length == 0) {
    document.getElementById('todoTotal').innerText = `${totalTodos.length}` + ' things left to do!'
  } else {
    document.getElementById('todoTotal').innerText = `${totalTodos.length}` + ' thing left to do!'
  }
}

export default class TodoController {
  constructor() {
    TodoService.getTodos();
    store.subscribe('todos', _drawTodos)
  }

  // Take in form data and push to Service 
  addTodo(event) {
    event.preventDefault();
    let form = event.target;
    let todo = {
      name: form.description.value
    };
    form.reset()
    TodoService.addTodoAsync(todo);
  }

  // Push id to service to toggle todo complete/incomplete
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  // push id to service to remove todo from list
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }

  // remove all checked todos
  removeCheckedTodos() {
    TodoService.removeCheckedTodos()
  }
}
