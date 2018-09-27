import * as React from 'react';
import { FieldProps } from 'formik';
import { Form, Select } from "antd";

const FormItem = Form.Item;


export const TagField: React.SFC<FieldProps<any> & { prefix: React.ReactNode, label?: string, useNumberInput?: boolean }> = (
    {
        field: { onChange, onBlur: _, ...field },
        form: { touched, errors, setFieldValue },
        label,
        ...props 
    }
) => {
    const errorMsg = touched[field.name] && errors[field.name];
    return (
        <FormItem
            label={label}
            help={errorMsg}
            validateStatus={errorMsg ? "error" : undefined}
        >

        <Select
            {...field}
            {...props}
            mode='tags'
            style={{ width: '100%' }}
            // tslint:disable-next-line:jsx-no-lambda
            onChange={(newValue: any) => setFieldValue(field.name, newValue)}
        />
        </FormItem>
    )
}
