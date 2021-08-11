import {useParams} from "react-router-dom";
import StatusColumn from "../components/StatusColumn";
import {slugToStatus} from "../services/todo-services";

export default function SingleStatusPage({todos, onChange, onDelete}){
    const {slugStatus} = useParams()
    const status = slugToStatus(slugStatus)
    if(todos.length===0){
        return (<p>no todos available</p>)
    }
    const filteredTodos = todos.filter(todo => todo.status === status)

    return (
        <section>
            <StatusColumn
                status={status}
                toDos={filteredTodos}
                onChange={onChange}
                onDelete={onDelete}
            />
        </section>
    )
}