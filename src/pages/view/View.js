import Header from "../../component/header/Header";
import Navigation from "../../component/navigation/Navigation";
import { Outlet} from "react-router-dom";
import {
    ViewAside,
    ViewMain,
    ViewWrap
} from "./View.style";
import Container from "../../component/common/container/container";
const View = () => {
    return (
        <Container>
            <Header/>
            <ViewWrap>
                <ViewAside>
                    <Navigation/>
                </ViewAside>
                <ViewMain>
                    <Outlet/>
                </ViewMain>
            </ViewWrap>
        </Container>
    );
};

export default View;