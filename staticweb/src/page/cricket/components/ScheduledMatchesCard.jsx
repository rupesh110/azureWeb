import React from 'react'

const ScheduledMatchesCard = (props) => {
  return (
    <div style={{
          height: "20rem",
          width: "20rem",
          backgroundColor: "grey",
          borderRadius: "10px",
          margin: "4rem",
          padding: "4rem",
          flexWrap: "wrap",
          display: "flex",
          flexDirection: "column",
        }}>
      <h1>{props.scheduleWrapper.date}</h1>
    </div>
  )
}

export default ScheduledMatchesCard
