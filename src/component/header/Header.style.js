import styled from "styled-components";

const HeaderWrap = styled.header`
    max-width: 100%;
    margin: 0 auto;
    background-color: #2D3748;
    //padding: 0 4rem;
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8rem;
    color: white;
    font-size: 2rem;
    padding: 0 4.5rem 0 5.5rem;
      @media (max-width: 666px) {
        padding: 0 2rem;
      }
`;
const HeaderLogoWrap = styled.div `
    align-items: center;
    display: flex;
`
const LogoText = styled.span`
    span{
      color: #63B3ED;
    }
`
const HeaderButton = styled.button`
    align-items: center;
    color: white;
    background-color: transparent;
    border: 0.2rem solid white;
    border-radius: 0.5rem ;
    padding: 0.8rem 2.4rem;
    font-size: 2rem;
      @media (max-width: 666px) {
        font-size: 1.4rem;
      }
`;

export { HeaderWrap, HeaderContainer, HeaderButton, HeaderLogoWrap,LogoText};
