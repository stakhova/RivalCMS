import {PlusCircleSvg} from "../../icon/PlusCircleSvg";
import Upload from "../../component/upload/Upload";
import {UploadFileWrap} from "./UploadFile.style";


const UploadFile = () => {

    return (
        <UploadFileWrap>
            <Upload icon={<PlusCircleSvg/>} text={'Add new section'}></Upload>
        </UploadFileWrap>
    );
};

export default UploadFile;
