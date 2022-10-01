import React from 'react'
import {Switch,SwitchInput,SwitchLabel,SwitchLabelText} from "./CustomSwitch.style";


const CustomSwitch = ({ isToggled, onToggle, idCheck }) => {
    return (
        <Switch>
            <SwitchInput
                id={idCheck}
                // checked={isChecked}
                // onChange={handleSwitch}
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