import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ViewMessages } from '@abb/controller';
import { InputBar } from './InputBar';

export class MessageConnector extends React.PureComponent<
  RouteComponentProps<{
    listingId: string;
  }>
> {
  unsubscribe: () => void;

  render() {
    const {
      match: { params: { listingId } }
    } = this.props;

    return (
      <ViewMessages listingId={listingId}>
          {({ loading, messages, subscribe }) => {
            if (loading) {
              return <div>loading...</div>
            }

            if (! this.unsubscribe) {
              this.unsubscribe = subscribe();
            }
            
            /**
             * @todo: Dirty I know, :(
             * Imma clean this up later, for now I'm just making sure this worrks
             */
            // tslint:disable-next-line: jsdoc-format
            return (
              <>
                {messages.map((m, i) => <div key={`${i}-ml`}>{m.text}</div>)}
                <InputBar listingId={listingId} />
              </>
            )
          }}
      </ViewMessages>
    )
  }
}
