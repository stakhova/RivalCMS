import styled from "styled-components";


const ImgWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #F7FAFC;
    padding: 2rem 5.3rem 2rem 3.6rem;
    margin: 0.9rem 0 ;
      @media (max-width: 1024px) {
        flex-direction: column;
      }
`;
const ImgText = styled.span`
  font-size: 1.8rem;
  font-weight:${(props) => (props.bold ? 700 : 400)};
`;
const ImgPicture = styled.div`
  width: 7.8rem;
  height: 5.3rem;
    img{
      object-fit: cover ;
    }
`;


export {ImgWrap, ImgText,ImgPicture}