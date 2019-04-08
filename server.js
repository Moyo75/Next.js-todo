const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const todos = [
  { id: 1, text: "delectus aut autem" },
  { id: 2, text: "quis ut nam facilis et officia qui" },
  { id: 3, text: "fugiat veniam minus" }
];
app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/todos", (req, res) => {
      res.status(200).send({
        message: "Successfully retrieved todos",
        todos: todos
      });
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
