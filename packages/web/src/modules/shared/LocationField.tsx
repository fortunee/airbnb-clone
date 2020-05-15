import * as React from "react";
import Geosuggest, { Suggest } from "react-geosuggest";
import { FieldProps } from "formik";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

import "./locationField.css";

interface IDefaultCenter {
  lat: number;
  lng: number;
}

const MapWithAMarker = withGoogleMap<{
  defaultCenter: IDefaultCenter;
  lat: number;
  lng: number;
  onClick: (e: google.maps.MouseEvent) => void;
}>((props) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={props.defaultCenter}
    onClick={props.onClick}
  >
    <Marker position={{ lat: props.lat, lng: props.lng }} />
  </GoogleMap>
));

interface IState {
  defaultCenter: IDefaultCenter | null;
}

export class LocationField extends React.PureComponent<
  FieldProps<any>,
  {},
  IState
> {
  state: IState = {
    defaultCenter: null,
  };

  onSuggestSelect = (place: Suggest) => {
    const {
      location: { lat, lng },
    } = place;
    const {
      form: { setValues, values },
    } = this.props;

    setValues({
      ...values,
      latitude: lat,
      longitude: lng,
    });

    this.setState({
      defaultCenter: {
        lat,
        lng,
      },
    });
  };

  render() {
    const {
      form: { values, setValues },
    } = this.props;

    return (
      <>
        <Geosuggest
          placeholder="Start typing!"
          onSuggestSelect={this.onSuggestSelect}
          location={new google.maps.LatLng(53.558572, 9.9278215)}
          radius={20}
        />
        <div>{values.longitude}</div>
        <div>{values.latitude}</div>

        {this.state.defaultCenter && (
          <MapWithAMarker
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            defaultCenter={this.state.defaultCenter}
            lat={values.latitude}
            lng={values.longitude}
            onClick={(e) => {
              const lat = e.latLng.lat();
              const lng = e.latLng.lng();

              setValues({
                ...values,
                longitude: lng,
                latitude: lat,
              });
            }}
          />
        )}
      </>
    );
  }
}
