import './StatusColumn.css'
import ToDo from './ToDo'
import PropTypes from 'prop-types'

StatusColumn.propTypes = {
    toDos: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default function StatusColumn({toDos, status, onChange, onDelete}) {
  const filteredToDos = toDos.filter(
    element => element.status === status
  )
  return (
    <div className="status">
      <p className="status__title">{status} ({filteredToDos.length})</p>
      <section className="status__cards">
        {filteredToDos.map(todo => {
          return (
            <ToDo
              key={todo.id}
              todo={todo}
              onChange={onChange}
              onDelete={onDelete}
            />
          )
        })}
      </section>
    </div>
  )
}
