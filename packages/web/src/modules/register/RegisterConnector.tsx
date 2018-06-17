import * as React from 'react';
import { RegisterView } from './views/RegisterView';

export class RegisterConnector extends React.PureComponent {
    async handleSubmit (values: any) {
        console.log(values);
        return null;
    }

    render() {
        return (<RegisterView submit={this.handleSubmit}/>);
    }
}