import * as React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { Form as AntForm, Button } from "antd";
import { Form, Formik, FormikActions } from "formik";
// import ImageFile from 'react-dropzone';

import { FormSectionOne } from "./view/FormSectionOne";
import { FormSectionTwo } from "./view/FormSectionTwo";
import { FormSectionThree } from "./view/FormSectionThree";

const FormItem = AntForm.Item;

export interface ListingFormValues {
  name: string;
  picture: any | null;
  category: string;
  description: string;
  price: number;
  beds: number;
  guests: number;
  latitude: number;
  longitude: number;
  amenities: string[];
}

interface State {
  formSection: number;
}

interface Props {
  initialValues?: ListingFormValues;
  submit: (
    data: ListingFormValues,
    actions: FormikActions<ListingFormValues>
  ) => Promise<void>;
}

// tslint:disable-next-line:jsx-key
const formSections = [
  <FormSectionOne />,
  <FormSectionTwo />,
  <FormSectionThree />,
];

export const defaultListingFormValues = {
  name: "",
  picture: null,
  category: "",
  description: "",
  price: 0,
  beds: 0,
  guests: 0,
  latitude: 0,
  longitude: 0,
  amenities: [],
};

export class ListingForm extends React.PureComponent<Props, State> {
  state = {
    formSection: 0,
  };

  nextSection = () =>
    this.setState((state) => ({ formSection: state.formSection + 1 }));

  render() {

    const {
      submit,
      initialValues = defaultListingFormValues
    } = this.props;

    return (
      <Formik<{}, ListingFormValues>
        initialValues={initialValues}
        onSubmit={submit}
      >
        {({ isSubmitting, values }) => (
          <div>
            <Form style={{ display: "flex" }}>
              <Link to="/logout">logout</Link>
              <div style={{ width: 400, margin: "auto" }}>
                <h1>Create Listing</h1>
                {formSections[this.state.formSection]}
                {/* {values.picture && <img src={values.picture.preview} />} */}
                <FormItem>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    {this.state.formSection === formSections.length - 1 ? (
                      <div>
                        <Button
                          type="primary"
                          htmlType="submit"
                          disabled={isSubmitting}
                        >
                          Create listing
                        </Button>
                      </div>
                    ) : (
                      <Button type="primary" onClick={this.nextSection}>
                        Next
                      </Button>
                    )}
                  </div>
                </FormItem>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    );
  }
}
