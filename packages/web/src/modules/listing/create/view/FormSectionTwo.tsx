import * as React from 'react';
import { Field } from 'formik';
import { InputField } from '../../../shared/inputField';
import { Form } from 'antd';

export const FormSectionTwo = () => (
    <>
         <Form.Item label="Price">
            <Field name="price" placeholder="Price" component={InputField} />
        </Form.Item>

         <Form.Item label="Beds">
            <Field name="beds" placeholder="Beds" component={InputField} />
        </Form.Item>
        <Form.Item label="Guests">
            <Field name="guests" placeholder="Guests" component={InputField} />
        </Form.Item>
    </>
);
