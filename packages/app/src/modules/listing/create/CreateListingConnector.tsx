import * as React from "react";
import { Formik, Field } from "formik";
import { RouteComponentProps } from "react-router-native";
import { Text, View, ScrollView } from "react-native";
import { Button } from "react-native-elements";

import { withCreateListing, WithCreateListing } from "@abb/controller";
import { InputField } from "../../shared/inputField";
import { CheckboxGroupField } from "../../shared/CheckboxGroupField";

interface FormValues {
  name: string;
  picture: null;
  category: string;
  description: string;
  price: string;
  beds: string;
  guests: string;
  latitude: string;
  longitude: string;
  amenities: string[];
}

export class CreateListingComponent extends React.PureComponent<
  RouteComponentProps<{}> & WithCreateListing
> {
  submit = async (
    values: FormValues /*{ setSubmitting }: FormikActions<FormValues>*/
  ) => {
    console.log(values);
    // await this.props.createListing(values);
    // setSubmitting(false);
  };

  render() {
    return (
      <Formik<{}, FormValues>
        initialValues={{
          name: "",
          picture: null,
          category: "",
          description: "",
          price: "0",
          beds: "0",
          guests: "0",
          latitude: "0",
          longitude: "0",
          amenities: []
        }}
        onSubmit={this.submit}
      >
        {({ handleSubmit}) => (
          <View style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <ScrollView style={{ marginTop: 20, padding: 20 }}>
              <Text style={{ fontSize: 30, marginBottom: 10 }}>
                Create listing
              </Text>
              <Field
                label="Name"
                name="name"
                placeholder="Name"
                component={InputField}
              />

              <Field
                label="Category"
                name="category"
                placeholder="Category"
                component={InputField}
              />

              <Field
                label="Description"
                name="description"
                placeholder="Description"
                component={InputField}
              />

              <Field
                label="Price"
                name="price"
                placeholder="Price"
                component={InputField}
                keyboardType="numeric"
              />

              <Field
                label="Beds"
                name="beds"
                placeholder="Beds"
                component={InputField}
                keyboardType="numeric"
              />

              <Field
                label="Guests"
                name="guests"
                placeholder="Guests"
                component={InputField}
                keyboardType="numeric"
              />

              <Field
                label="Longitude"
                name="longitude"
                placeholder="Longitude"
                component={InputField}
                keyboardType="numeric"
              />
              <Field
                label="Latitude"
                name="latitude"
                placeholder="Latitude"
                component={InputField}
                keyboardType="numeric"
              />

              <Field
                name="amenities"
                options={[ 'Pool', 'Swimming Pool', 'Basketball Court']}
                component={CheckboxGroupField as any}
              />
              <Button onPress={handleSubmit} title="Create" />
            </ScrollView>
          </View>
        )}
      </Formik>
    );
  }
}

export const CreateListingConnector = withCreateListing(CreateListingComponent);
