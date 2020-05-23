export default class Todo {
  constructor(data) {
    this.id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.name || data.description


  }


  get Template() {
    if (this.completed == true) {
      return `
      <li class="my-2 text-slash"> 
        <input checked type="checkbox" id="" class="mr-2" onchange="app.todoController.toggleTodoStatus('${this.id}')">
        ${this.description} 
        <div class="text-right push-up">
        <i class="fa text-danger fa-trash action" onclick="app.todoController.removeTodo('${this.id}')" aria-hidden="true"></i>
        </div>
      </li>`
    }
    else {
      return `<li class="my-2"> 
      <div class="text-box-small">
      <input type="checkbox" id="" class="mr-2" onchange="app.todoController.toggleTodoStatus('${this.id}')">
      ${this.description}
      </div>
      <div class="text-right push-up">
      <i class="fa text-danger fa-trash action" onclick="app.todoController.removeTodo('${this.id}')" aria-hidden="true"></i>
      </div>
    </li>`
    }
  }
}
