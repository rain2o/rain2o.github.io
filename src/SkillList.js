import React, {Component} from "react";
// import { CircleMeter } from 'react-svg-meters'
import CircularProgressbar from 'react-circular-progressbar';
import PropTypes from "prop-types";

export default class SkillList extends Component {
  static propTypes = {
    skills: PropTypes.array.isRequired
  };

  render() {
    const {skills} = this.props;

    const cardsArray = skills.map(skill => (
      <div className="skill-item" key={skill.skill}>
        <CircularProgressbar percentage={skill.proficiency} textForPercentage={(pct) => `${skill.skill}`}  />
      </div>
    ));

    return (
      <div className="skills-inner">
        {cardsArray}
      </div>
    );
  }
}