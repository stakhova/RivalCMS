import React, { useState, useEffect } from 'react'

import Pagination from "../../component/pagination/Pagination";
import ImgTable from "../../component/imgTable/ImgTable";
import ImageFilter from "../../component/imageFilter/ImageFilter";
import {UploadButton} from "./ViewImg.style";
import Upload from "../../component/upload/Upload";

import Data from "../../component/Data";


//
//
// const lists = [
//     {image: `photo.png` , link:'Oceanic_view.jpg', update: 'Updated 3 weeks ago'},
//     {image: 'photo.png' , link:'Oceanic_view.jpg', update: 'Updated 3 weeks ago'},
//     {image: 'photo.png' , link:'Oceanic_view.jpg', update: 'Updated 3 weeks ago'},
//     {image: `photo.png` , link:'Oceanic_view.jpg', update: 'Updated 3 weeks ago'},
//     {image: 'photo.png' , link:'Oceanic_view.jpg', update: 'Updated 3 weeks ago'},
//     {image: 'photo.png' , link:'Oceanic_view.jpg', update: 'Updated 3 weeks ago'},
// ];

const ViewImg = () => {
    const [item, setItem] = useState(Data);

    const menuItems = [...new Set(Data.map((Val) => Val.category))];

    const filterItem = (curcat) => {

        const newItem = Data.filter((newVal) => {
            return newVal.category === curcat;
        });
        setItem(newItem);
    };


    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(2);


    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = Data.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(Data.length / recordsPerPage)

    return (
        <>
            <Upload text={'Drag & drop multiple files to upload'} button={<UploadButton>click to upload</UploadButton>}></Upload>
            {/*<ImageFilter/>*/}
            <ImageFilter
                filterItem={filterItem}
                setItem={setItem}
                menuItems={menuItems}
            />
            <ImgTable item={item} />
            {/*<Pagination*/}
            {/*    nPages={nPages}*/}
            {/*    currentPage={currentPage}*/}
            {/*    setCurrentPage={setCurrentPage}*/}
            {/*/>*/}
        </>
    );
}

export default ViewImg;