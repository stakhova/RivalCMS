import styled from "styled-components";

const UploadInput = styled.input`
    display: none;
  
`;
const UploadImg = styled.img`
    width: 25rem;
    height: 100rem;
    
`;
const UploadLabel = styled.label`
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 26.6rem;
    border: 0.1rem solid #BEE3F8;
    background-color: #F7FAFC;
    font-size: 1.8rem;
    font-weight: 700;
    position: relative;
    text-align: center;
      @media (max-width: 768px) {
        height: 18rem;
      }
`;
const UploadLabelContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  flex-direction: column;
  color: #2A4365;
  font-weight: 700;
  font-size: 1.8rem;
  justify-content: center;
  align-items: center;

  
`

const UploadLabelBlock = styled.div`
  &:last-child{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`



export {UploadInput,UploadImg,UploadLabel,UploadLabelContent,UploadLabelBlock};
