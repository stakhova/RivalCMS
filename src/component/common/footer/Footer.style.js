import styled from "styled-components";


const FooterWrap = styled.ul`
    margin-top: 45rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4.8rem 2rem;
    background-color: #2A4365;
      span{
            color: #FFFCFE;
            margin: 0 5px;
      }
      li{
        margin: 0;
      }
  @media (max-width: 1024px) {
    margin: 0;
    flex-direction: column;
    padding: 2rem;
    li{
      margin: 1rem;
    }
    span{
      font-size: 1.4rem;
    }
   
  }
  @media (max-width: 768px) {
    li{
      margin: 0.5rem;
    }
    

  }


`

export { FooterWrap};