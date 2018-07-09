import * as React from 'react';
import { ForgotPasswordView } from './view/ForgotPasswordView';

export class LoginConnector extends React.PureComponent {
    dummySubmit = async (values: any) => {
        console.log(values);

        return null;
    }
    render() {
        return (
            <ForgotPasswordView submit={this.dummySubmit} />
        );
    }
};
