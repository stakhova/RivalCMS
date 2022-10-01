import styled from "styled-components";

const Switch = styled.div`
  `

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  background: #9AE6B4;
  width: 13.2rem;
  height: 3.2rem;
  border-radius: 5rem;
  position: relative;
  cursor: pointer;
`
const SwitchInput = styled.input`
    width: 0;
    height: 0;
    display: block;
  &:checked ~ label{
    background: #ED64A6;
  }
  `
const SwitchLabelText = styled.span`
    color: white;
    margin: 0 auto;
  `

  //.switch-button {
  //  background-color: white;
  //  width: 45px;
  //  height: 45px;
  //  border-radius: 9px;
  //  position: absolute;
  //  transition: 0.2s;
  //  left: 2px;
  //}

  //.switch-checkbox:checked + .switch-label .switch-button {
  //  left: calc(100% - 2px);
  //  transform: translateX(-100%);
  //}

  //.switch-checkbox {

  //}





export {Switch, SwitchLabel,SwitchInput,SwitchLabelText};