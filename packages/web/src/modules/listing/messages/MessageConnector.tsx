import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { ViewMessages } from '@abb/controller';
import { InputBar } from './InputBar';

export class MessageConnector extends React.PureComponent<
  RouteComponentProps<{
    listingId: string;
  }>
> {
  render() {
    const {
      match: { params: { listingId } }
    } = this.props;

    return (
      <ViewMessages listingId={listingId}>
          {({ loading, messages }) => {
            if (loading) {
              return <div>loading...</div>
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
