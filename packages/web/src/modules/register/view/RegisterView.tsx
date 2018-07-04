import * as React from "react";
import { Form as AntForm, Icon, Button } from "antd";
import { withFormik, FormikErrors, FormikProps, Field, Form } from 'formik';
import { userValidationSchema, } from '@abb/common';
import { InputField } from "../../shared/inputField";
import { Link } from "react-router-dom";

const FormItem = AntForm.Item;

interface FormValues {
    email: string,
    password: string
}

interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class Register extends React.PureComponent<FormikProps<FormValues > & Props> {
    render() {
        return (
            <Form style={{ display: 'flex' }}>
                <div style={{ width: 400, margin: 'auto' }}>
                    <h1>Register</h1>
                    <Field
                        name="email"
                        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any}
                        type="email"
                        placeholder="Email"
                        component={InputField}
                    />
                    <Field
                        name="password"
                        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} /> as any}
                        type="password"
                        placeholder="Password"
                        component={InputField}
                    />
                    <FormItem>
                    <a className="login-form-forgot" href="">
                        Forgot password
                    </a>
                    </FormItem>
                    <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Register 
                    </Button>
                        Or <Link to="/login">login now!</Link>
                    </FormItem>
                </div>
            </Form>
        );
    }
}

export const RegisterView = withFormik<Props, FormValues>({
    validationSchema: userValidationSchema,
    mapPropsToValues: () => ({ email: '', password: '' }),
    handleSubmit: async (formValues, formikBag) => {
        const errors = await formikBag.props.submit(formValues);
        if (errors) {
            formikBag.setErrors(errors);
        }
    }
})(Register);
