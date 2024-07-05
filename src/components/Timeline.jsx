

import React from 'react';
import './Timeline.css';
import TimelineItem from './TimelineItem';

const Timeline = ({ experiences }) => {
    return (
      <div className="timeline">
        <div className="timeline-connector"></div>
        {experiences.map((exp, index) => (
          <TimelineItem key={index} experience={exp} />
        ))}
      </div>
    );
  };

export default Timeline;