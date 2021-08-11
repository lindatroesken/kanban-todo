import InputNewToDo from "../components/InputNewToDo";
import Kanban from "../components/Kanban";
import styled from "styled-components/macro";


export default function HomePage({toDos, onChange, onDelete, onCreate, saveInput, inputText}) {
    return (
        <Wrapper>
            <InputNewToDo
                onCreate={onCreate}
                inputText={inputText}
                saveInput={saveInput}
            />
            <Kanban
                toDos={toDos}
                onChange={onChange}
                onDelete={onDelete}
            />
        </Wrapper>
    )
}

const Wrapper = styled.section`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  `