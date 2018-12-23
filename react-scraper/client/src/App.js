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
        <ul>
          {
            this.state.scrapeResults.map(r => (
              <li key={r.title}>
                <p>Title: {r.title}</p>
                <a href={r.link} >Click Me!</a>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
