import * as React from 'react';
import Geosuggest, { Suggest } from 'react-geosuggest';
import { FieldProps } from 'formik';

import './locationField.css'

export class LocationField extends React.PureComponent<FieldProps<any>, & {}> {
  onSuggestSelect = (place: Suggest) => {
    const { location: { lat, lng }} = place;
    const { form: { setValues, values } } = this.props;

    setValues({
      ...values,
      latitude: lat,
      longitude: lng
    })
  }

  render() {
    const {
      form: { values },
    } = this.props;

    return (
      <>
      <Geosuggest
        placeholder="Start typing!"
        onSuggestSelect={this.onSuggestSelect}
        location={new google.maps.LatLng(53.558572, 9.9278215)}
        radius={20} />
        <div>{values.longitude}</div>
        <div>{values.latitude}</div>
      </>
    )
  }
}
