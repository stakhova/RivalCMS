import { Link, } from "react-router-dom";
import {
    MainWrap,
    MainContainer,
    MainTitle,
    MainDesc,
    MainButton,
    MainHeader,
    MainLink,
    MainBack,
    MainImgWrap,
    MainImg,
    MainSvgWrap

} from "./Main.style";
import MainSvg from "../../icon/MainSvg";
import BackSvg from "../../icon/BackSvg";
import Footer from "../../component/common/footer/Footer";
import Container from "../../component/common/container/container";

const Main = () => {
    return (
        <Container>
            <MainWrap>
                <MainContainer>
                    <MainBack>
                        <BackSvg/>
                    </MainBack>
                    <MainHeader>
                        <MainLink>
                            <Link to='/'>Pricing</Link>
                        </MainLink>
                        <MainLink>
                            <Link to='/login'>About</Link>
                        </MainLink>
                        <MainButton sing>
                            <Link to='/login'>Sing In</Link>
                        </MainButton>
                    </MainHeader>
                    <MainTitle main>Rival<span>CMS</span></MainTitle>
                    <MainDesc>Fresh new way to build sites</MainDesc>
                    <MainButton>
                        <Link to='/login'>
                            Get started free
                         </Link>
                    </MainButton>
                    <MainSvgWrap>
                        <MainSvg></MainSvg>
                    </MainSvgWrap>
                    <Footer/>
                </MainContainer>
            </MainWrap>
        </Container>
    );
};

export default Main;
