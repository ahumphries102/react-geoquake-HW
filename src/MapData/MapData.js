import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 30.2682,
      lng: -97.74295
    },
    zoom: 11
  };

  render() {
      const markersData = this.props.earthquakes.map((earthquakes, i)=>{
        return <Marker
          key={i}
          lat={earthquakes.geometry.coordinates[1]}
          lng={earthquakes.geometry.coordinates[0]}
          text={earthquakes.properties.title}
          />
        })
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {markersData}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;