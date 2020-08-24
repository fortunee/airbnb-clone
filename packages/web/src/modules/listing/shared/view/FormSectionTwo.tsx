import * as React from 'react';
import { Field } from 'formik';
import { InputField } from '../../../shared/inputField';

export const FormSectionTwo = () => (
    <>
        <Field label="Price" name="price" placeholder="Price" component={InputField} useNumberInput={true} />

        <Field label="Beds" name="beds" placeholder="Beds" component={InputField} useNumberInput={true} />
        
        <Field label="Guests" name="guests" placeholder="Guests" component={InputField} useNumberInput={true} />
    </>
);
