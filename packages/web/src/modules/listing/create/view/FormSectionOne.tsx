import * as React from 'react';
import { Field } from 'formik';
import { InputField } from '../../../shared/inputField';

export const FormSectionOne = () => (
    <React.Fragment>
        <Field
            name="name"
            placeholder="Name"
            component={InputField}
        />

        <Field
            name="category"
            placeholder="Category"
            component={InputField}
        />

        <Field
            name="description"
            placeholder="Description"
            component={InputField}
        />

    </React.Fragment> 
);
