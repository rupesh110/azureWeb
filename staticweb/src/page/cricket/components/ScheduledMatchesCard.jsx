import React from 'react';

const ScheduledMatchesCard = (props) => {
  const formatDate = (timestamp) => {
    if (!timestamp || isNaN(timestamp)) {
      return 'Invalid Date';
    }

    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short',
    });
  };

  return (
    <div style={{
      height: "auto",
      width: "auto",
      backgroundColor: "#f5f5f5",
      borderRadius: "10px",
      margin: "1rem",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    }}>
      <div>
        <h2>{props.seriesName}</h2>
        <p>{props.matchDesc}</p>
      </div>
      <div>
        <p><strong>Start Date:</strong> {formatDate(props.startDate)}</p>
        <p><strong>End Date:</strong> {formatDate(props.endDate)}</p>
        <p><strong>Teams:</strong> {props.team1} vs {props.team2}</p>
        <p><strong>Venue:</strong> {props.venue}</p>
      </div>
    </div>
  );
}

export default ScheduledMatchesCard;
