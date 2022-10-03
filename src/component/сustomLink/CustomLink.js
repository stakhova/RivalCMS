
import {LinkElemIcon, LinkElemText, LinkElem} from "./CustomLink.style";
import {NavLink} from "react-router-dom";

const CustomLink = ({reference,icon,text}) => {
    return (
        <NavLink to={reference}>
            <LinkElem>
                <LinkElemIcon>{icon}</LinkElemIcon>
                <LinkElemText>{text}</LinkElemText>
            </LinkElem>
        </NavLink>
    );
};


export default CustomLink;