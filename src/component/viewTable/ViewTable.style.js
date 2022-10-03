import styled from "styled-components";


const ViewTab = styled.table`
  width: 100%;
  border-spacing: 0;
  -webkit-border-vertical-spacing: 1rem;
    td{
      background-color: #F7FAFC;
      padding:${(props) => (props.image ? `1.5rem`: `3.5rem 0`)};
      margin: 1rem 0;
    }
  th{
    text-align: left;
    &:last-child{
      svg{
        position: absolute;
        top: 0.7rem;
        left: 1.1rem;
      }
    }
  }
  thead{
    position: relative;
    &:after{
      content: '';
      position: absolute;
      width: 100%;
      height: 0.1rem;
      background-color: #E2E8F0;
      bottom: 0rem;
      left: 0;
    }
    tr{
      height: 4rem;
      vertical-align: baseline;
    }
  }
  @media (max-width: 1024px) {

    tr{
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #F7FAFC;
      margin: 1rem 0;
    }
    thead tr{
      flex-direction: row;
      justify-content: space-between;
      background: transparent;
    }
    td{
      margin: 0;
      padding: 0.5rem 0;
    }
    -webkit-border-vertical-spacing: 0;
  }
  @media (max-width: 666px) {
    tr{
      padding-top: 6rem;
    }
    thead:after{
      bottom: -1rem;
    }
  }
 
`;
const AddButton = styled.button`
  color: #FFFCFE;
  position: absolute;
  right: 0;
  top: -1rem;
  padding: 1.2rem;
  border-radius: 0.5rem;
  width: 13.5rem;
  background-color: #2A4365;
  @media (max-width: 1024px) {
      position: relative;
      top: 0;
  }

  @media (max-width: 666px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%);  
  }
`

const ViewText = styled.span`
  font-size:${(props) => (props.bold ? `1.8rem` : "1.4rem;")};
  background-color: ${(props) => (props.user ? `#2C5282` : "none")};
  // background-color: ${(props) => (props.bold ? `#2C5282` : "none")};
  border-radius:${(props) => (props.user ? "5rem" : 0)};
  font-weight:${(props) => (props.user||props.bold  ? 700 : 400)};
  color:${(props) => (props.user ? 'white' : '#2A4365')};
  padding:${(props) => (props.user ? `0.5rem 1.6rem`: `0.5rem 0`)};
`
const ViewEdit = styled.button`
    background-color: transparent;
  border: none;
`
export {ViewTab, ViewText, ViewEdit, AddButton}

