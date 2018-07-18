import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ChangePasswordController } from '@abb/controller';

import { ChangePasswordView } from './view/ChangePasswordView';


export class ChangePasswordConnector extends React.PureComponent<RouteComponentProps<{ key: string }>> {
    submit = async (values: any) => {
        console.log(values);
        return null;
    }

    render() {
        const { match: { params: { key } } } = this.props;
        console.log(key);
        return (
            <ChangePasswordController>
            {
               ({ submit }) => (
                <ChangePasswordView key={key} submit={this.submit} />
                )
            }
            </ChangePasswordController>
        );
    }
};
