
import { ErrorMessage, Form, Field, Formik } from "formik";
import * as Yup from "yup";
import {
    FormButton,
    FormWrapper,
    InputWrapper,
    InputLabel,
    InputLabelText, FormText, FormButtonBlock,
} from "./LoginPage.style";
import EmailSvg from "../../icon/EmailSvg";
import PasswordSvg from "../../icon/PasswordSvg";
import {Link} from "react-router-dom";
import {MainTitle} from "../main/Main.style";
import Container from "../../component/common/container/container";


function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}


const loginSchema = Yup.object().shape({
    email: Yup.string("Enter e-mail")
        .email("Please enter a valid e-mail")
        .required("This field is required"),
    password: Yup.string("Enter password")
        .min(6, "Password must be at least 6 characters long")
        .max(12, "The password must be a maximum of 12 characters")
        .required("This field is required"),
});

const LoginPage = () => {
    return (
        <Container>
            <MainTitle>Rival<span>CMS</span></MainTitle>
            <FormWrapper>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
            >
                {({}) => (
                    <Form>
                        <InputWrapper>
                            <InputLabel>
                                <EmailSvg/>
                                <InputLabelText>Email address</InputLabelText>
                            </InputLabel>
                            <Field
                                name="email"
                                type="email"
                                validate={validateEmail}
                            />
                            <ErrorMessage
                                name="email"
                                component="div"
                                style={{ color: "#FF6596" }}
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <InputLabel>
                                <PasswordSvg/>
                                <InputLabelText> Password </InputLabelText>
                            </InputLabel>
                            <Field
                                name="password"
                                type="password"
                                maxLength="12"
                            />
                            <ErrorMessage
                                name="password"
                                component="div"
                                style={{ color: "#FF6596" }}
                            />
                        </InputWrapper>
                        <FormButtonBlock>
                            <FormText>Forgot password?</FormText>
                                <Link to='/view'>
                                    <FormButton type="submit">Sing in</FormButton>
                                </Link>
                            </FormButtonBlock>
                        <FormButton white><Link to='/registration'>Don't have account?</Link></FormButton>
                    </Form>
                )}
            </Formik>
        </FormWrapper>
        </Container>
    );
};

export default LoginPage;