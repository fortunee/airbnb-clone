import * as React from 'react';
import { LoginView } from './view/LoginView';
import { LoginController } from '@abb/controller';
import { SecureStore } from 'expo';
import { SID_KEY } from './../shared/constant';

export class LoginConnector extends React.PureComponent {
    saveSessionId = (sid: string) => {
        SecureStore.setItemAsync(SID_KEY, sid);
    }

    render() {
        return (
            <LoginController onSessionId={this.saveSessionId}>
                {({ submit }) => <LoginView submit={submit} />}
            </LoginController>
        )
    }
};
