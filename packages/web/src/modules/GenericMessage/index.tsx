import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export class GenericMesssageComponent extends React.PureComponent<RouteComponentProps<{}>> {
    render() {
        const { location: { state } } = this.props;
        return (
            <div>
                <h2>{state && state.message ? state.message : 'hello'}</h2>
            </div>
        );
    }
};
