import {useState} from "react";

import RadioInput from "../radioInput/RadioInput"
import {ImageFilterWrap,ImageSearchInput,ImageSearchWrap,ImageFilterRadio} from "./ImageFilter.style";
import SearchSvg from "../../icon/SearchSvg";


const ImageFilter = () => {
    const [selectedInput, setSelectedInput] = useState("1");

    const handleChange = inputValue => {
        setSelectedInput(inputValue);
    };
    const radios = [
        {id:'1', label: 'Images'},
        {id:'2', label: 'Files'},
        {id:'3', label: 'Audio'},
        {id:'4', label: 'Video'},
    ];
    return (
        <>
            <ImageFilterWrap>
                <ImageSearchWrap >
                    <SearchSvg/>
                    <ImageSearchInput placeholder='Search for file'/>
                </ImageSearchWrap>
                <ImageFilterRadio>
                    <span>Filter</span>
                    {radios.map((radio, id) => {
                        return (
                            <RadioInput name={'option'} value={radio.id} label={radio.label} isChecked={selectedInput===radio.id}  handleChange={handleChange} ></RadioInput>
                        );
                    })}
                </ImageFilterRadio>
            </ImageFilterWrap>
        </>
    );
};
export default ImageFilter;