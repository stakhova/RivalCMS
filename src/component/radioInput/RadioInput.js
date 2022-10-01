import {RInput, RLabel} from "./RadioInputStyle";



const RadioInput = ({ name, label, value, isChecked, handleChange }) => {
    const handleRadioChange = e => {
        const { id } = e.currentTarget;
        handleChange(id); // Send back id to radio group for comparison
    };

    return (
        <>
            {/* Target this input: opacity 0 */}
            <RInput
                type="radio"
                className="custom-radio"
                name={name}
                id={value} // htlmlFor targets this id.
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