import * as React from 'react';
import { RegisterView } from './view/RegisterView';
import { RegisterController } from '@abb/controller';

export class RegisterConnector extends React.PureComponent {
    onSubmit = async (values: any) => {
        console.log(values);

        return null;
    }

    render() {
        return (
            <RegisterController>
                {
                    () =>  <RegisterView submit={this.onSubmit} />
                }
            </RegisterController>
        )
    }
}