const TimelineItem = ({ experience }) => {
    return (
      <div className="timeline-item">
        <div className="timeline-icon">
          <img className='timeline-image' src={experience.icon} alt={`${experience.company} logo`} />
        </div>
        <div className="timeline-content">
          <h3>{experience.company}</h3>
          <h4>{experience.position}</h4>
          {/* <p className="department">{experience.department}</p> */}
          <p className='timeline-image-description'>{experience.description}</p>
          <span className="date">{experience.date}</span>
        </div>
      </div>
    );
  };

export default TimelineItem;