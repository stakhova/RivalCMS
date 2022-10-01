// import { NavLink } from "react-router-dom";

import Header from "../../component/header/Header";
import RegistrationForm from "../../component/registration-form/RegistrationForm";
import {MainTitle} from "../main/Main.style";
import Container from "../../component/common/container/container";

const RegistrationPage = () => {
    return (
        <Container>
            <Header/>
            <MainTitle>Rival<span>CMS</span></MainTitle>
            <RegistrationForm/>
        </Container>
    );
};

export default RegistrationPage;
