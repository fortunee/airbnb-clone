import * as React from 'react';
import { graphql, ChildMutateProps } from 'react-apollo';
import gql from 'graphql-tag';
import { RegisterMutation, RegisterMutationVariables } from './../../schemaTypes';

interface Props {
    children: (
        data: { submit: (values: any) => Promise<null> }
    ) => JSX.Element | null
}

class Register extends React.PureComponent<ChildMutateProps<Props, RegisterMutation, RegisterMutationVariables>> {
    submit = async (values: any) => {
        console.log(values);
        const response = await this.props.mutate({
            variables: values
        });
        console.log('Response ', response);
        return null;
    }

    render() {
        return this.props.children({ submit: this.submit });
    }
};

const registerMutation = gql`
    mutation RegisterMutation($email: String!, $password: String!) {
        register(email: $email, password:  $password) {
        path,
        message
        }
    }
`;

export const RegisterController = graphql(registerMutation)(Register);

