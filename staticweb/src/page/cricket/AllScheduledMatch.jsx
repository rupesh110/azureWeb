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

  const displayScheduledMatch = scheduledMatch.map((item) => (
    <div key={item._id}>
      <h2>{item.scheduleAdWrapper.date}</h2>
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
  ));

  return (
    <div>
      <NavbarHome />
      <div>{displayScheduledMatch}</div>
    </div>
  );
};

export default AllScheduledMatch;
