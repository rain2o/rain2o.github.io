import React, {Component} from "react";
import Card from "./Card";
import PropTypes from "prop-types";

export default class CardList extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired
  };

  render() {
    const {projects} = this.props;

    const cardsArray = projects.map(project => (
      <Card
        key={project.id}
        {... project}
      />
    ));

    return (
      <div className="card-list-inner">
        {cardsArray}
      </div>
    );
  }
}