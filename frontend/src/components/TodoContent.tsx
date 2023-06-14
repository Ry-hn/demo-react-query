import { FC } from "react";
import { Box, CircularProgress } from "@mui/material";
import TodoItem from "./TodoItem";
import { Todo } from "../domain/models/Todo";

const TodoContent: FC<{ list: Todo[] | undefined; loading: boolean }> = (
    props
) => {
    return (
        <Box
            sx={{
                display: "grid",
                maxWidth: 800,
                gap: ".5rem",
                mx: "auto",
            }}
        >
            {props.loading ? (
                <CircularProgress
                    size={64}
                    sx={{
                        color: "purple",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        m: "auto",
                    }}
                />
            ) : (
                props.list?.map((item) => {
                    return <TodoItem key={item.id} {...item} />;
                })
            )}
        </Box>
    );
};

export default TodoContent;
