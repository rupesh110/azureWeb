// AllScheduledMatch.jsx

import React, { useEffect, useState } from 'react';
import { useGetScheduledMatchMutation } from '../../slice/cricketApi.js';
import ScheduledMatchesCard from './components/ScheduledMatchesCard.jsx';
import NavbarHome from '../../components/NavbarHome.jsx';

const AllScheduledMatch = () => {
  const [scheduledMatch, setScheduledMatch] = useState([]);
  const [getScheduledMatch] = useGetScheduledMatchMutation();

  useEffect(() => {
    const fetchScheduledMatch = async () => {
      try {
        const response = await getScheduledMatch();
        setScheduledMatch(response.data);
      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    };

    fetchScheduledMatch();
  }, [getScheduledMatch]);

  return (
    <div>
      <NavbarHome />
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {scheduledMatch.map((item) => (
        <div
          key={item._id}
          style={{
            margin: '0 1rem 0rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            width: '100%', // Full width for all screens
            boxSizing: 'border-box', // Avoid extra width due to padding and border
          }}
        >
          <h2 style={{ margin: '1rem 2rem 0rem 2rem', textAlign: 'start' }}>{item.scheduleAdWrapper.date}</h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              margin: '0 1rem 1rem 0rem',
            }}
          >
            {item.scheduleAdWrapper.matchScheduleList.map((match) => (
              <ScheduledMatchesCard
                key={match.matchInfo[0].matchId}
                seriesName={match.seriesName}
                matchDesc={match.matchInfo[0].matchDesc}
                startDate={match.matchInfo[0].startDate}
                endDate={match.matchInfo[0].endDate}
                team1={match.matchInfo[0].team1.teamName}
                team2={match.matchInfo[0].team2.teamName}
                venue={match.matchInfo[0].venueInfo.ground}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AllScheduledMatch;
