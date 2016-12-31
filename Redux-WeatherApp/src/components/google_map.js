'use strict';

import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

const Map = (props) => {
  return (
    <GoogleMapLoader
      containerElement={ <div style={{height: '100%'}} /> }
      googleMapElement={
        <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lng}} />
      }
    />
  );
}

export default Map;
