import ViewElem from "../viewElem/ViewElem";
import {ViewTitle,ViewTitleText,ViewListWrap} from "./ViewList.style";
import {Link} from "react-router-dom";
import {FormButton, FormButtonBlock} from "../../pages/loginPage/LoginPage.style";
import AddSvg from "../../icon/AddSvg";


const lists = [
    {namePage: 'Home_page' , updatePage: 'Updated 3 weeks ago', authorPage:'Joe Bloggs',userPage:'Admin'},
    {namePage: 'Home_page' , updatePage: 'Updated 3 weeks ago', authorPage:'Joe Bloggs',userPage:'Admin'},
    {namePage: 'Home_page' , updatePage: 'Updated 3 weeks ago', authorPage:'Joe Bloggs',userPage:'Admin'},

];

const ViewList = () => {
    return (
        <ViewListWrap>
            <ViewTitle>
                <ViewTitleText>Page title</ViewTitleText>
                <ViewTitleText>Created</ViewTitleText>
                <ViewTitleText>Status</ViewTitleText>
                <ViewTitleText>Author</ViewTitleText>
                <FormButtonBlock rightBtn>
                    <FormButton add>
                        <Link to='/createView'>
                                <AddSvg/>
                                Add new
                        </Link>
                    </FormButton>
                </FormButtonBlock>
            </ViewTitle>
            {lists.map((list, id) => {
                return (
                    <ViewElem namePage={list.namePage} updatePage={list.updatePage} authorPage={list.authorPage} userPage={list.userPage} ></ViewElem>
                );
            })}
        </ViewListWrap>
    );
};
export default ViewList;


