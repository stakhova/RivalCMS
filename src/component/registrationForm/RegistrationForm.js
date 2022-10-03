
import { ErrorMessage, Form, Field, Formik } from "formik";
import * as Yup from "yup";
import {
    FormButton,
    FormWrapper,
    InputWrapper,
    InputLabel,
    InputLabelText, FormButtonBlock,
} from "../../pages/loginPage/LoginPage.style";
import EmailSvg from "../../icon/EmailSvg";
import PasswordSvg from "../../icon/PasswordSvg";
import UserSvg from "../../icon/UserSvg";
import {Link} from "react-router-dom";

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
    // name: Yup.string("Enter name")
    //     .name("Please enter a valid name")
    //     .required("This field is required"),
    email: Yup.string("Enter e-mail")
        .email("Please enter a valid e-mail")
        .max(250, "The email must be a maximum of 250 characters")
        .required("This field is required"),
    password: Yup.string("Enter password")
        .min(10, "Password must be at least 10 characters long")
        .max(30, "The password must be a maximum of 30 characters")
        .required("This field is required"),
});

const RegistrationForm = () => {
    return (
            <FormWrapper>
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={loginSchema}
                >
                    {({ values, handleChange, handleBlur }) => (
                        <Form>
                            <InputWrapper>
                                <InputLabel>
                                    <UserSvg/>
                                    <InputLabelText>Full name</InputLabelText>
                                </InputLabel>
                                <Field
                                    name="name"
                                    type="text"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    style={{ color: "#FF6596" }}
                                />
                            </InputWrapper>
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
                            <FormButtonBlock rightBtn>
                                <Link to='/ViewFile'>
                                    <FormButton type="submit">Register</FormButton>
                                </Link>
                            </FormButtonBlock>
                        </Form>
                    )}
                </Formik>
            </FormWrapper>
    );
};

export default RegistrationForm;
