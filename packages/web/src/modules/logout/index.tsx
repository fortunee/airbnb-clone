import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { LogoutController } from '@abb/controller';
import CallLogout from '../logout/CallLogout';

class LogoutComponent extends React.PureComponent<RouteComponentProps<{}>> {
  onFinish = () => {
    this.props.history.push('/login');
  }
  render() {
    return (
     <LogoutController>
       {({ logout }) => (<CallLogout logout={logout} onFinish={this.onFinish} />)}
       </LogoutController>
    )
  }
}

export const LogoutConnector = LogoutComponent;
