import * as React from "react";
import { withFormik, FormikErrors, FormikProps, Field } from 'formik';
import { userValidationSchema, } from '@abb/common';
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

class Register extends React.PureComponent<FormikProps<FormValues > & Props> {
    render() {
        const { handleSubmit } = this.props;
        return (
                <View style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                    <Card>
                        <Text style={{ fontSize: 30, marginBottom: 10 }}>Register</Text>
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
                        <Button
                            style={{ marginTop: 25 }}
                            title="submit"
                            onPress={handleSubmit as any} />
                    </Card>
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
