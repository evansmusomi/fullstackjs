import React from 'react';
import Header from './Header';

/**
 * Compose App component
 */
class App extends React.Component {
  /**
   * Render app
   * @returns {html} component HTML
   */
  render() {
    return (
      <div className="App">
        <Header message='Naming Contests' />
        <div>
          ---
        </div>
      </div>
    );
  }
}

export default App;
