import * as React from 'react';
import { graphql, ChildMutateProps } from 'react-apollo';
import gql from 'graphql-tag';
import {
    ForgotPasswordChangeMutation,
    ForgotPasswordChangeMutationVariables
} from '../../schemaTypes';

interface Props {
    children: (
        data: {
            submit: (values: ForgotPasswordChangeMutationVariables) => Promise<null> 
        }
    ) => JSX.Element | null
}

class ChangePassword extends React.PureComponent<
    ChildMutateProps<
            Props,
            ForgotPasswordChangeMutation,
            ForgotPasswordChangeMutationVariables
        >
    > {
    submit = async (values: ForgotPasswordChangeMutationVariables) => {
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

const forgotPasswordChangeMutation = gql`
    mutation ForgotPasswordChangeMutation($newPassword: String!, $key: String!) {
        forgotPasswordChange(newPassword: $newPassword, key: $key) {
        message
        path
        }
    }
`;

export const ChangePasswordController = graphql<
    Props,
    ForgotPasswordChangeMutation,
    ForgotPasswordChangeMutationVariables
>(forgotPasswordChangeMutation)(ChangePassword);

