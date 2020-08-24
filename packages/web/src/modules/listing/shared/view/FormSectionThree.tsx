import * as React from 'react';
import { Field } from 'formik';
import { TagField } from '../../../shared/tagField';
import { LocationField } from '../../../shared/LocationField';

export const FormSectionThree = () => (
    <>
        <Field labal="tmp" component={LocationField} />
        <Field label="Amenities" name="amenities" placeholder="Amenities" component={TagField} />
    </>
);
