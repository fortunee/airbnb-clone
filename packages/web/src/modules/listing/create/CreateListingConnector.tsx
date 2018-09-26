import * as React from 'react';
import { Form as AntForm, Button } from "antd";
import { Field, Form, Formik } from 'formik';
import { InputField } from '../../shared/inputField';

const FormItem = AntForm.Item;

interface FormValues {
    name: string;
    category: string;
    description: string;
    price: number;
    beds: number;
    guests: number;
    latitude: number;
    longitude: number;
    amenities: string[];
}

export class CreateListingConnector extends React.PureComponent {
    submit = (values: any) => {
        console.log('Values ', values)
    }
    render() {
        return (
         <Formik<{}, FormValues> initialValues={{
            name: '',
            category: '',
            description: '',
            price: 0,
            beds: 0,
            guests: 0,
            latitude: 0,
            longitude: 0,
            amenities: []
         }} onSubmit={this.submit}>
             {
                 () => (
                     <div>
                         <Form style={{ display: 'flex' }}>
                            <div style={{ width: 400, margin: 'auto' }}>
                                <h1>Login</h1>
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

                                <Field
                                    name="price"
                                    placeholder="Price"
                                    component={InputField}
                                />

                                <Field
                                    name="beds"
                                    placeholder="Beds"
                                    component={InputField}
                                />

                                <Field
                                    name="guests"
                                    placeholder="Guests"
                                    component={InputField}
                                />

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

                                <FormItem>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                    >
                                        Create listing 
                                    </Button>
                                </FormItem>
                            </div>
                        </Form>
                     </div>
                 )
             }
         </Formik>
        );
    }
}