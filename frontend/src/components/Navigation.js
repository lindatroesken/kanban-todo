import {NavLink} from "react-router-dom";
import styled from "styled-components/macro";

export default function Navigation(){
    return (
        <NavigationButton>
            <BtnNav><NavLink to="/">Kanban</NavLink></BtnNav>
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

const BtnNav = styled.button`
    margin: 5px;
    `