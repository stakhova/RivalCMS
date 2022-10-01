import { Nav, NavTitle,NavList} from "./Navigation.style";
import HomeSvg from "../../icon/HomeSvg";
import FilePlusSvg from "../../icon/FilePlusSvg";
import FilesSvg from "../../icon/FilesSvg";
import BlogSvg from "../../icon/BlogSvg";
import ArchivedSvg from "../../icon/ArchivedSvg";
import UsersSvg from "../../icon/UsersSvg";
import SubsSvg from "../../icon/SubsSvg";
import ThemesSvg from "../../icon/ThemesSvg";
import UpdateSvg from "../../icon/UpdateSvg";
import PluginsSvg from "../../icon/PluginsSvg";
import CustomLink from "../сustomLink/CustomLink";


const links = [
    {svg: <HomeSvg/> , title: 'View site', reference:'/viewList'},
    {svg: <FilePlusSvg/>, title: 'Create page', reference:'/createView'},
    {svg: <BlogSvg/>, title: 'Blog articles'},
    {svg: <FilesSvg/>, title: 'Files',reference:'/addPhoto'},
    {svg: <UsersSvg/>, title: 'Users'},
    {svg: <SubsSvg/>, title: 'Subscriptions'},
    {svg: <ArchivedSvg/>, title: 'Archived pages'}
];
const bottomLinks = [
    {svg: <ThemesSvg/> , title: 'Themes'},
    {svg: <PluginsSvg/>, title: 'Plugins'},
    {svg: <UpdateSvg/>, title: 'Update plans'}
];


const Navigation = () => {
    return (
        <Nav>
            <NavTitle>Manage</NavTitle>
            <NavList>
                {links.map((link, id) => {
                    return (
                        <CustomLink reference={link.reference} icon={link.svg} text={link.title} ></CustomLink>
                    );
                })}
            </NavList>
            <NavTitle>Pro features</NavTitle>
            <NavList>
                {bottomLinks.map((link, id) => {
                    return (
                        <CustomLink icon={link.svg} text={link.title}></CustomLink>
                    );
                })}
            </NavList>
        </Nav>
    );
};
export default Navigation;


