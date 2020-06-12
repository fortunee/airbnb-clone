import * as React from "react";
import { Text, ScrollView, TextInput, SafeAreaView } from "react-native";
import { SearchListings } from "@abb/controller";
import { Card } from "react-native-elements";

interface State {
  name: string;
}

export class FindListingsConnector extends React.PureComponent<{}, State> {
  state = {
    name: "",
  };

  render() {
    const { name } = this.state;

    return (
      <React.Fragment>
        <SafeAreaView />
        <TextInput
          style={{ fontSize: 20, width: "100%" }}
          placeholder="Search listing..."
          onChangeText={(text) => this.setState({ name: text })}
          value={name}
        />
        <SearchListings variables={{ input: { name }, limit: 5, offset: 0 }}>
          {({ listings }) => (
            <ScrollView style={{ marginTop: 20 }}>
              {listings.map((listing) => (
                <Card
                  key={`${listing.id}-listing`}
                  title={listing.name}
                  image={
                    listing.pictureUrl ? { uri: listing.pictureUrl } : undefined
                  }
                >
                  <Text>Owner: {listing.owner.email}</Text>
                </Card>
              ))}
            </ScrollView>
          )}
        </SearchListings>
      </React.Fragment>
    );
  }
}
