import * as React from "react";
import { Form as AntForm, Icon, Button } from "antd";
import { withFormik, FormikProps, Field, Form } from 'formik';
import { InputField } from "../../shared/inputField";
import { NormalizeErrorMap } from "@abb/controller";

const FormItem = AntForm.Item;

interface FormValues {
    email: string
}

interface Props {
    onFinish: () => void;
    submit: (values: FormValues) => Promise<NormalizeErrorMap | null>;
}

class ForgotPassword extends React.PureComponent<FormikProps<FormValues > & Props> {
    render() {
        return (
            <Form style={{ display: 'flex' }}>
                <div style={{ width: 400, margin: 'auto' }}>
                    <h1>Forgot Password</h1>
                    <Field
                        name="email"
                        prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any}
                        type="email"
                        placeholder="Email"
                        component={InputField}
                    />
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Reset Password 
                        </Button>
                    </FormItem>
                </div>
            </Form>
        );
    }
}

export const ForgotPasswordView = withFormik<Props, FormValues>({
    mapPropsToValues: () => ({ email: '' }),
    handleSubmit: async (formValues, formikBag) => {
        const errors = await formikBag.props.submit(formValues);
        if (errors) {
            formikBag.setErrors(errors);
        } else {
            formikBag.props.onFinish();
        }
    }
})(ForgotPassword);
