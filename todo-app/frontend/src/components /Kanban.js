import './Kanban.css'
import StatusColumn from './StatusColumn'
export default function Kanban(props) {
  return (
    <div className="kanban">
      <StatusColumn
        status="OPEN"
        toDos={props.toDos}
        onChange={props.onChange}
        onDelete={props.onDelete}
      />
      <StatusColumn
        status="IN_PROGRESS"
        toDos={props.toDos}
        onChange={props.onChange}
        onDelete={props.onDelete}
      />
      <StatusColumn
        status="DONE"
        toDos={props.toDos}
        onChange={props.onChange}
        onDelete={props.onDelete}
      />
    </div>
  )
}
