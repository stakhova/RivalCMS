import {RInput, RLabel} from "./RadioInputStyle";

const RadioInput = ({ name, label, value, isChecked, handleChange }) => {
    const handleRadioChange = e => {
        const { id } = e.currentTarget;
        handleChange(id);
    };

    return (
        <>
            <RInput
                type="radio"
                className="custom-radio"
                name={name}
                id={value}
                checked={isChecked}
                onChange={handleRadioChange}
            />
            <RLabel htmlFor={value}>
                {label}
            </RLabel>
        </>
    );
};
export default RadioInput