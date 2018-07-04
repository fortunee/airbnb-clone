import * as React from 'react';
import { RegisterView } from './view/RegisterView';
import { RegisterController } from '@abb/controller';

export class RegisterConnector extends React.PureComponent {
    render() {
        return (
            <RegisterController>
                {({ submit }: { submit: any}) => <RegisterView submit={submit}/>}
            </RegisterController>
        );
    }
};
