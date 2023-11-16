import TodoController from "../controllers/todo.controller.js";

export function route(app) {
  const todoController = new TodoController();
// insert todo
  app.post("/todo", todoController.insertTodo);
// get all todos  
  app.get("/todo", todoController.getAllTodos);
//   update todo
  app.put("/todo/:id", todoController.updateTodos);
//   delete todo
  app.delete("/todo/:id", todoController.deleteTodo);
}
