import React from 'react'
import {ImgPicture, ImgText} from "./ImgTable.style";
import EditttSvg from "../../icon/EditttSvg";
import {ViewEdit, ViewTab} from "../viewTable/ViewTable.style";
const ImgTable = ({lists}) => {

    return (
        <ViewTab>
            <tbody>
            {lists.map(list => (
                <tr>
                    <td image><ImgPicture><img src={list.image} alt=""/></ImgPicture></td>
                    <td image><ImgText bold>{list.link}</ImgText> </td>
                    <td image><ImgText>{list.update}</ImgText></td>
                    <td image><ViewEdit><EditttSvg/></ViewEdit> </td>
                </tr>
            ))}
            </tbody>
        </ViewTab>
    )
}

export default ImgTable