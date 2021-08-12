import {NavLink} from "react-router-dom";
import styled from "styled-components/macro";

export default function Navigation(){
    return (
        <NavigationButton>
            <BtnNav><NavLink exact to="/">Kanban</NavLink></BtnNav>
            <BtnNav><NavLink to="/board/todo">TODO</NavLink></BtnNav>
            <BtnNav><NavLink to="/board/doing">DOING</NavLink></BtnNav>
            <BtnNav><NavLink to="/board/done">DONE</NavLink></BtnNav>
        </NavigationButton>
    )
}

const NavigationButton = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 5px;
    `

const BtnNav = styled.nav`
  

  a {
    box-shadow: black 2px 2px 3px;  
    border-radius: 5px;    
    background-color: white;
    padding: 2px 5px;
    text-decoration: none;
    color: hotpink;
    margin: 2px;
  }
  
  :hover {
    box-shadow: 2px 2px 4px white;
  }

  a.active {
    background-color: hotpink;
    color: white;
  }

`