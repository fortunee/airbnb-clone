import * as React from 'react';
import { RegisterView } from './views/RegisterView';
import { RegisterController } from '@abb/controller';

export class RegisterConnector extends React.PureComponent {
    render() {
        return (
            <RegisterController>
                {({ submit }) => <RegisterView submit={submit}/>}
            </RegisterController>
        );
    }
};
