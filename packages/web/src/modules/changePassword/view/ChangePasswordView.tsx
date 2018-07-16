import * as React from "react";
import { Form as AntForm, Icon, Button } from "antd";
import { withFormik, FormikProps, Field, Form } from 'formik';
import { InputField } from "../../shared/inputField";
import { NormalizeErrorMap } from "../../../../../controller/dist";
import { changePasswordSchema } from "@abb/common";

const FormItem = AntForm.Item;

interface FormValues {
    newPassword: string
}

interface Props {
    submit: (values: FormValues) => Promise<NormalizeErrorMap | null>;
}

class ChangePassword extends React.PureComponent<FormikProps<FormValues > & Props> {
    render() {
        return (
            <Form style={{ display: 'flex' }}>
                <div style={{ width: 400, margin: 'auto' }}>
                    <h1>Forgot Password</h1>
                    <Field
                        name="newPassword"
                        prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} /> as any}
                        type="password"
                        placeholder="New Password"
                        component={InputField}
                    />
                    <FormItem>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="login-form-button"
                        >
                            Change Password 
                        </Button>
                    </FormItem>
                </div>
            </Form>
        );
    }
}

export const ChangePasswordView = withFormik<Props, FormValues>({
    validationSchema: changePasswordSchema,
    mapPropsToValues: () => ({ newPassword: '' }),
    handleSubmit: async (formValues, formikBag) => {
        const errors = await formikBag.props.submit(formValues);
        if (errors) {
            formikBag.setErrors(errors);
        }
    }
})(ChangePassword);
