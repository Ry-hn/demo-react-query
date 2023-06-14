import { useQuery, useMutation } from "@tanstack/react-query";
import { TodoUsecase } from "../../domain/usecase/TodoUsecase";
import { Todo } from "../../domain/models/Todo";

const useViewModel = (useCase: TodoUsecase) => {
    const { data, isLoading, refetch } = useQuery(
        ["todo"],
        () => useCase.getTodo(),
        {
            // refetchInterval: 500,
        }
    );

    const { mutateAsync: addTodo } = useMutation(
        ["todo-add"],
        (todo: Pick<Todo, "title" | "priority">) => useCase.addTodo(todo),
        {
            onSuccess: () => {
                refetch();
            },
        }
    );

    const handleAddTodo = async (value: any) => {
        await addTodo({
            title: value,
            priority:
                Math.floor(Math.random() * 10) % 2 === 0 ? "top" : "top-not",
        });
    };

    return { data, isLoading, handleAddTodo };
};

export type ViewModel = ReturnType<typeof useViewModel>;

export default useViewModel;
