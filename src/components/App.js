import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

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
        <div>
          { this.state.contests.map(contest => 
          <ContestPreview key={ contest.id } { ...contest } />
          ) }
        </div>
      </div>
    );
  }
}

export default App;
