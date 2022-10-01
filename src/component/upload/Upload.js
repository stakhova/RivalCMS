import React, { useState } from "react";
import { UploadImg, UploadInput,UploadLabel,UploadLabelContent,UploadLabelBlock} from "./Upload.style";

const Upload = ({button,icon,text}) => {
    const [selectedImage, setSelectedImage] = useState(null);
    return (
        <>
            {selectedImage && (
                <>
                    <UploadImg alt="not fount"  src={URL.createObjectURL(selectedImage)} />
                    {/*<button onClick={()=>setSelectedImage(null)}>Remove</button>*/}
                </>
            )}
            <UploadLabel>
                <UploadLabelContent>
                    <UploadLabelBlock>
                        {button}
                    </UploadLabelBlock>
                    <UploadLabelBlock>
                        {icon}
                        {text}
                    </UploadLabelBlock>
                </UploadLabelContent>
                <UploadInput
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                        setSelectedImage(event.target.files[0]);
                    }}
                />
            </UploadLabel>
        </>
    );
};

export default Upload;