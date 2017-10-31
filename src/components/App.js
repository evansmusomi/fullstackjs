import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import PropTypes from 'prop-types';
import * as api from '../api';

/* 
 * Track navigation history
 */
const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

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
   * Fetch requested contest
   * @param {number} contestId
   * @return {void}
   */
  fetchContest = (contestId) => {
    pushState({ currentContestId: contestId}, `/contest/${contestId}`);
    //lookup contest
    api.fetchContest(contestId).then(contest => {
      this.setState({
        pageHeader: contest.contestName,
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest
        }
      })
    });
  }

  /** 
   * Display current content 
   * @return { Component } that's relevant
  */
  currentContent() {
    if (this.state.currentContestId){
      return <Contest {...this.state.contests[this.state.currentContestId]} />
    } 

    return <ContestList onContestClick={this.fetchContest} contests={ this.state.contests} />;
  }

  /**
   * Render app
   * @returns {html} component HTML
   */
  render() {
    return (
      <div className="App">
        <Header message={ this.state.pageHeader} />
        { this.currentContent() }
      </div>
    );
  }
}

App.propTypes = {
  initialContests: PropTypes.object.isRequired
}

export default App;
