import * as React from 'react';
import { graphql, ChildProps } from 'react-apollo';
import { RouteProps, Route, RouteComponentProps, Redirect } from 'react-router';
import gql from 'graphql-tag';
import { MeQuery } from '../../schemaTypes';

type Props = RouteProps;

export class AuthRouteComponent extends React.PureComponent<ChildProps<Props, MeQuery>> {
    renderRoute = (routeProps: RouteComponentProps<{}>) => {
        const { data, component } = this.props;

        if (!data || data.loading) {
            // Display screen loader
            return null;
        }

        if (!data.me) {
            // Redirect user to login
            return <Redirect to='/login' />;
        }

        const Component = component as any;

        return <Component {...routeProps} />;
        
    }


    render() {
        const { data: _, component: __, ...rest } = this.props;
        return (<Route {...rest} render={this.renderRoute}/>);
    }
}

const meQuery = gql`
query MeQuery {
    me {
        email
    }
}
`;

export const AuthRoute = graphql<Props, MeQuery>(meQuery)(AuthRouteComponent);