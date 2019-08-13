import * as React from 'react';
import { LoginView } from './view/LoginView';
import { LoginController } from '@abb/controller';
// import { SecureStore } from 'expo';
// import { SID_KEY } from './../shared/constant';
import { RouteComponentProps } from 'react-router-native';

export class LoginConnector extends React.PureComponent<RouteComponentProps<{}>> {
    // saveSessionId = (sid: string) => {
    //     SecureStore.setItemAsync(SID_KEY, sid);
    // }

    onFinish = () => {
        this.props.history.push('/me');
    }

    render() {
        return (
            // <LoginController onSessionId={this.saveSessionId}>
            <LoginController>
                {({ submit }) => <LoginView onFinish={this.onFinish} submit={submit} />}
            </LoginController>
        )
    }
};
