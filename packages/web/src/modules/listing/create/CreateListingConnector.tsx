import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Form as AntForm, Button } from "antd";
import { Form, Formik, FormikActions } from 'formik';
import { FormSectionOne } from './view/FormSectionOne';
import { FormSectionTwo } from './view/FormSectionTwo';
import { FormSectionThree } from './view/FormSectionThree';
import { withCreateListing, NewPropsCreateListing } from '@abb/controller';

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

interface State {
    formSection: number;
}

// tslint:disable-next-line:jsx-key
const formSections = [<FormSectionOne />, <FormSectionTwo />, <FormSectionThree />];

export class CreateListingComponent extends React.PureComponent<RouteComponentProps<{}> & NewPropsCreateListing, State> {

    state = {
        formSection: 0
    }

    submit = async (values: FormValues, { setSubmitting }: FormikActions<FormValues>) => {
        await this.props.createListing(values);
        setSubmitting(false);
    }

    nextSection = () => this.setState(state => ({ formSection: state.formSection + 1 }));

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
                 ({ isSubmitting }) => (
                     <div>
                         <Form style={{ display: 'flex' }}>
                            <div style={{ width: 400, margin: 'auto' }}>
                                <h1>Create Listing</h1>
                                {formSections[this.state.formSection]}
                                <FormItem>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "flex-end"
                                        }}
                                    >
                                        {this.state.formSection === formSections.length - 1 ? 
                                        (
                                            <div>
                                                <Button
                                                    type="primary"
                                                    htmlType="submit"
                                                    disabled={isSubmitting}
                                                >
                                                    Create listing 
                                                </Button>
                                            </div>
                                        ) :
                                        (
                                            <Button
                                                type="primary"
                                                onClick={this.nextSection}
                                            >
                                                Next
                                            </Button>
                                        )}
                                    </div>
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

export const CreateListingConnector = withCreateListing(CreateListingComponent)