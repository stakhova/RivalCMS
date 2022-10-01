import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Records from './Records';
import Pagination from '../pagination/Pagination';
import ViewTable from "../viewTable/ViewTable";
import ImgList from "../imgList/ImgList";




const lists = [
    {image: `photo.png` , link:'Oceanic_view.jpg', update: 'Updated 3 weeks ago'},
    {image: 'photo.png' , link:'Oceanic_view.jpg', update: 'Updated 3 weeks ago'},
    {image: 'photo.png' , link:'Oceanic_view.jpg', update: 'Updated 3 weeks ago'},
    {image: `photo.png` , link:'Oceanic_view.jpg', update: 'Updated 3 weeks ago'},
    {image: 'photo.png' , link:'Oceanic_view.jpg', update: 'Updated 3 weeks ago'},
    {image: 'photo.png' , link:'Oceanic_view.jpg', update: 'Updated 3 weeks ago'},
];

const Pg = () => {

    // To hold the actual data
    // const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);


    // useEffect(() => {
    //     axios.get('MOCK_DATA.json')
    //         .then(res => {
    //             setData(res.data);
    //             setLoading(false);
    //         })
    //         .catch(() => {
    //             alert('There was an error while retrieving the data')
    //         })
    // }, [])

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = lists.slice(indexOfFirstRecord, indexOfLastRecord);
    const nPages = Math.ceil(lists.length / recordsPerPage)

    return (
        <div className='container mt-5'>
            <h2> Simple Pagination Example in React </h2>
            <Records lists={currentRecords}/>

            {/*<table className="table">*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th scope='col'>ID</th>*/}
            {/*        <th scope='col'>First Name</th>*/}
            {/*        <th scope='col'>Last Name</th>*/}
            {/*        <th scope='col'>City</th>*/}

            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    {data.map(item => (*/}
            {/*        <tr>*/}
            {/*            <td>{item.namePage} </td>*/}
            {/*            <td>{item.updatePage} </td>*/}
            {/*            <td>{item.authorPage} </td>*/}
            {/*            <td>{item.userPage} </td>*/}
            {/*        </tr>*/}
            {/*    ))}*/}
            {/*    </tbody>*/}
            {/*</table>*/}


            <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default Pg;