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
  static propTypes = {
    initialData: PropTypes.object.isRequired
  };
  
  state = this.props.initialData;

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
    pushState({ currentContestId: contestId}, `/contests/${contestId}`);
    //lookup contest
    api.fetchContest(contestId).then(contest => {
      this.setState({
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest
        }
      })
    });
  };

  /**
   * Fetch requested contests
   * @return {ContestList} from the server
   */
  fetchContestList = () => {
    pushState({ currentContestId: null}, '/');
    //lookup contest
    api.fetchContestList().then(contests => {
      this.setState({
        currentContestId: null,
        contests
      })
    });
  };

  /**
   * Return page header
   * @return { String } page header
   */
  pageHeader(){
    if(this.state.currentContestId){
      return this.currentContest().contestName;
    }

    return 'Naming contests';
  }

  /**
   * Return current contest
   * @return { Contest } that's current
   */
  currentContest(){
    return this.state.contests[this.state.currentContestId];
  }

  /** 
   * Display current content 
   * @return { Component } that's relevant
  */
  currentContent() {
    if (this.state.currentContestId){
      return <Contest contestListClick={this.fetchContestList}
        {...this.currentContest()} />
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
        <Header message={ this.pageHeader()} />
        { this.currentContent() }
      </div>
    );
  }
}

export default App;
