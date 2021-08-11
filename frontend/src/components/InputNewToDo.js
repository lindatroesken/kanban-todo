import styled from 'styled-components/macro'
export default function InputNewToDo(props) {
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="new ToDo"
        value={props.inputText}
        onChange={props.saveInput}
      />
      <Button onClick={props.onCreate}>create new todo</Button>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr  min-content;
  grid-template-rows: 1fr;
  grid-column-gap: 5px;
  font-size: large;
  /*border: solid gray;*/
  padding: 4px;
  /*background-color: #bdd8fb;*/
    `

const Input = styled.input`
    `

const Button = styled.button`
    min-width: 150px;
  background-color: white;
  `