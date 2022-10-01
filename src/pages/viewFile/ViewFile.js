import React, { useState, useEffect } from 'react'

import Pagination from "../../component/pagination/Pagination";
import ViewTable from "../../component/viewTable/ViewTable";






const lists = [
    { namePage: 'Home_page' , updatePage: 'Updated 5 weeks ago', authorPage:'Joe Bloggs',userPage:'Admin', id:'id1'},
    { namePage: 'About_page' , updatePage: 'Updated 3 weeks ago', authorPage:'Aoe Bloggs',userPage:'Admin',id:'id2'},
    { namePage: 'Home_page' , updatePage: 'Updated 2 weeks ago', authorPage:'Joe Bloggs',userPage:'Admin',id:'id3'},
    { namePage: 'About_page' , updatePage: 'Updated 1 weeks ago', authorPage:'Joe Bloggs',userPage:'Admin',id:'id4'},
    { namePage: 'Home_page' , updatePage: 'Updated 3 weeks ago', authorPage:'Boe Bloggs',userPage:'Admin',id:'id5'},
    { namePage: 'About_page' , updatePage: 'Updated 1 weeks ago', authorPage:'Joe Bloggs',userPage:'Admin',id:'id6'},
    { namePage: 'Home_page' , updatePage: 'Updated 3 weeks ago', authorPage:'Moe Bloggs',userPage:'Admin',id:'id7'},

];


const ViewFile = () => {

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
            {/*<Upload text={'Drag & drop multiple files to upload'} button={<UploadButton>click to upload</UploadButton>}></Upload>*/}
            {/*<ImageFilter/>*/}
            <ViewTable lists={currentRecords}/>
            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>
    );
}

export default ViewFile;