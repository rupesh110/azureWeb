import React, { useEffect, useState } from 'react';
import { useGetTeamMutation } from '../../slice/cricketApi.js';


import TeamCard from './components/TeamCard.jsx';

const AllTeam = () => {
  const [country, setCountry] = useState([]);

  const sortedCountry = [...country].sort((b, a) => a.status.localeCompare(b.status));

  const [getTeam] = useGetTeamMutation();


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTeam();
        setCountry(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [getTeam]);



  const displayTeam = sortedCountry.map((item) => (
    <TeamCard key={item.teamId} teamName={item.teamName} data={item.teamName} status={item.status} />
  ));

  return (
    <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
        {displayTeam}
    </div>
  );
};

export default AllTeam;
