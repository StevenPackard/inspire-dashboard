export default class Todo {
  constructor(data) {
    this.id = data._id
    this.complete = false || data.completed
    this.user = data.user
    this.description = data.name || data.description

  }


  get Template() {
    if (this.complete) {
      return `<li class="my-2"> 
      <input checked type="checkbox" id="" class="mr-2" onclick="app.todoController.toggleTodoStatus('${this.id}')">
      ${this.description}
      <div class="text-right push-up">
      <i class="fa text-danger fa-trash action" onclick="app.todoController.removeTodo('${this.id}')" aria-hidden="true"></i>
      </div>
    </li>`
    }
    if (this.complete == false) {
      return `<li class="my-2"> 
      <input checked type="checkbox" id="" class="mr-2" onclick="app.todoController.toggleTodoStatus('${this.id}')">
      ${this.description}
      <div class="text-right push-up">
      <i class="fa text-danger fa-trash action" onclick="app.todoController.removeTodo('${this.id}')" aria-hidden="true"></i>
      </div>
    </li>`
    }
  }
}
