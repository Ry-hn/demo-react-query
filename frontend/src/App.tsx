import { Fragment } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TodoPages from "./pages/Todo";

const client = new QueryClient({
    defaultOptions: {
        queries: {},
    },
});

const App = () => {
    return (
        <Fragment>
            <QueryClientProvider client={client}>
                <TodoPages />
            </QueryClientProvider>
        </Fragment>
    );
};

export default App;
