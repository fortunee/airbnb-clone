import * as React from 'react';
import { Field } from 'formik';
import { InputField } from '../../../shared/inputField';
import { Form } from 'antd';

export const FormSectionTwo = () => (
    <>
        <Field label="Price" name="price" placeholder="Price" component={InputField} />

        <Field label="Beds" name="beds" placeholder="Beds" component={InputField} />
        
        <Field label="Guests" name="guests" placeholder="Guests" component={InputField} />
    </>
);
