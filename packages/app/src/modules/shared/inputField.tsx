import * as React from 'react';
import { FieldProps } from 'formik';
import { Input } from 'react-native-elements';

const errorStyle = {
    color: 'red'
};

export class InputField extends React.Component<FieldProps<any>> {
    onChangeText = (text: string) => {
        const { form: { setFieldValue }, field: { name } } = this.props;
        setFieldValue(name, text);
    };

    render() {
        const { field, form: { touched, errors }, ...props } = this.props;
        const errorMsg = touched[field.name] && errors[field.name];
        return (
            // <FormItem   
            //     help={errorMsg}
            //     validateStatus={errorMsg ? "error" : undefined}
            // >
            // <Input {...field} {...props} />
            // </FormItem>
            <Input
                {...props}
                errorStyle={errorStyle}
                errorMessage={errorMsg}
                onChangeText={this.onChangeText}
                value={field.value}
            />
        );
    }
};