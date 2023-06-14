import { Box } from "@mui/material";
import TodoHeader from "../../components/TodoHeader";
import TodoContent from "../../components/TodoContent";
import TodoAction from "../../components/TodoAction";
import { ViewModel } from "./vm";

const Component = (vm: ViewModel) => {
    return (
        <Box
            sx={{
                display: "grid",
                height: "100vh; height: 100svh",
                gridTemplateRows: "64px 1fr 64px",
                background: "#b79ced",
            }}
        >
            <TodoHeader />
            <Box overflow="auto" sx={{ p: "2rem" }}>
                <TodoContent list={vm.data?.data} loading={vm.isLoading} />
            </Box>
            <Box sx={{ pb: "1rem", px: ".3rem" }}>
                <TodoAction handleSubmitTodo={vm.handleAddTodo} />
            </Box>
        </Box>
    );
};

export default Component;
