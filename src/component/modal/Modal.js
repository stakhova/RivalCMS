import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import {
    ModalWrap,
    ModalBackground,
    ModalTitle

} from "./Modal.style";
import CustomLink from "../сustomLink/CustomLink";
import {EditSvg} from "../../icon/EditSvg";
import DelSvg from "../../icon/DelSvg";
import StatusSvg from "../../icon/StatusSvg";


const items = [
    {svg: <EditSvg/> , title: 'Edit file name'},
    {svg: <StatusSvg/>, title: 'Change status'},
    {svg: <DelSvg/>, title: 'Delete page'}
];



const Modal = ({ showModal, setShowModal }) => {
    const [checked, setChecked] = useState(false);
    const modalRef = useRef();
    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? "translateY(0%)" : "translateY(-100%)",
    });

    const keyPress = useCallback(
        (e) => {
            if (e.key === "Escape" && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );

    useEffect(() => {
        document.addEventListener("keydown", keyPress);
        return () => document.removeEventListener("keydown", keyPress);
    }, [keyPress]);

    const onCloseModal = () => {
        setShowModal((prev) => !prev);
        if (checked) {
            setChecked(!checked);
        }
    };

    const onCloseHandler = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
            if (checked) {
                setChecked(!checked);
            }
        }
    };

    return (
        <>
            {showModal ? (
                <ModalBackground ref={modalRef} onClick={onCloseHandler}>
                    <animated.div style={animation}>
                        <ModalWrap showModal={showModal}>
                            <ModalTitle>Manage</ModalTitle>
                            {items.map((item, id) => {
                                return (
                                    <CustomLink icon={item.svg} text={item.title} ></CustomLink>
                                );
                            })}
                        </ModalWrap>
                    </animated.div>
                </ModalBackground>
            ) : null}
        </>
    );
};

export default Modal;
