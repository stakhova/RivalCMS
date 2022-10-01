import Upload from "../../component/upload/Upload";
import {FormButton} from "../loginPage/LoginPage.style";
import ImgList from "../../component/imgList/ImgList";
import {UploadButton,UploadImageWrap} from "../viewImg/ViewImg.style";


const UploadImage = () => {
    return (
        <>
            <Upload text={'Drag & drop multiple files to upload'} button={<UploadButton>click to upload</UploadButton>}>
            </Upload>
            <ImgList/>
    </>
    );
};

export default UploadImage;

