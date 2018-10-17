import * as React from "react";
import { FieldProps } from "formik";
import { Button } from "react-native-elements";
import { ImagePicker, Permissions } from "expo";
import { ReactNativeFile } from "apollo-upload-client";

export class PictureField extends React.Component<
  FieldProps<any> & {
    title: string;
  }
> {
  onPress = async () => {
    const camera = await Permissions.askAsync(Permissions.CAMERA);

    if (camera.status === 'granted') {
        const imageResult = await ImagePicker.launchImageLibraryAsync({});
        if (!imageResult.cancelled) {
        const file = new ReactNativeFile({
            uri: imageResult.uri,
            type: imageResult.type,
            name: "picture"
        });
        const {
            field: { name },
            form: { setFieldValue }
        } = this.props;
        setFieldValue(name, file);
        }
    };
}

  render() {
    const {
      field,
      form: _,
      ...props
    } = this.props;
    return <Button {...props} onPress={this.onPress} />;
  }
}