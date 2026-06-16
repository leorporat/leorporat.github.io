import React from 'react';
import './Timeline.css';
import TimelineItem from './TimelineItem';

const Timeline = ({ experiences }) => {
    return (
      <ul className="timeline">
        {experiences.map((exp, index) => (
          <TimelineItem key={index} experience={exp} />
        ))}
      </ul>
    );
  };

export default Timeline;
