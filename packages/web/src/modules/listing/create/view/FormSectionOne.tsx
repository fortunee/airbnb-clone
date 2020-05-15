import * as React from 'react';
import { Field } from 'formik';
import { InputField } from '../../../shared/inputField';
import { DropZoneField } from '../../../shared/dropZoneField';

export const FormSectionOne = () => (
    <React.Fragment>
        <Field label="Name" name="name" placeholder="Name" component={InputField} />

        <Field label="Category" name="category" placeholder="Category" component={InputField} />

        <Field  label="Description" name="description" placeholder="Description" component={InputField} />

        <Field  label="Upload Image" name="picture" component={DropZoneField} />
    </React.Fragment> 
);
