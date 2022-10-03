import styled from "styled-components";


const PagList = styled.ul`
    display: flex;
  justify-content: center;
   
`;
const PagItem = styled.li`
  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  background:#E2E8F0 ;
  color: #2C5282 ;
  margin: 0 0.4rem;
  &.active{
    background:#2C5282 ;
    color: #F7FAFC ;
  }
`
const PagLink = styled.a`
  display: flex ;
  width: 100%;
  height: 100%;
  font-size: 1.6rem;
  justify-content: center;
  align-items: center;
`
export {PagList, PagItem, PagLink}

