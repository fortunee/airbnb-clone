import * as React from 'react';
import { graphql, ChildMutateProps } from 'react-apollo';
import gql from 'graphql-tag';
import { RegisterMutation, RegisterMutationVariables } from '../../schemaTypes';
import { normalizeErrors } from '../../utils/normalizeErrors';
import { NormalizeErrorMap } from '../../types/NormalizeErrorMap';

interface Props {
    children: (
        data: { submit: (values: any) => Promise<NormalizeErrorMap | null> }
    ) => JSX.Element | null
}

class Register extends React.PureComponent<ChildMutateProps<Props, RegisterMutation, RegisterMutationVariables>> {
    submit = async (values: any) => {
        console.log(values);
        const {data: { register }} = await this.props.mutate({
            variables: values
        });
        console.log('Response ', register);

        if (register) {
            normalizeErrors(register);
        }

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

