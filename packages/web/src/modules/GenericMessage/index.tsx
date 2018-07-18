import * as React from 'react';

export class GenericMesssageComponent extends React.PureComponent {
    render() {
        console.log(this.props);

        return <div>hi</div>;
    }
};
