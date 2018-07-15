import * as React from 'react';
import { ChangePasswordView } from './view/ChangePasswordView';
import { ChangePasswordController } from '@abb/controller';


export class ChangePasswordConnector extends React.PureComponent {
    render() {
        return (
            <ChangePasswordController>
                {
                    ({ submit }) => <ChangePasswordView submit={submit} />
                }
            </ChangePasswordController>
        );
    }
};
