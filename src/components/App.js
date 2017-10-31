import React from 'react';
import Header from './Header';
import ContestList from './ContestList';

/**
 * Compose App component
 */
class App extends React.Component {
  state = { 
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };

  /**
   * Update mounted component
   * @returns {state} updated state
   */
  componentDidMount() {
  }

  /**
   * Render app
   * @returns {html} component HTML
   */
  render() {
    return (
      <div className="App">
        <Header message={ this.state.pageHeader} />
        <ContestList contests={ this.state.contests} />
      </div>
    );
  }
}

export default App;
