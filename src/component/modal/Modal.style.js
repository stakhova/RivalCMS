import styled from "styled-components";

const ModalBackground = styled.div`
    background: rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    top: 0;
    left: 0;
    font-size: 1.6rem;
  
 
`;
const ModalWrap = styled.div`
    width: 22rem;
    padding: 2.5rem;
    box-sizing: border-box;
    position: relative;
    background: white;
    z-index: 3;
`;

const ModalTitle= styled.div`
    padding-bottom: 0.4rem;
    border-bottom: 0.1rem solid #E2E8F0;;
    font-size: 1.6rem;
    color: #3182CE;
`;



export {
    ModalWrap,
    ModalBackground,
    ModalTitle
};
