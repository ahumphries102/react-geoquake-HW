import React, { Component } from 'react';

class App extends Component {
 state = {

  }
  getEarthQuakes = async ()=>{
    try{
      const earthquakesApi = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02')
      const earthquakeData = await earthquakeApijson()
    }
  }

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          ...put Map Component here...
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          ...put Quakes Component here...
        </div>
      </div>
    );
  }
}

export default App;