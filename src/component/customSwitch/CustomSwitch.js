import React, {useState} from 'react'
import {Switch,SwitchInput,SwitchLabel,SwitchLabelText} from "./CustomSwitch.style";


const CustomSwitch = ({  idCheck }) => {
    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () =>  {
        setIsToggled(!isToggled)
    }
    return (
        <Switch>
            <SwitchInput
                id={idCheck}
                checked={isToggled}
                onChange={onToggle}
                type="checkbox"
            />
            <SwitchLabel
                htmlFor={idCheck}
            >
                <SwitchLabelText> Published </SwitchLabelText>
            </SwitchLabel>
        </Switch>
    )
}

export default CustomSwitch