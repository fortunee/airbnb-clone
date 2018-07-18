import * as React from 'react';
import { LoginView } from './view/LoginView';
import { LoginController } from '@abb/controller';
import { RouteComponentProps } from 'react-router-dom';

export class LoginConnector extends React.PureComponent<RouteComponentProps<{}>> {
    onFinish = () => {
        this.props.history.push('/')
    }
    render() {
        return (
            <LoginController>
            {({ submit }) => <LoginView onFinish={this.onFinish} submit={submit} />}
            </LoginController>
        );
    }
};
