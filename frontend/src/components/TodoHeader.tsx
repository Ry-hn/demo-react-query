import { Box, Typography } from "@mui/material";

const TodoHeader = () => {
    return (
        <Box
            sx={{
                background: "#a640df",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography
                sx={{
                    fontSize: "calc(10px + 2vmin)",
                    fontWeight: 600,
                    color: "white",
                    p: ".3rem",
                }}
            >
                OUR TODO LIST
            </Typography>
        </Box>
    );
};
export default TodoHeader;
