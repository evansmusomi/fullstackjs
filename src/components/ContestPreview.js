import React from 'react';
import PropTypes from 'prop-types';

const ContestPreview = (contest) => (
  <div className="ContestPreview">
    <div className="category-name">{ contest.categoryName }</div>
    <div className="contest-name">{ contest.contestName }</div>
  </div>
);

ContestPreview.propTypes = {
  contest: PropTypes.object
}
export default ContestPreview;
