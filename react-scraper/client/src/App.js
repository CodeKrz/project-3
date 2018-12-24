import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    scrapeResults: []
  }

  componentDidMount() {
    axios.get('/api/scrape')
      .then(res => {
        this.setState({ scrapeResults: res.data });
      })
      .catch(e => console.error(e));
  }

  render() {
    return (
      <div className='app'>
      <h1>Sports</h1>
      <hr></hr>
        <ul>
          {
            this.state.scrapeResults.map(r => (
              <li key={r.title}>
              <br></br>
                <a href={r.link} >{r.title}</a>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;