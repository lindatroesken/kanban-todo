import styled from "styled-components/macro";
import EditForm from "../components/EditForm";
import {useParams} from "react-router-dom";
import {getToDoById} from "../services/RequestServices";
import {useEffect, useState} from "react";

export default function EditPage({onUpdate}){
    const {id} = useParams()
    const [todo, setTodo] = useState()
    useEffect(() => {getToDoById(id).then(setTodo).catch(err => console.error(err))}, [id])

    return (
        <Wrapper>
            {todo ? (<EditForm todo={todo} onUpdate={onUpdate}/>) : (<p>loading...</p>)}
        </Wrapper>
    )

}

const Wrapper = styled.section`
    display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  align-items: center;
`