import * as React from 'react';
import { graphql, ChildMutateProps, withApollo, WithApolloClient } from 'react-apollo';
import gql from 'graphql-tag';
import { LoginMutation, LoginMutationVariables } from '../../schemaTypes';
import { normalizeErrors } from '../../utils/normalizeErrors';
import { NormalizeErrorMap } from '../../types/NormalizeErrorMap';

interface Props {
    onSessionId?: (sessionId: string) => void, 
    children: (
        data: { submit: (values: LoginMutationVariables) => Promise<NormalizeErrorMap | null> }
    ) => JSX.Element | null
}

class Login extends React.PureComponent<ChildMutateProps<WithApolloClient<Props>, LoginMutation, LoginMutationVariables>> {
    submit = async (values: LoginMutationVariables) => {
        console.log(values);
        const { data: { login: { errors, sessionId } } } = await this.props.mutate({
            variables: values
        });
        console.log('Response ', errors, sessionId);

        if (errors) {
            return normalizeErrors(errors);
        }

        if (sessionId && this.props.onSessionId) {
            this.props.onSessionId(sessionId);
        }

        return null;
    }

    render() {
        return this.props.children({ submit: this.submit });
    }
};

const loginMutation = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(email: $email, password:  $password) {
            errors {
                path
                message
            }
            sessionId
        }
    }
`;

export const LoginController = graphql<Props, LoginMutation, LoginMutationVariables>(loginMutation)(withApollo<Props>(Login as any));

