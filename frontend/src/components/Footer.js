import styled from "styled-components/macro";

export default function Footer(){
    return (
        <Wrapper>Freitagsaufgabe Gruppe 3 (Alexander, Guillermo, Linda, Robert), Stand: {document.lastModified.to}</Wrapper>
    )
}
const Wrapper = styled.p`
  background-color: #bdd8fb;
  height: 100%;
  padding: 10px 0px;
  align-content: center;
  justify-self: stretch;
  text-align: center;
`