import { connection } from "../DB/config.js";
class TodoController {
  // thêm mới todo
  insertTodo(req, res) {
    const { name, status } = req.body;
    connection.query(
      `INSERT INTO todos (name, status) VALUES ('${name}', 'incomplete')`,
      (error, results, fields) => {
        if (error) throw error;
        console.log(`Inserted todo with name: ${name}`);
      }
    );
  }
  // get all todo
  getAllTodos(req, res) {
    connection.query(`select *  from todos`, function (err, result, fields) {
      if (err) throw err;
      console.log("Result: ", result);
      res.status(200).json(result);
      return result;
    });
  }
  //   update status todo
  updateTodos(req, res) {
    connection.query(
      `UPDATE todos
    SET status='complete'
    WHERE id=${req.params.id}`,
      function (err, result, fields) {
        if (err) throw err;
        console.log("Result: ", result);
        return result;
      }
    );
  }
  //   delete todo by id
  deleteTodo(req, res) {
    connection.query(
      `delete from todos
       WHERE id=${req.params.id}`,
      function (err, result, fields) {
        if (err) throw err;
        console.log("Result: ", result);
        return result;
      }
    );
  }
}
export default TodoController;
