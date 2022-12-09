import React from 'react';
// import map from '../images/map.png';
// import restaurantData from '../data/restaurants.json';
// import locationData from '../data/location.json';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      locationSearch: '',
      // restaurantData: restaurantData,
      // locationData: {},
      weatherData: [],
      error: null,
    }
  }

saveCity = (e) => {
  console.log(e.target.value)
  this.setState ({
    locationSearch: e.target.value
  })
}
//query location IQ for geoloaciton data
handleLocationSearch =async (e) => {
  e.preventDefault();
  let request = {
    method: "GET",
    url: `https://us1.locationiq.com/v1/search?key=${ACCESS_KEY}&q=${e.target.search.value}&format=json`
  }

  try {
    let response = await axios (request);
    console.log('this is our response', response.data[0]);
    
    this.setState({
      locationSearch: e.target.value,
      locationData: response.data[0],

    })
    } catch (err) {
      console.log(err);
      this.handleError(err.response.data);
    }

  };

  handleError = () => {
    this.setState({ error: null });
  } 

    render() {
      console.log(this.state);
      return (
        <div id="city-search">
          <form onSubmit={this.handleLocationSearch}>
            <label>Search for a location</label>
            <input type="text" name="search" placeholder="Enter City here" />
            <button type="submit">Explore!</button>
          </form>
          {this.state.error
            ? <Alert>
              {JSON.stringify(this.state.error)}
              <Button onClick={() => this.handleError()}>Thanks go away</Button>
            </Alert>
            : null
          }
          {this.state.locationData
            ? <p>{this.state.locationData.display_name}</p>
            : <p>Please search for a city!</p>
          }
          </div>
      )
    }
  }

export default Search;