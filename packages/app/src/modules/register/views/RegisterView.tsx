import * as React from "react";
import { withFormik, FormikErrors, FormikProps, Field } from 'formik';
import { userValidationSchema, } from '@abb/common';
import { InputField } from "../../shared/inputField";
import { View, Button } from "react-native";

interface FormValues {
    email: string,
    password: string
}

interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class Register extends React.PureComponent<FormikProps<FormValues > & Props> {
    render() {
        const { handleSubmit } = this.props;
        return (
                <View style={{ marginTop: 200 }}>
                    <Field
                        name="email"
                        placeholder="Email"
                        component={InputField}
                    />
                    <Field
                        name="password"
                        secureTextEntry={true}
                        placeholder="Password"
                        component={InputField}
                    />
                    <Button title="submit"onPress={handleSubmit as any} />
                </View>
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