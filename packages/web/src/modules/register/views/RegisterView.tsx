import * as React from "react";
import { Form, Icon, Input, Button } from "antd";
import { withFormik, FormikErrors, FormikProps } from 'formik';

const FormItem = Form.Item;
interface FormValues {
    email: string,
    password: string,
    confirmPassword: string,
}

interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class Register extends React.PureComponent<FormikProps<FormValues > & Props> {
    render() {
    const { values, handleBlur, handleChange, handleSubmit } = this.props;
    return (
      <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
        <div style={{ width: 400, margin: 'auto' }}>
            <h1>Register</h1>
            <FormItem>
            <Input
                name="email"
                prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            </FormItem>
            <FormItem>
            <Input
                name="password" 
                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            </FormItem>
            <FormItem>
            <Input
                name="confirmPassword"
                prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
                type="password"
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            </FormItem>
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
                Or <a href="">login now!</a>
            </FormItem>
        </div>
      </form>
    );
  }
}

export const RegisterView = withFormik<Props, FormValues>({
    mapPropsToValues: () => ({ email: '', password: '', confirmPassword: '' }),
    handleSubmit: async (formValues, formikBag) => {
        const errors = await formikBag.props.submit(formValues);
        if (errors) {
            formikBag.setErrors(errors);
        }
    }
})(Register);
