import * as React from 'react';
import { FieldProps } from 'formik';
import Dropzone from 'react-dropzone';


export const DropZoneField: React.SFC<FieldProps<any>> = (
    {
        field: { name},
        form: { touched, errors, setFieldValue },
        ...props 
    }
) => {
    return (
        <Dropzone
            accept='image/jpeg, image/png'
            multiple={false}
            // tslint:disable-next-line:jsx-no-lambda
            onDrop={([file]) => {
                setFieldValue(name, file);
            }}
            {...props}
        >
        <p>Drop image</p>
        </Dropzone>
    )
}
