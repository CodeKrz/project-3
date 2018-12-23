import React from 'react';
import axios from 'axios';

import './scrape.css';

class Scrape extends React.Component {
  state = {
    hasScraped: false,
  }

  startScrape = () => {
    axios.post('/api/scrape')
      .then(() => {
        this.setState({ hasScraped: true });
      })
      .catch(e => console.error(e));
  }

  render() {
    return (
      <div className='wrapper'>
        {this.state.hasScraped
            ? <p>Scrape Complete!</p>
            : <button className='scrape-button' onClick={this.startScrape}>Scrape!</button>}
      </div>
    );
  }
}
export default Scrape;
