import styled from "styled-components";
// import { NavLink } from "react-router-dom";

const Nav = styled.nav`
    background-color: #E5E5E5;
    padding: 7rem;
      @media (max-width: 1280px) {
        padding: 1rem;
      }
`;
const NavTitle = styled.div`
  color: #4299E1;
  font-weight: 500;
  font-size: 1.8rem;
  @media (max-width: 666px) {
    display: block;
    text-align: center;
  }
`;

const NavList = styled.ul`
      @media (max-width: 666px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
      }
  
`;

export { Nav,NavTitle,NavList};
