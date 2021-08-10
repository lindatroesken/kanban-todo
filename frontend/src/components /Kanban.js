import StatusColumn from './StatusColumn'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Kanban.propTypes = {
    toDos: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default function Kanban({toDos, onDelete, onChange}) {
  return (
    <BoardStyle>
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
    </BoardStyle>
  )
}

const BoardStyle = styled.section`
  /*display: grid;*/
  /*grid-template-columns: 1fr 1fr 1fr;*/
  /*grid-template-rows: 1fr;*/
  /*justify-self: center;*/
  grid-gap: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: scroll;
  /*overflow: hidden;*/
  box-sizing: border-box;
  /*border: solid gray;*/
    `