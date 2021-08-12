import styled from "styled-components/macro";
import { useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getToDoById} from "../services/RequestServices";
import Details from "../components/Details";

export default function DetailsPage () {
    const {id} = useParams();
    const [todo, setTodo] = useState({})

    useEffect(() => {
        getToDoById(id).then(response => setTodo(response)).catch(err => console.error(err))
    }, [id])


    return (
        <Wrapper>
            <section/>
            <Details todo={todo} />
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
