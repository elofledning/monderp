import React from 'react';
import { MapView } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 56.162939,
          longitude: 10.203921,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    );
  }
}
