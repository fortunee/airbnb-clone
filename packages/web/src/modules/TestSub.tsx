import * as React from 'react';
import { Subscription } from 'react-apollo';
import gql from 'graphql-tag';

const sub = gql`
subscription {
    newMessage (listingId: "617e2805-e3c1-4621-a53e-defc22833d7f") {
      text
      user {
        id
        email
      }
      listingId
    }
  }  
`;
export class TestSub extends React.PureComponent {
    render() {
        return (
            <Subscription subscription={sub}>
                {(data: any) => {
                    return data
                }}
            </Subscription>
        );
    }
}
