import * as React from "react";
import { withFormik, FormikErrors, FormikProps, Field } from 'formik';
import { loginSchema, } from '@abb/common';
import { InputField } from "../../shared/inputField";
import { View, Text } from "react-native";
import { Card, Button } from 'react-native-elements';

interface FormValues {
    email: string,
    password: string
}

interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

class Login extends React.PureComponent<FormikProps<FormValues > & Props> {
    render() {
        const { handleSubmit } = this.props;
        return (
                <View style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                    <Card>
                        <Text style={{ fontSize: 30, marginBottom: 10 }}>Login</Text>
                        <Field
                            name="email"
                            placeholder="Email"
                            autoCapitalize="none"
                            component={InputField}
                            containerStyle={{ width: "100%" }}
                        />
                        <Field
                            name="password"
                            secureTextEntry={true}
                            placeholder="Password"
                            component={InputField}
                            containerStyle={{ width: "100%" }}
                        />
                        <Button
                            style={{ marginTop: 25 }}
                            title="submit"
                            onPress={handleSubmit as any} />
                    </Card>
                </View>
        );
    }
}

export const LoginView = withFormik<Props, FormValues>({
    validationSchema: loginSchema,
    validateOnBlur: false,
    validateOnChange: false,
    mapPropsToValues: () => ({ email: '', password: '' }),
    handleSubmit: async (formValues, formikBag) => {
        const errors = await formikBag.props.submit(formValues);
        if (errors) {
            formikBag.setErrors(errors);
        }
    }
})(Login);
