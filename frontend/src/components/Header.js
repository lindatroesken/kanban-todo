import styled from "styled-components/macro";
import Navigation from "./Navigation";

export default function Header(props) {
  return (
    <Wrapper>
      <p>{props.title}</p>
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
  align-self: center;
  `

