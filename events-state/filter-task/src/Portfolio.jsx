import React from 'react';
import Container from 'react-bootstrap/Container';
import Toolbar from './components/Toolbar';
import ProjectList from './components/ProjectList';
import projects from './config/projects';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'All',
      projects
    };
  }

  filterProjects(project) {
    let filter;
    if (project === 'All') {
      filter = projects;
    } else {
      filter = projects.filter(elem => elem.category === project);
    }
    this.setState({ selected: project, projects: filter });
  }

  render() {
    return (
      <Container>
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={this.state.selected}
          onSelectFilter={(filter) => { this.filterProjects(filter.target.textContent); }} />
        <ProjectList projects={this.state.projects} />
      </Container>
    );
  }
}

export default Portfolio
