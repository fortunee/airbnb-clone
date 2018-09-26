import * as React from 'react';
import { Field } from 'formik';
import { InputField } from '../../../shared/inputField';

export const FormSectionThree = () => (
    <>
        <Field
            name="longitude"
            placeholder="Longitude"
            component={InputField}
        />

        <Field
            name="latitude"
            placeholder="Latitude"
            component={InputField}
        />

        <Field
            name="amenities"
            placeholder="Amenities"
            component={InputField}
        />
    </>
);
