import styled from "styled-components/macro";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {getRequest, putUpdateRequest} from "../services/RequestServices";
export default function EditForm({todo, onUpdate}){

    const [description, setDescription] = useState(todo.description)
    const [status, setStatus] = useState(todo.status)
    const history = useHistory()


    const handleReset = () => {
        setDescription(todo.description)
        setStatus(todo.status)
    }

    const handleSave = (event) => {
        event.preventDefault()
        const changedTodo = {...todo, description, status}
        console.log(changedTodo)
        onUpdate(changedTodo)
        history.push("/")
    }

    return (
        <Wrapper onSubmit={handleSave}>
            <h1>Edit</h1>
            <label htmlFor="description">Description</label>
            <input type="text" id="description" value={description} onChange={event => setDescription(event.target.value)}/>
            <label htmlFor="status">Status</label>
            <select value={status} name="status" id="status" onChange={event => setStatus(event.target.value)}>
                <option value="OPEN">todo</option>
                <option value="IN_PROGRESS">doing</option>
                <option value="DONE">done</option>
            </select>
            <button type="button" onClick={handleReset}>Reset</button>
            <button type="submit">Save</button>
        </Wrapper>
    )
}

const Wrapper = styled.form`
    display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  place-self: center;
  
`