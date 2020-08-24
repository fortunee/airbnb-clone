import * as React from "react";
import { FieldProps } from "formik";
import Dropzone from "react-dropzone";
import { Button } from "antd";

export const DropZoneField: React.SFC<
  FieldProps<any>
> = ({ field: { name, value }, form: { setFieldValue, values, setValues }, ...props }) => {
  const picPreviewUrl = (value ? value.preview : null) || values.pictureUrl;
  return (
    <>
      <Dropzone
        accept="image/jpeg, image/png"
        multiple={false}
        // tslint:disable-next-line:jsx-no-lambda
        onDrop={([file]) => {
          setFieldValue(name, file);
        }}
        {...props}
      >
        <p>Drop image</p>
      </Dropzone>
      {picPreviewUrl && <img src={picPreviewUrl} style={{ maxHeight: 300 }} />}
      <Button onClick={() => setValues({
          ...values,
          picture: null,
          pictureUrl: null,
      })}>Remove Picture</Button>
    </>
  );
};
