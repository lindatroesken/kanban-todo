import styled from "styled-components/macro";
import Navigation from "./Navigation";

export default function Header(props) {
  return (
    <Wrapper>
      <h1>{props.title}</h1>
        <Navigation/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr min-content;
  font-weight: bold;
  color: rgb(255, 3, 129);
  height: 100%;
  background-color: #bdd8fb;
  align-content: center;
  padding: 5px;
  h1 {
    margin: 0;
    padding: 0;
  }
  `

