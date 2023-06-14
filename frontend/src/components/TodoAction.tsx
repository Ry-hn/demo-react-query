import { TextField } from "@mui/material";
import { useState, FC } from "react";

const TodoAction: FC<{
    handleSubmitTodo: (value: string) => Promise<void>;
}> = ({ handleSubmitTodo }) => {
    const [inputState, setInputState] = useState("");
    return (
        <form
            style={{
                width: "100%",
                maxWidth: 800,
                background: "#fff",
                borderRadius: 16,
                margin: "auto",
            }}
            onSubmit={async (e: any) => {
                e.preventDefault();
                await handleSubmitTodo(inputState);
                setInputState("");
            }}
        >
            <TextField
                fullWidth
                variant="filled"
                value={inputState}
                onChange={(e) => setInputState(e.target.value)}
                InputProps={{ disableUnderline: true }}
            />
            <button type="submit" hidden />
        </form>
    );
};

export default TodoAction;
