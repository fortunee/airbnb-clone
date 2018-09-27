import * as React from 'react';
import { Field } from 'formik';
import { InputField } from '../../../shared/inputField';

export const FormSectionThree = () => (
    <>
        <Field label="Longitude" name="longitude" placeholder="Longitude" component={InputField} useNumberInput={true} />
        <Field label="Latitude" name="latitude" placeholder="Latitude" component={InputField} useNumberInput={true} />
        <Field label="Amenities" name="amenities" placeholder="Amenities" component={InputField} />
    </>
);
