import * as React from 'react';
import { FieldProps } from 'formik';
import { Form, Input, InputNumber } from "antd";

const FormItem = Form.Item;


export const InputField: React.SFC<FieldProps<any> & { prefix: React.ReactNode, label?: string, useNumberInput?: boolean }> = (
    {
        field: { onChange, ...field },
        form: { touched, errors, setFieldValue },
        label,
        useNumberInput = false,
        ...props 
    }
) => {
    const errorMsg = touched[field.name] && errors[field.name];
    const InputComp = useNumberInput ? InputNumber : Input;
    return (
        <FormItem
            label={label}
            help={errorMsg}
            validateStatus={errorMsg ? "error" : undefined}
        >
        <InputComp {...field} {...props}  style={{ width: '100%' }} onChange={useNumberInput ? (newValue: any) => setFieldValue(field.name, newValue) : onChange}/>
        </FormItem>
    )
}
