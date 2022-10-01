import styled from "styled-components";


const FormWrapper = styled.div`
    margin-bottom: 10rem;
     div{
        width: 100%;
    }
    form {
        max-width: 51.2rem;
        position: relative;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2.5rem 4rem;
        width: 100%;
        background-color: white;
    }
    input {
        width: 100%;
        border-radius: 0.5rem;
        background-color: #EDF2F7;
        height: 7rem;
        font-size: 1.8rem;
        font-family: inherit;
        line-height: 1.27;
        border: none;
        padding: 1rem ;
        margin-bottom: 2rem ;
      @media (max-width: 768px) {
        height: 6rem;
      }
      @media (max-width: 666px) {
        height: 5rem;
      }
    }
`;

const InputLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    margin-bottom: 2rem ;
    width: 100%;
  
`;
const InputLabelText = styled.span`
    font-size: 2rem;
    margin-left: 1rem;
  
`;

const InputWrapper = styled.div`
`;

const FormButton = styled.button`
    font-size: ${(props) => (props.add ? `1.6rem`: ` 2rem`)} ; 
    font-family: inherit;
    line-height: 2.23rem;
    //margin-bottom: 2rem;
    padding: 1.8rem 0rem;
    border-radius: 0.5rem;
    transition: box-shadow 0.2s ease-out;
    border:${(props) => (props.white ? `2px solid #2A4365`: ` none`)} ;
    width:${(props) => (props.white ? `100%`:(props.add ? `13.5rem`:` 20rem`) )} ;
    background-color:${(props) => (props.white ? `transparent`: ` #2A4365`)} ;
    color:${(props) => (props.white ? `#2A4365`: ` #fff`)} ;
      @media (max-width: 768px) {
        padding: 1.6rem 0rem;
      }
      @media (max-width: 666px) {
        margin-top: 0;
        padding: 1.4rem 0rem;
      }
 
   
`;


const FormText = styled.span`
  color: #3182CE;
  font-size: 2rem;
  @media (max-width: 666px) {
    margin-top:2rem;
    //padding: 1.4rem 0rem;
    //flex-direction: column;
  }
  
`
const FormButtonBlock = styled.div`
  display: flex;
  justify-content:${(props) => (props.rightBtn ? `flex-end`: ` space-between`)} ;
  align-items: baseline;
  margin: 2rem 0;
  @media (max-width: 666px) {
    margin-top: 0;
    padding: 1.4rem 0rem;
    flex-direction: column-reverse;
    align-items: center;
  }
  
`

export {
    FormWrapper,
    InputWrapper,
    FormButton,
    InputLabel,
    InputLabelText,
    FormButtonBlock,
    FormText
};
