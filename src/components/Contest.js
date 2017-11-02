import React, { Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Represents a Contest
 */
class Contest extends Component{
  /**
   * Render contest
   * @returns {html} component HTML
   */
  render(){
    return(
      <div className="Contest">
        <div className="description">
        { this.props.description }
        </div>
        <div className="home-link link" onClick={this.props.contestListClick}>
          Contest List
        </div>
      </div>
    );
  }
}

Contest.propTypes = {
  description: PropTypes.string.isRequired,
  contestListClick: PropTypes.func.isRequired
};

export default Contest;