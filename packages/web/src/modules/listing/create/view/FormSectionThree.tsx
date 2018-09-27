import * as React from 'react';
import { Field } from 'formik';
import { InputField } from '../../../shared/inputField';
import { Form } from 'antd';

export const FormSectionThree = () => (
    <>
        <Form.Item label="Longitude">
            <Field  name="longitude" placeholder="Longitude" component={InputField} />
        </Form.Item>
        <Form.Item label="Latitude">
            <Field name="latitude" placeholder="Latitude" component={InputField} />
        </Form.Item>
        <Form.Item label="Amenities">
            <Field name="amenities" placeholder="Amenities" component={InputField} />
        </Form.Item>
    </>
);
