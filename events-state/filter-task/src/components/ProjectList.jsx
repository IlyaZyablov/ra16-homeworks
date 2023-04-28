import PropTypes from 'prop-types';
import React from 'react';

class ProjectList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.projects.map(elem =>
          <img
          className='me-2'
            key={elem.id}
            src={elem.img}
          >
          </img>
        )}
      </div>
    );
  }
}

ProjectList.propTypes = {
  projects: PropTypes.array,
};

export default ProjectList;
