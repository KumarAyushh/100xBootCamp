// start creating server here
// 


//above written is my code and below is the code by claude AI still all the test cases are not passed but its fine
//the purpose of knowing how to create a server and handle routes is achieved
import express from "express";

const app = express();
app.use(express.json());

const todos = [];

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.post("/todo", (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: "Title and description are required" });
    }
    const todo = { id: todos.length + 1, title, description };
    todos.push(todo);
    return res.status(200).json(todos);  // plain array, no wrapper
});

app.get("/todos", (req, res) => {
    return res.status(200).json(todos);  // always 200, even if empty
});

app.get("/todo", (req, res) => {
    const id = Number(req.query.id);
    if (!req.query.id || isNaN(id)) {
        return res.status(404).json({ error: "Todo not found" });
    }
    const todo = todos.find(t => t.id === id);
    if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
    }
    return res.status(200).json(todo);  // plain object, no wrapper
});

app.delete("/todo", (req, res) => {
    const id = Number(req.query.id);
    if (!req.query.id || isNaN(id)) {
        return res.status(404).json({ error: "Invalid ID format" });
    }
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Todo not found" });
    }
    todos.splice(index, 1);
    return res.status(200).json({ success: true });
});

app.listen(3000, () => console.log("Server running on port 3000"));