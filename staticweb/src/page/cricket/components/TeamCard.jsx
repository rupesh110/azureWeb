import React, { useRef } from 'react';

const TeamCard = (props) => {
  const cardRef = useRef(null);

  const handleStatusColor = () => {
    if (props.status === "Test") {
      return 'green';
    } else if (props.status === "Odi") {
      return 'blue';
    } else {
      return '#005566';
    }
  };

  const handleMouseEnter = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'scale(1.05)';
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'scale(1)';
    }
  };

  return (
    <div
      ref={cardRef}
      style={{
        height: '10rem',
        width: '15rem',
        borderRadius: '10px',
        background: '#f4f4f4',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '1rem',
        padding: '1rem',
        cursor: 'pointer',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
        transition: 'transform 0.3s ease-in-out',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 style={{ color: "#333", fontSize: '1.5rem', textAlign: 'center', marginBottom: '0.5rem' }}>{props.teamName}</h2>
      <div style={{
        height: '3rem',
        width: '100%',
        borderRadius: '5px',
        background: handleStatusColor(),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <p style={{ color: 'white', fontSize: '1rem' }}>{props.status}</p>
      </div>
    </div>
  );
};

export default TeamCard;
