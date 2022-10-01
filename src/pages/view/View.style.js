import styled from "styled-components";

const ViewMain = styled.main`
    width: 100%;
    background-color: #FFFCFE;
    padding: 5rem 4rem;
      @media (max-width: 666px) {
        padding: 2rem 2rem;;
      }
`;

const ViewAside = styled.aside`
    width: 28%;
    @media (max-width: 768px) {
        width: 35%;
    }
      @media (max-width: 666px) {
        width: 100%;
      }

`;
const ViewWrap = styled.main`
    display: flex;
      @media (max-width: 666px) {
       flex-direction: column;
      }
` ;

export {
    ViewAside,
    ViewMain,
    ViewWrap
};
