import * as React from 'react';
import { graphql, ChildMutateProps } from 'react-apollo';
import gql from 'graphql-tag';
import { SendForgotPasswordMutation, SendForgotPasswordMutationVariables } from '../../schemaTypes';

interface Props {
    children: (
        data: { submit: (values: any) => Promise<null> }
    ) => JSX.Element | null
}

class ForgotPassword extends React.PureComponent<ChildMutateProps<Props, SendForgotPasswordMutation, SendForgotPasswordMutationVariables>> {
    submit = async (values: SendForgotPasswordMutationVariables) => {
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

const forgotPasswordMutation = gql`
    mutation SendForgotPasswordMutation($email: String!) {
        sendForgotPasswordEmail(email: $email)
    }
`;

export const ForgotPasswordController = graphql<
    Props,
    SendForgotPasswordMutation,
    SendForgotPasswordMutationVariables
>(forgotPasswordMutation)(ForgotPassword);

