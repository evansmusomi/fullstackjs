import React from 'react';
import Header from './Header';

/**
 * Compose App component
 */
class App extends React.Component {
  state = { 
    pageHeader: 'Naming Contests'
  };

  /**
   * Render app
   * @returns {html} component HTML
   */
  render() {
    return (
      <div className="App">
        <Header message={ this.state.pageHeader} />
        <div>
          ...
        </div>
      </div>
    );
  }
}

export default App;
