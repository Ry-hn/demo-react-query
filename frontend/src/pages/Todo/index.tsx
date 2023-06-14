import { TodoUsecase } from "../../domain/usecase/TodoUsecase";
import { TodoAxios } from "../../infra/TodoAxios";
// import { TodoFetch } from "../../infra/TodoFetch";
import Component from "./component";
import useViewModel from "./vm";

const TodoPages = () => {
    const vm = useViewModel(new TodoUsecase(new TodoAxios()));

    return <Component {...vm} />;
};

export default TodoPages;
