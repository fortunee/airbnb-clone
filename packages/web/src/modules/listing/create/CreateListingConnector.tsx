import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Form as AntForm, Button } from "antd";
import { Form, Formik } from 'formik';
import { FormSectionOne } from './view/FormSectionOne';
import { FormSectionTwo } from './view/FormSectionTwo';
import { FormSectionThree } from './view/FormSectionThree';

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

export class CreateListingConnector extends React.PureComponent<RouteComponentProps<{}>, State> {

    state = {
        formSection: 0
    }

    submit = (values: any) => {
        console.log('Values ', values)
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
                 () => (
                     <div>
                         <Form style={{ display: 'flex' }}>
                            <div style={{ width: 400, margin: 'auto' }}>
                                <h1>Create Listing</h1>
                                
                                
                                {formSections[this.state.formSection]}
                                

                                <FormItem>
                                    {this.state.formSection === formSections.length - 1 ? 
                                    (<Button
                                        type="primary"
                                        htmlType="submit"
                                    >
                                        Create listing 
                                    </Button>) :
                                    (<Button
                                        type="primary"
                                        onClick={this.nextSection}
                                    >
                                        Next
                                    </Button>)}
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