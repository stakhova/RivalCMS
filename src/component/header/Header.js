import {
    HeaderWrap,
    HeaderLogoWrap,
    HeaderContainer,
    HeaderButton,
    LogoText
} from "./Header.style";
import LogoSvg from "../../icon/LogoSvg";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <HeaderWrap>
            <HeaderContainer>
                <HeaderLogoWrap>
                    <LogoSvg/>
                </HeaderLogoWrap>
                <Link to='/view'>
                    <HeaderButton >Sing in</HeaderButton>
                </Link>
            </HeaderContainer>
        </HeaderWrap>
    );
};

export default Header;
