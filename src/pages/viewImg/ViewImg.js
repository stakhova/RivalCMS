import React, { useState, useEffect } from 'react'

import Pagination from "../../component/pagination/Pagination";
import ImgTable from "../../component/imgTable/ImgTable";
import ImageFilter from "../../component/imageFilter/ImageFilter";
import UploadImage from "../uploadImage/UploadImage";
import {UploadButton} from "./ViewImg.style";
import Upload from "../../component/upload/Upload";





const lists = [
    {image: `photo.png` , link:'Oceanic_view.jpg', update: 'Updated 3 weeks ago'},
    {image: 'photo.png' , link:'Oceanic_view.jpg', update: 'Updated 3 weeks ago'},
    {image: 'photo.png' , link:'Oceanic_view.jpg', update: 'Updated 3 weeks ago'},
    {image: `photo.png` , link:'Oceanic_view.jpg', update: 'Updated 3 weeks ago'},
    {image: 'photo.png' , link:'Oceanic_view.jpg', update: 'Updated 3 weeks ago'},
    {image: 'photo.png' , link:'Oceanic_view.jpg', update: 'Updated 3 weeks ago'},
];

const ViewImg = () => {

    // // To hold the actual data
    // // const [data, setData] = useState([])
    // const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);


    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = lists.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(lists.length / recordsPerPage)

    return (
        <>
            <Upload text={'Drag & drop multiple files to upload'} button={<UploadButton>click to upload</UploadButton>}></Upload>
            <ImageFilter/>
            <ImgTable lists={currentRecords}/>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>
    );
}

export default ViewImg;