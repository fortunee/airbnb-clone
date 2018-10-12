import * as React from "react";
import { FieldProps } from "formik";
import { CheckBox } from "react-native-elements";

export class CheckboxGroupField extends React.Component<
  FieldProps<any> &
  {
    options: string[];
  }
> {
  onChangeText = (text: string) => {
    const {
      form: { setFieldValue },
      field: { name }
    } = this.props;
    setFieldValue(name, text);
  };

  render() {
    const {
      options,
      field: { name },
      form: { values }
    } = this.props;
    return (
      <React.Fragment>
        {options.map(option => (
          <CheckBox
            key={options.indexOf(option)}
            title={option}
            checked={values[name].includes(option)}
          />
        ))}
      </React.Fragment>
    );
  }
}
