import './StatusColumn.css'
import ToDo from './ToDo'
export default function StatusColumn(props) {
  const filteredToDos = props.toDos.filter(
    element => element.status === props.status
  )
  return (
    <div className="status">
      <p className="status__title">{props.status} ({filteredToDos.length})</p>
      <section className="status__cards">
        {filteredToDos.map(todo => {
          return (
            <ToDo
              key={todo.id}
              todo={todo}
              onChange={props.onChange}
              onDelete={props.onDelete}
            />
          )
        })}
      </section>
    </div>
  )
}
