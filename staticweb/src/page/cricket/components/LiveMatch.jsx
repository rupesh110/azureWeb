import React from 'react';
import LiveMatchCard from './LiveMatchCard';

const LiveMatch = (props) => {

  const displayLiveMatch = (item) => {
    if (!item.seriesAdWrapper) {
      return null; // or handle the case where seriesAdWrapper is not defined
    }

    const { seriesId, seriesName, matches } = item.seriesAdWrapper;
    console.log("🚀 ~ displayLiveMatch ~ matches:", matches);

    return (
      <div key={seriesId}>
        <h1 style={{marginLeft: "2rem"}}>{seriesName}</h1>
        <div style={{
            display: "flex", 
            flexDirection: "row",
            minWidth: "25%",
            flexWrap: "wrap",
            margin: "1rem 0rem 2rem 0rem",
            }}>
        {matches.map((match) => (
          <LiveMatchCard  match={match} />
        ))}
        </div>

      </div>
    );
  };

  const renderLiveMatches = () => {
    return props.match.map((item, index) => (
      <div key={index}>
        {displayLiveMatch(item)}
      </div>
    ));
  };

  return (
    <div>
      {renderLiveMatches()}
    </div>
  );
};

export default LiveMatch;
