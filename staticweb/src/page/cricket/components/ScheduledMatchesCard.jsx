import React, { useState, useEffect, useMemo } from 'react';

const ScheduledMatchesCard = (props) => {
  const [start_date, setStartDate] = useState('Loading...');
  const [end_date, setEndDate] = useState('Loading...');

  const formatDate = useMemo(() => {
    return (timestamp) => {
      if (!timestamp || isNaN(timestamp)) {
        console.error("Invalid timestamp:", timestamp);
        return 'Invalid Date';
      }

      const date = new Date(parseInt(timestamp, 10));  // Convert timestamp to number
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: 'UTC',
      };

      return date.toLocaleDateString('en-US', options);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setStartDate(formatDate(props.startDate));
      setEndDate(formatDate(props.endDate));
    };

    fetchData();
  }, [props.startDate, props.endDate, formatDate]);

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      margin: "0.5rem",
      padding: "1rem",
      background: "#fff",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      transition: "box-shadow 0.3s ease",
      minWidth: "19rem",  // Added to fix "width: 100% not working in Safari
      maxWidth: "27rem",  // Added to fix "width: 100% not working in Safari
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
      <div>
        <h2 style={{ margin: "0 0 1rem", color: "#333" }}>{props.seriesName}</h2>
        <p style={{ margin: "0 0 1rem", color: "#666" }}>{props.matchDesc}</p>
      </div>
      <div>
        <p style={{ margin: "0 0 0.5rem", color: "#888" }}><strong>Start Date:</strong> {start_date}</p>
        <p style={{ margin: "0 0 0.5rem", color: "#888" }}><strong>End Date:</strong> {end_date}</p>
        <p style={{ margin: "0 0 0.5rem", color: "#888" }}><strong>Teams:</strong> {props.team1} vs {props.team2}</p>
        <p style={{ margin: "0 0 0.5rem", color: "#888" }}><strong>Venue:</strong> {props.venue}</p>
      </div>
    </div>
  );
}

export default ScheduledMatchesCard;
