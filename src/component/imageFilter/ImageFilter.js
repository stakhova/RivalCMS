import {useState} from "react";
import Data from '../Data'
import RadioInput from "../radioInput/RadioInput"
import {ImageFilterWrap,ImageSearchInput,ImageSearchWrap,ImageFilterRadio} from "./ImageFilter.style";
import SearchSvg from "../../icon/SearchSvg";


const ImageFilter = ({ filterItem, setItem, menuItems }) => {
    // const [selectedInput, setSelectedInput] = useState("1");
    //
    // const handleChange = inputValue => {
    //     setSelectedInput(inputValue);
    // };
    // const radios = [
    //     {id:'1', label: 'Images'},
    //     {id:'2', label: 'Files'},
    //     {id:'3', label: 'Audio'},
    //     {id:'4', label: 'Video'},
    // ];
    return (
        <>
            <div>
                {menuItems.map((Val, id) => {
                    return (
                        <button
                            className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
                            onClick={() => filterItem(Val)}
                            key={id}
                        >
                            {Val}
                        </button>
                    );
                })}
                <button
                    className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
                    onClick={() => setItem(Data)}
                >
                    All
                </button>
            </div>
        </>
    );
};
export default ImageFilter;