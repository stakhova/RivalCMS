import styled from "styled-components";


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


export {ImgText,ImgPicture}