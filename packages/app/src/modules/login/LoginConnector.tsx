import * as React from 'react';
import { LoginView } from './view/LoginView';
import { LoginController } from '@abb/controller';
import { SecureStore } from 'expo';

export class LoginConnector extends React.PureComponent {
    saveSessionId = (sid: string) => {
        SecureStore.setItemAsync('sid', sid);
    }

    render() {
        return (
            <LoginController onSessionId={this.saveSessionId}>
                {({ submit }) => <LoginView submit={submit} />}
            </LoginController>
        )
    }
};
