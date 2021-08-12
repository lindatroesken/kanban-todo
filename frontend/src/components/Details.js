import {Link} from "react-router-dom";
import styled from "styled-components/macro";

export default function Details ({todo}){
    return (
        <Wrapper>
        <h1>Description: {todo.description}</h1>
        <p>ID: {todo.id}</p>
        <Link to="/">Home</Link>
</Wrapper>
    )
}

const Wrapper = styled.section`
    `