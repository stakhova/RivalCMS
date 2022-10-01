
import React from 'react'

const ViewElem = ({data}) => {

    return (
        <table className="table">
            <thead>
            <tr>
                <th scope='col'>ID</th>
                <th scope='col'>First Name</th>
                <th scope='col'>Last Name</th>
                <th scope='col'>City</th>

            </tr>
            </thead>
            <tbody>
            {data.map(item => (
                <tr>
                    <td>{item.namePage} </td>
                    <td>{item.updatePage} </td>
                    <td>{item.authorPage} </td>
                    <td>{item.userPage} </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default ViewElem




























// import {ViewWrap, ViewPage, ViewText, ViewEdit} from "./ViewElem.style";
// import React, {useState} from 'react';
// import CustomSwitch from "../customSwitch/CustomSwitch";
// import EditttSvg from "../../icon/EditttSvg";
// import Modal from "../modal/Modal";
//
// const ViewElem = ({ isChecked, handleSwitch,  namePage,updatePage,authorPage,userPage}) => {
//     const onColor = 'rgba(237, 100, 166, 1)'
//     const offColor = 'rgba(154, 230, 180, 1)'
//     const [checked, setChecked] = useState(false);
//     const openModal = () => {
//         setShowModal((prev) => !prev);
//     };
//     const [showModal, setShowModal] = useState(false);
//     return (
//         <>
//             <ViewWrap>
//                 <ViewText bold>{namePage}</ViewText>
//                 <ViewText >{updatePage}</ViewText>
//                 <CustomSwitch
//                     onColor={onColor}
//                     offColor={offColor}
//                     isChecked={checked}
//                     handleSwitch={() => setChecked(!checked)}
//                 />
//                 <ViewText >{authorPage}</ViewText>
//                 <ViewText  user>{userPage}</ViewText>
//                 <ViewEdit showModal={showModal}
//                           setShowModal={setShowModal} onClick={openModal}><EditttSvg/></ViewEdit>
//                 <Modal
//                     showModal={showModal}
//                     setShowModal={setShowModal}
//                 />
//             </ViewWrap>
//         </>
//
//     );
// };
//
//
//
//
// export default ViewElem;