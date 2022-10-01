import styled from "styled-components";


const LinkElemText = styled.span`
    margin-left: 1.6rem;
    font-size: 1.8rem;
    line-height: 2.1rem;
    color: #2C5282;
    @media (max-width: 1024px) {
        font-size: 1.6rem;
      }
      @media (max-width: 1024px) {
        margin-left: 0.5rem;
      }
`;
const LinkElem = styled.li `
    display: flex;
    align-items: center;
    margin: 2.6rem 0;
      @media (max-width: 666px) {
        margin: 0.7rem;
        border: 0.1rem solid #2A4365;
        padding: 0.5rem;
        border-radius: 5rem;
      }
//&.active > div {
//    background-color: #4d57e6;
//    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
//}
`

const LinkElemIcon = styled.div`
`;

export { LinkElem, LinkElemText, LinkElemIcon };
