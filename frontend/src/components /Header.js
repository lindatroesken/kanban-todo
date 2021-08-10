import styled from "styled-components/macro";

export default function Header(props) {
  return (
    <Wrapper>
      <p>{props.title}</p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  text-align: center;
  font-size: 130%;
  font-weight: bold;
  color: rgb(255, 3, 129);
  height: 100%;
  `
