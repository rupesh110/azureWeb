import React, { useEffect, useState } from 'react';
import { useGetScheduledMatchMutation } from '../../slice/cricketApi.js';
import ScheduledMatchesCard from './components/ScheduledMatchesCard.jsx';

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

    fetchScheduledMatch();  // Corrected line
  }, [getScheduledMatch]);

  console.log(scheduledMatch);

  const displayScheduledMatch = scheduledMatch.map((item) => (
    <ScheduledMatchesCard key={item.id} scheduleWrapper={item} />
  ));

  return (
    <div>
      <h1>Scheduled match</h1>
      {displayScheduledMatch}
    </div>
  );
};

export default AllScheduledMatch;
