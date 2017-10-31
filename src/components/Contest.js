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
        { this.props.description }
      </div>
    );
  }
}

Contest.propTypes = {
  description: PropTypes.string.isRequired
};

export default Contest;