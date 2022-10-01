import styled from "styled-components";

const ViewTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  @media (max-width: 768px) {
    justify-content: center;
  }
    &:after{
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 0.1rem;
      width: 100%;
      background-color: #E2E8F0;
    }
    
`;

const ViewTitleText = styled.span`
    color: #2C5282;
    font-size: 1.6rem;
    font-weight: 700;
      @media (max-width: 768px) {
        display: none;
      }
`;

const ViewListWrap = styled.div`
    min-height: 100vh;
`
export {
    ViewTitleText,
    ViewTitle,
    ViewListWrap
};
