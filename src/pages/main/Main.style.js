import styled from "styled-components";

const MainWrap = styled.div`
    color: #F7FAFC;
  
    text-align: center;
`;
const MainTitle = styled.h1`
    text-align: center;
    font-size:${(props) => (props.main ? `10rem`: `3rem`)} ;
    color:${(props) => (props.main ? `#F7FAFC`: ` #2A4365`)} ;
    margin:${(props) => (props.main ? ` 8.4rem 0 1.4rem; `: ` 9rem auto 5rem `)} ;
    font-weight:${(props) => (props.main ? ` 700 `: `400`)} ;
    span{
      color:${(props) => (props.main ? `#2D3748`: `#63B3ED`)} ;
    }
      @media (max-width: 768px) {
        margin:${(props) => (props.main ? ` 3rem 0 1.4rem; `: ` 5rem auto 3rem `)} ;
        font-size:${(props) => (props.main ? `7rem`: `3rem`)} ;
      }
`;
const MainDesc = styled.h2`
  font-size: 4rem;
  line-height: 4.3rem;
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    font-size: 3rem;
    margin: 0;
  }
  
`
const MainContainer = styled.div`
  width: 100%;
  @media (max-width: 1280px) {
    background-color: #63B3ED;
  }
`
const MainLink = styled.div`
`

const MainHeader = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 4rem;
  &>*{
    margin:  0 4rem ;
    font-size: 2rem;
  }
  @media (max-width: 666px) {
    justify-content: space-between;
    padding: 2rem;
    &>*{
      margin:  0 2rem ;
     font-size: 1.6rem;
  }

`
const MainButton = styled.button`
    border: 0.2rem solid #F7FAFC;
    background-color: transparent;
    border-radius: 0.5rem;
    padding: ${(props) => (props.sing ? `0.8rem 2rem` : `2.5rem `)};
    font-size: ${(props) => (props.sing ? `2rem` : `3rem`)};
    margin:${(props) => (props. sing ? ` 0 `: ` 0 auto 12.6rem `)} ;
    display: block;
    position: relative;
   
    &::after{
      content: ${(props) => (props. sing ? `""`: `" *no card needed" `)} ;
      font-size: 18px;
      position: absolute;
      top: 11.5rem;
      left:50%;
      transform: translateX(-50%);
      width: max-content;
    }
      @media (max-width: 1280px) {
        margin:${(props) => (props. sing ? ` 0 `: ` 3rem auto  `)} ;
        &::after{
          top: 8.5rem;
        }
      }
      @media (max-width: 768px) {
        font-size: 2rem;
        padding: ${(props) => (props.sing ? `0.8rem 2rem` : `1.8rem `)};
      }
`
const MainBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  @media (max-width: 1280px) {
    background-color: #2C5282;
    svg{
      display: none;
    }
  }
  
`
const MainImgWrap = styled.div`
  width: 100%;
  margin: 0 auto;
`
const MainImg = styled.div`
  max-width: 11.2rem;
  width: 100%;
  object-fit: cover;
`

const MainSvgWrap = styled.div`
      @media (max-width: 1280px) {
        svg{
          max-width: 90%;
          width: 100%;
          height: auto;
          margin: 2rem 0;
        }
      }

`
export {MainWrap,MainContainer,MainTitle,MainDesc,MainButton,MainLink,MainHeader,MainBack,MainImgWrap,MainImg,MainSvgWrap}