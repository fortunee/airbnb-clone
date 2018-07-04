import * as React from 'react';
// import { RegisterController } from '@abb/controller';
import { LoginView } from './view/LoginView';

export class LoginConnector extends React.PureComponent {
    onSubmit = async (values: any) => {
        console.log(values);

        return null;
    }

    render() {
        return (
            <LoginView submit={this.onSubmit} />
        )
    }
}