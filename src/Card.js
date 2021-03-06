import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  onMouseEnter() {
    this.setState({
      hover: true
    });
  }

  onMouseLeave() {
    this.setState({
      hover: false
    });
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  componentWillMount() {
    ReactModal.setAppElement('body');
  }

  render() {
    const {projectName, url, screenshot, excerpt, role, tech, details, thumbnail} = this.props;

    return (
      <div className="card-item">
        <a href="#" className="card-image" onClick={this.handleOpenModal}>
          <div className="rimage background-image" style={{backgroundImage: `url(${thumbnail})`}}>
            <img role="presentation" src={thumbnail} className="img" />
          </div>
          <div className="image-hover">
            <svg title="Image hover" role="img" viewBox="-105 197 400 400" x="0px" y="0px" className="image-hover-icon">
              <path d="M39.5,333.4c29.6-15.5,66.2-20,97.2-5.9c33.1,14.1,64.1,39.3,77.6,73.4c-17.9,33.1-50.3,58.3-85.8,70.3
        		c-36.9,12.8-77.6,1-108.2-21c-19-13.8-37.6-31-44.5-54.1C-12.6,367.9,13,347.6,39.5,333.4 M49.8,340.3
        		c-25.2,12.4-49,30.3-62.4,55.2c2.8,13.8,13.8,24.1,23.8,33.4c28.3,25.5,67.2,43.8,105.8,34.8c35.5-9,66.2-33.1,86.5-63.4
        		c-14.1-27.6-39.6-48.6-67.6-62.1C108.8,325.1,76.4,327.6,49.8,340.3z"/>
              <path d="M89.8,349.3c26.9-3.8,53.4,19.7,53.1,46.9c1,25.5-21.7,49-47.2,48.6c-24.8,1-47.6-20.3-48.3-45.2
        		C45,375.1,65,351.4,89.8,349.3 M79.5,363.1c-11.7,5.2-20,16.5-21.4,29.3c-3.1,20.3,13.4,40.3,33.8,41.7c23.4,2.8,44.8-20.3,40-43.4
        		C128.4,367.2,100.5,352.4,79.5,363.1z"/>
            </svg>
          </div>
        </a>
        <div className="card-details">
          <h3 className="title">
            <a href="#" onClick={this.handleOpenModal}>{projectName}</a>
          </h3>
          <div className="excerpt">
            <p>{excerpt}</p>
          </div>
          <div className="tail"><a className="link" href="#" onClick={this.handleOpenModal}>Read more</a></div>
        </div>

        <ReactModal
          isOpen={this.state.showModal}
          contentLabel={projectName}
        >
          <div className="project-modal">
            <div className="modal-header">
              <h2>{projectName}</h2>
              <a href="#" className="close" onClick={this.handleCloseModal}>X</a>
              <hr />
            </div>
            <div className="columns">
              <div className="project-details">
                <h4>My Role</h4>
                <p>{role}</p>
                <h4>Tech</h4>
                <p>{tech}</p>
                <h4>Details</h4>
                <p>{details}</p>
                <br />
                <a href={url} target="_blank">Visit Website</a>
              </div>
              <div className="project-screenshot" style={{backgroundImage: `url(${screenshot})`}} />
            </div>
          </div>
        </ReactModal>
      </div>
    );
  }
}