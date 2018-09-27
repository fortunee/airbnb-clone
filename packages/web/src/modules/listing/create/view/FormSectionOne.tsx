import * as React from 'react';
import { Field } from 'formik';
import { InputField } from '../../../shared/inputField';
import { Form } from 'antd';

export const FormSectionOne = () => (
    <React.Fragment>
        <Form.Item label="Name">
            <Field name="name" placeholder="Name" component={InputField} />
        </Form.Item>

        <Form.Item label="Category">
            <Field name="category" placeholder="Category" component={InputField} />
        </Form.Item>

        <Form.Item label="Description">
            <Field name="description" placeholder="Description" component={InputField} />
        </Form.Item>

    </React.Fragment> 
);
