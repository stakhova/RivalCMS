import styled from "styled-components";


const ViewWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F7FAFC;
    padding: 2rem 5.3rem 2rem 3.6rem;
    margin: 0.9rem 0 ;
      @media (max-width: 1280px) {
        flex-direction: column;
        justify-content: center;
        padding: 1rem ;
      }
`;
const ViewPage = styled.input`
  font-weight: 700;
  font-size: 1.8rem;
  border: none;
  background-color: transparent;
`;
const ViewText = styled.span`
  font-size:${(props) => (props.bold ? `1.8rem` : "1.4rem;")}; 
  padding: 0.5rem 1.6rem;
  background-color: ${(props) => (props.user ? `#2C5282` : "none")};
  // background-color: ${(props) => (props.bold ? `#2C5282` : "none")};
  border-radius:${(props) => (props.user ? "5rem" : 0)};
  font-weight:${(props) => (props.user||props.bold  ? 700 : 400)};
  color:${(props) => (props.user ? 'white' : '#2A4365')};
`
const ViewEdit = styled.button`
    background-color: transparent;
  border: none;
`



export {ViewWrap, ViewPage, ViewText,ViewEdit}