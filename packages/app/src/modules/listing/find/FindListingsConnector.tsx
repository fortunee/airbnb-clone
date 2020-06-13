import * as React from "react";
import {
  Text,
  ScrollView,
  TextInput,
  SafeAreaView,
  View,
  Slider,
} from "react-native";
import { SearchListings } from "@abb/controller";
import { Card } from "react-native-elements";

interface State {
  name: string;
  guests: number;
  beds: number;
}

export class FindListingsConnector extends React.PureComponent<{}, State> {
  state = {
    name: "",
    guests: 1,
    beds: 1,
  };

  render() {
    const { beds, guests, name } = this.state;

    return (
      <React.Fragment>
        <SafeAreaView />
        <TextInput
          style={{ fontSize: 20, width: "100%" }}
          placeholder="Search listing..."
          onChangeText={(text) => this.setState({ name: text })}
          value={name}
        />
        <View style={{ alignItems: "stretch", justifyContent: "center" }}>
          <Slider
            value={guests}
            onValueChange={(value) => this.setState({ guests: value })}
            step={1}
            maximumValue={5}
          />
          <Text>Guests: {guests}</Text>
        </View>
        <View>
          <Slider
            value={beds}
            onValueChange={(value) => this.setState({ beds: value })}
          />
          <Text>Beds: {beds}</Text>
        </View>
        <SearchListings
          variables={{ input: { name, guests, beds }, limit: 5, offset: 0 }}
        >
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
