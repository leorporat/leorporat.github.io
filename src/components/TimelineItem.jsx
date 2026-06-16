const TimelineItem = ({ experience }) => {
    return (
      <li className="timeline-item">
        {experience.company && <><strong>{experience.company}</strong>. </>}{experience.description}
        {experience.paper && (
          <> <a href={experience.paper.url} target="_blank" rel="noreferrer">[{experience.paper.label}]</a></>
        )}
      </li>
    );
  };

export default TimelineItem;
