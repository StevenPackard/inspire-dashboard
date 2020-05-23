import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let todos = store.State.todos
  console.log(todos, "from the draw function");
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
    //TODO Remember to register your subscribers
    TodoService.getTodos();
    store.subscribe('todos', _drawTodos)
  }

  addTodo(event) {
    event.preventDefault();
    let form = event.target;
    let todo = {
      name: form.description.value
    };
    form.reset()
    TodoService.addTodoAsync(todo);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
