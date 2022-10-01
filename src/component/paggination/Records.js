import React from 'react'
import {ImgPicture, ImgText} from "../imgTable/ImgTable.style";
import EditttSvg from "../../icon/EditttSvg";
import {ViewEdit} from "../viewElem/ViewElem.style";

const Records = ({lists}) => {

    return (
        <table className="table">
            <tbody>
            {lists.map(list => (
                <tr>
                    <td><ImgPicture><img src={list.image} alt=""/></ImgPicture></td>
                    <td><ImgText bold>{list.link}</ImgText> </td>
                    <td><ImgText>{list.update}</ImgText></td>
                    <td><ViewEdit><EditttSvg/></ViewEdit> </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default Records