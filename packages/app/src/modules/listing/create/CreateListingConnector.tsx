import * as React from 'react'; 
import { Formik } from 'formik';
import { withCreateListing, WithCreateListing } from '@abb/controller';
import { RouteComponentProps } from 'react-router-native';
import { Text } from 'react-native';

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

export class CreateListingComponent extends React.PureComponent<RouteComponentProps<{}> & WithCreateListing> {


    submit = async (values: FormValues /*{ setSubmitting }: FormikActions<FormValues>*/) => {
        console.log(values);
        // await this.props.createListing(values);
        // setSubmitting(false);
    }

    render() {
        return (
            <Formik<{}, FormValues> initialValues={{
                name: '',
                picture: null,
                category: '',
                description: '',
                price: '0',
                beds: '0',
                guests: '0',
                latitude: '0',
                longitude: '0',
                amenities: []
            }} onSubmit={this.submit}>
                {
                    ({ isSubmitting, values }) => (
                        <Text>Hello Listing form</Text>
                    )
                }
            </Formik>
        );
    }
}

export const CreateListingConnector = withCreateListing(CreateListingComponent);
