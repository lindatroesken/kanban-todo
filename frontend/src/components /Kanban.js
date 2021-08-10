import './Kanban.css'
import StatusColumn from './StatusColumn'
import PropTypes from 'prop-types'

Kanban.propTypes = {
    toDos: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default function Kanban({toDos, onDelete, onChange}) {
  return (
    <div className="kanban">
      <StatusColumn
        status="OPEN"
        toDos={toDos}
        onChange={onChange}
        onDelete={onDelete}
      />
      <StatusColumn
        status="IN_PROGRESS"
        toDos={toDos}
        onChange={onChange}
        onDelete={onDelete}
      />
      <StatusColumn
        status="DONE"
        toDos={toDos}
        onChange={onChange}
        onDelete={onDelete}
      />
    </div>
  )
}
