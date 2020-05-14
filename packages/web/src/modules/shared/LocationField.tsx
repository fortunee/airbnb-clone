import * as React from 'react';
import Geosuggest, { Suggest } from 'react-geosuggest';
import { FieldProps } from 'formik';

export class LocationField extends React.PureComponent<FieldProps<any>, & {}> {
  onSuggestSelect = (place: Suggest) => {
    console.log(place)
  }

  render() {
    return (
      <Geosuggest
        placeholder="Start typing!"
        onSuggestSelect={this.onSuggestSelect}
        location={new google.maps.LatLng(53.558572, 9.9278215)}
        radius={20} />
    )
  }
}
