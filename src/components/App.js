import React from 'react';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="menu">
          <Header tagline="Javascript Content As A Service" />
        </div>
      </div>
    )
  }
}

export default App;
