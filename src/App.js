import React from 'react';
import axios from 'axios'
import './App.css';

// import Error from './components/Error'
class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      searchCompleted: false,
      searchQuery: '',
      location: {},
      cityName: '',
      latitude: '',
      longitude: '',

    };
  }
  showSearch = () => {
    this.setState({ searchCompleted: false });
  }


export default App;
