import styled from "styled-components";


const ImageFilterWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.2rem 0;
      @media (max-width: 1024px) {
        flex-direction: column;
      }
`;
const ImageSearchInput  = styled.input`
  border: none;
  border-bottom: 0.1rem solid #718096;
  padding: 1.5rem 4rem;
  &::placeholder {
    color: #718096;
    font-size: 1.6rem;
  }
  @media (max-width: 1024px) {
    margin: 3rem 0;
  }
`

const ImageSearchWrap  = styled.div`
  position: relative;
  svg{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
`
const ImageFilterRadio  = styled.div`
  font-size: 1.8rem;
  span{ 
   color: #90CDF4;
  }
`




export {ImageFilterWrap,ImageSearchInput,ImageSearchWrap,ImageFilterRadio}