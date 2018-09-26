import * as React from 'react';
import { Form as AntForm, Icon, Button } from "antd";
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
                                    name="email"
                                    prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} /> as any}
                                    type="email"
                                    placeholder="Email"
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