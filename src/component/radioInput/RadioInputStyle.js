import styled from "styled-components";

const RLabel = styled.label`
    border: 0.1rem solid #2C5282;
    border-radius: 5rem;
    padding: 0.4rem 1.4rem;
    margin-left: 2.1rem;
      @media (max-width: 666px) {
        margin-left: 1rem;
        padding: 0.4rem ;
        font-size: 1.4rem;
      }
`;

const RInput = styled.input`
  display: none;
    &:checked + label {
      color: white;
      background-color: #2C5282;
    }
    
`;
export {
    RInput,
    RLabel,
};
