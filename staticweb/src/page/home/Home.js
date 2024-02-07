import React, {useState, useEffect} from 'react';

import NavbarHome from '../../components/NavbarHome.jsx';

import './Home.css';
import LiveMatch from '../cricket/components/LiveMatch.jsx';
import { useGetTodayMatchScheduleMutation } from '../../slice/cricketApi.js';

const Home = () => {
  const [getLiveMatch] = useGetTodayMatchScheduleMutation();
  const [liveMatch, setLiveMatch] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getLiveMatch();
        setLiveMatch(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the asynchronous function here
  }, [getLiveMatch]);

  console.log(liveMatch);

  return (
    <div>
        <NavbarHome />

        {liveMatch.map((item) => (
          <LiveMatch key={item._id} match={item.seriesMatches} />
        ))}
    </div>
  )
}

export default Home
