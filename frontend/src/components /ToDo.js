import './ToDo.css'
import PropTypes from 'prop-types'

ToDo.propTypes = {
    todo: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
}

export default function ToDo({todo, onChange, onDelete}) {
  return (
    <div className="todo">
      <p className="todo__description">{todo.description}</p>
      {todo.status !== 'DONE' && (
        <button className="todo__button" onClick={onChange} value={todo.id}>
          NEXT
        </button>
      )}
      {todo.status === 'DONE' && (
        <button className="todo__button" onClick={() => onDelete(todo.id)} value={todo.id}>
          DELETE
        </button>
      )}
    </div>
  )
}
