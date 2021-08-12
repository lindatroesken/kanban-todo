import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import {Link} from "react-router-dom";

ToDo.propTypes = {
    todo: PropTypes.object.isRequired,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
}

export default function ToDo({todo, onChange, onDelete}) {
  return (
    <Wrapper>
        <DescriptionStyle>{todo.description}</DescriptionStyle>
        <BtnComp>
        <Link to={`/details/${todo.id}`}>Details</Link></BtnComp>
        <BtnComp>
        <Link to={`/edit/${todo.id}`}>Edit</Link></BtnComp>
      {todo.status !== 'DONE' && (
        <BtnComp next onClick={onChange} value={todo.id}>
          NEXT
        </BtnComp>
      )}
      {todo.status === 'DONE' && (
        <BtnComp del onClick={() => onDelete(todo.id)} value={todo.id}>
          DELETE
        </BtnComp>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border: solid purple;
  border-radius: 8px;
  background-color: rgba(255, 105, 180, 0.68);
  margin: 3px;
  padding: 2px;
`
const DescriptionStyle = styled.p`
  margin: 5px;
`
const BtnComp = styled.button`
  font-size: x-small;
  color: white;
  background-color: rgba(247, 200, 222, 0.76);
  border-color: rebeccapurple;
  padding: 5px;
  margin: 2px;
  border-radius: 3px;
  justify-self: flex-end;
  text-decoration: none;
  ${props => (props.next ? 'color: green; border-color: green;' : '')}
  ${props => (props.del ? 'color: red; border-color: red' : '')}
`

