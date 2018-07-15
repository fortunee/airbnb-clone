import * as React from 'react';
import { ChangePasswordView } from './view/ChangePasswordView';


export class ChangePasswordConnector extends React.PureComponent {
    submit = async (values: any) => {
        console.log(values);
        return null;
    }

    render() {
        return (
            <ChangePasswordView submit={this.submit} />
        );
    }
};
