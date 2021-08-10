import styled from "styled-components/macro";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getToDoById} from "../services/RequestServices";

export default function DetailsPage () {
    const {id} = useParams();
    const [todo, setTodo] = useState({})

    useEffect(() => {
        getToDoById(id).then(response => setTodo(response)).catch(err => console.error(err))
    }, [id])


    return (
        <Wrapper>
            <h1>Details</h1>
            <p>ID: {id}</p>
            <p>Description: {todo.description}</p>
            <Link to="/">Home</Link>
        </Wrapper>
    )
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  //grid-template-rows: 1fr;
  align-self: start;
  padding: 15px;
  border: solid beige;
  background-color: cornflowerblue;
    
    `
