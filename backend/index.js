import crypto from "node:crypto";
import express from "express";
import cors from "cors";

// type TodoItem = {
//     id: string;
//     title: string;
//     isDone: boolean;
//     priority: "top" | "top-not"
// }

let data = [
    {
        id: "42069",
        title: "My Todo Numba Wan",
        isDone: false,
        priority: "top",
    },
];

const PORT = 6969;

const server = express();

server.use([express.json(), cors()]);

server.use((req, res, next) => {
    console.log(`request: ${req.method} ${req.originalUrl}`);
    next();
});

const wait = () => new Promise((res) => setTimeout(res, 2000));

server.get("/todo", async (_, res) => {
    // await wait();
    return res.json({ data, size: data.length });
});

server.post("/todo/add", async (req, res) => {
    try {
        const todo = req.body;

        if (!todo?.title) {
            return res.status(400).message({ message: "title required" });
        }

        if (!todo?.priority) {
            return res.status(400).message({ message: "priority required" });
        }

        const tTodo = {
            id: crypto.randomUUID().slice(0, 4),
            title: todo.title,
            isDone: false,
            priority: todo.priority,
        };

        if (tTodo.priority !== "top") {
            data.push(tTodo);
        } else {
            data.unshift(tTodo);
        }

        return res.json({ message: "add todo sukses" });
    } catch (err) {
        let message = "Internal Server Error";
        if (err instanceof Error) {
            message = err.message;
        }
        return res.status(500).json({ message });
    }
});

server.put("/todo/update/:id", (req, res) => {
    const { id } = req.params;
    const todo = req.body;

    if (!id) return res.status(400).json({ message: "params not valid" });

    const tItem = data.find((item) => item.id === id);

    if (!tItem) return res.status(404).json({ message: "data not found" });

    try {
        for (const key of Object.keys(todo)) {
            tItem[key] = todo[key];
        }

        return res.json({ message: "Update Success" });
    } catch (err) {
        let message = "Internal Server Error";
        if (err instanceof Error) {
            message = err.message;
        }
        return res.status(500).json({ message });
    }
});

server.delete("/todo/delete/:id", (req, res) => {
    const { id } = req.params;

    if (!id) return res.status(400).json({ message: "params not valid" });

    const filteredData = data.filter((item) => item.id !== id);

    data = [...filteredData];

    return res.json({ message: "delete sukses" });
});

server.put("/todo/reoder", (req, res) => {});

server.listen(PORT, () => {
    console.log("listening at port: ", PORT);
});
