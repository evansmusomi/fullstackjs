import React, { Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Represents a contest Preview
 */
class ContestPreview extends Component{
  /**
   * Handle click event
   * @returns {handler} click event
   */
  handleClick = () => {
    this.props.onClick(this.props.id);
  };

  /**
   * Render html
   * @returns {html} component HTML
   */
  render(){
    return (
      <div className="link ContestPreview" onClick={this.handleClick}>
        <div className="category-name">{ this.props.categoryName }</div>
        <div className="contest-name">{ this.props.contestName }</div>
      </div>
    );
  }
}

ContestPreview.propTypes = {
  id: PropTypes.number.isRequired,
  categoryName: PropTypes.string.isRequired,
  contestName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
export default ContestPreview;
