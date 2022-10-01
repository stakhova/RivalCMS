
import {LinkElemIcon, LinkElemText, LinkElem} from "./CustomLink.style";
import { NavLink,Link} from "react-router-dom";

const CustomLink = ({reference,icon,text}) => {
    return (
        <Link to={reference}>
            <LinkElem>
                <LinkElemIcon>{icon}</LinkElemIcon>
                <LinkElemText>{text}</LinkElemText>
            </LinkElem>
        </Link>
    );
};


export default CustomLink;