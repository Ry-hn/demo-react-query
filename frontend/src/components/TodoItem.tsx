import { Todo } from "../domain/models/Todo";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

const TodoItem = (todo: Todo) => {
    return (
        <Card sx={{ position: "relative", opacity: todo.isDone ? ".6" : "1" }}>
            <CardActionArea>
                <CardContent
                    sx={{
                        "&:before": {
                            content: "' '",
                            position: "absolute",
                            background:
                                todo.priority === "top" ? "red" : "blue",
                            width: 12,
                            height: "100%",
                            borderRadius: 10,
                            left: 0,
                            top: -5,
                        },
                    }}
                >
                    <Typography
                        sx={{
                            textDecoration: todo.isDone
                                ? "line-through"
                                : "none",
                            fontWeight: 700,
                        }}
                    >
                        {todo.id} - {todo.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default TodoItem;
