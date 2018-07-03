import * as React from 'react';
import { Button } from 'react-native-elements';

export class RegisterConnector extends React.PureComponent {
    onPress = () => {
        console.log('Button pressed');
    }

    render() {
        return (<Button title='BUTTON' onPress={this.onPress} />);
    }
}