import * as React from 'react';
import { Card } from 'antd';
import { withFindListings, WithFindListings } from '@abb/controller';
import { Link } from 'react-router-dom';

const { Meta } = Card;

class FindListingsComponent extends React.PureComponent<WithFindListings> {
    render() {
        const { listings, loading } = this.props;

        return (
            <div>
                {loading && <div>...loading</div>}
                {listings.map(listing => 
                    (<Card
                            key={`${listing.id}-card`}
                            hoverable={true}
                            style={{ width: 240 }}
                            cover={listing.pictureUrl && <img alt="example" src={listing.pictureUrl} />}
                    >
                        <Link to={`/listing/${listing.id}`}>
                            <Meta
                                title={listing.name}
                                description={listing.owner.email}
                            />
                        </Link>
                    </Card>))}
            </div>
        );
    }
}

export const FindListingsConnector = withFindListings(FindListingsComponent);