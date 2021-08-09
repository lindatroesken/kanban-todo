import './ToDo.css'
export default function ToDo(props) {
  return (
    <div className="todo">
      <p className="todo__description">{props.todo.description}</p>
      {props.todo.status !== 'DONE' && (
        <button className="todo__button" onClick={props.onChange} value={props.todo.id}>
          NEXT
        </button>
      )}
      {props.todo.status === 'DONE' && (
        <button className="todo__button" onClick={() => props.onDelete(props.todo.id)} value={props.todo.id}>
          DELETE
        </button>
      )}
    </div>
  )
}
