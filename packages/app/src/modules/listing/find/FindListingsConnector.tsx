import * as React from 'react';
import { Text, ScrollView } from 'react-native';
import { withFindListings, WithFindListings } from '@abb/controller';
import { Card } from 'react-native-elements';

class FindListingComponent extends React.PureComponent<WithFindListings> {
    render() {
        const { listings } = this.props;

        return (
            <ScrollView style={{ marginTop: 20 }}>
                {
                    listings.map((listing) => (
                        <Card
                            key={`${listing.id}-listing`}
                            title={listing.name}
                            image={listing.pictureUrl ? { uri: listing.pictureUrl } : undefined }
                        >
                            <Text>Owner: {listing.owner.email}</Text>
                        </Card>
                    ))
                }
            </ScrollView>
        );
    }
}

export const FindListingsConnector = withFindListings(FindListingComponent);