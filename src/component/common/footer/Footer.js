import {
    FooterWrap
} from "./Footer.style";
import CustomLink from "../../сustomLink/CustomLink";
import LogoSvg from "../../../icon/LogoSvg";

const footerLists = [
    {title: 'Register'},
    {title: 'Terms & conditions'},
    {title: 'Privacy policy'},
    {title: 'Documentation'},
    {title: 'Pricing'},
    {title: 'Our blog'}
];

const Footer = () => {
    return (
        <FooterWrap>
            {footerLists.map((list, id) => {
                return (
                    <CustomLink text={list.title}></CustomLink>
                );
            })}
            <LogoSvg/>
        </FooterWrap>
    );
};

export default Footer;
