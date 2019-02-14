import React, { Component } from 'react';
import MapQuakeData from '../MapQuakeData/MapQuakeData'
import MapData from '../MapData/MapData'
export default class EarthquakeFetch extends Component {
 state = {
    earthquakes: []
  }
  getEarthQuakes = async ()=>{
    try{
        const earthquakesApi = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02')
        const earthquakeData = await earthquakesApi.json()
        this.setState( { earthquakes:earthquakeData.features} )
    }
    catch(err){
    	console.log(err, 'Your earthquakes ERRORED')
    	return err
    }
  }
  componentDidMount(){
      // this.setState((previousState)=>{
      //     pokemons:previousState.pokemons.filter((pokemons,i)=> i !==index)
      //   }
      // )
      this.getEarthQuakes().then((data)=> console.log(data, 'gotemAll'))
  }
  render() {    return (
      <div className="app">
        <div className="mapContainer">
          <MapData earthquakes= {this.state.earthquakes}/>
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
            <MapQuakeData earthquakes = {this.state.earthquakes}/>
        </div>
      </div>
    );
  }
}