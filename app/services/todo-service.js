import store from "../store.js";
import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/StevenPackard1/todos/",
  timeout: 8000
});

class TodoService {
  constructor() {
    this.getTodos()
  }
  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get('')
      .then(res => {
        let newTodo = res.data.data.map(nt => new Todo(nt))
        store.commit('todos', newTodo)
      })
    // let res = await todoApi.get('');
    // console.log(res.data.data)
    // store.commit('todos', new Todo(res.data.data));
    // console.log(store.State.todos);

  }

  async addTodoAsync(todo) {
    console.log(todo, "from the add");
    let res = await todoApi.post("", new Todo(todo));
    this.getTodos()
    console.log(res);

  }

  async toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo.id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    if (todo) {
      todo.completed = !todo.completed
    }
    let res = await todoApi.put(todoId, todo);
    console.log(res);
    this.getTodos()
    //TODO do you care about this data? or should you go get something else?
  }

  async removeTodoAsync(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
    let todo = store.State.todos.find(t => t.id == todoId)
    let res = await todoApi.delete(todo.id)
    this.getTodos()
  }
}

const todoService = new TodoService();
export default todoService;
