import ToDo from './ToDo'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import {statusToTitle} from "../services/todo-services";

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
    <Wrapper>
      <ColumnTitle>{statusToTitle(status)} ({filteredToDos.length})</ColumnTitle>
      <ColumnStyle>
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
      </ColumnStyle>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  max-height: 95%;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  max-width: 300px;
  min-width: 300px;
  overflow: hidden;
  border: solid rgba(0, 0, 139, 0.27);
  background-color: white;
  text-align: center;
  margin: 10px;
  border-radius: 15px;
  word-wrap: break-word;    
`
const ColumnTitle = styled.p`
       text-shadow: #632b63 2px 1px 3px;
       overflow: hidden;
  `

const ColumnStyle = styled.section` 
    overflow-y: scroll;
    scrollbar-track-color: limegreen;
`
