import React, { useState, useEffect, useMemo } from 'react';
import "./liveMatchCard.css";

const LiveMatchCard = (props) => {
    const [start_date, setStartDate] = useState('Loading...');
    const [end_date, setEndDate] = useState('Loading...');
    const { matchInfo, matchScore } = props.match;
    const { seriesName, matchDesc, status, matchFormat, team1, team2, venueInfo, startDate, endDate } = matchInfo;


    const formatDate = useMemo(() => {
        return (timestamp) => {
            if (!timestamp || isNaN(timestamp)) {
                console.error("Invalid timestamp:", timestamp);
                return 'Invalid Date';
            }
    
            const date = new Date(parseInt(timestamp, 10));  // Convert timestamp to number
            const options = {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,  // If you want 12-hour format
            };
    
            return date.toLocaleTimeString('en-US', options);
        };
      }, []);
    
      useEffect(() => {
        const fetchData = async () => {
          setStartDate(formatDate(startDate));
          setEndDate(formatDate(endDate));
        };
    
        fetchData();
      }, [startDate, endDate, formatDate]);

    // Use optional chaining to handle potential undefined values
    const team1Runs = matchScore?.team1Score?.inngs1?.runs;
    const team1Wickets = matchScore?.team1Score?.inngs1?.wickets;
    const team1Overs = matchScore?.team1Score?.inngs1?.overs;

    const team2Runs = matchScore?.team2Score?.inngs1?.runs;
    const team2Wickets = matchScore?.team2Score?.inngs1?.wickets;
    const team2Overs = matchScore?.team2Score?.inngs1?.overs;

    console.log("🚀 ~ LiveMatchCard ~ matchScore", matchScore);

    

    return (
        <div className="cardStyle">
            <h2 className="titleStyle">{seriesName}</h2>

            <p style={{ fontSize: '0.8rem' }}> {matchFormat}, {matchDesc}, {venueInfo.ground}, {venueInfo.city}</p>
            <p> {team1.teamName} vs {team2.teamName}, 
                <span style={{ fontSize: '14px', marginLeft: '5px' }}>{status}</span>
            </p>
            <p>{start_date} - {end_date}</p>

            <div className="scoreSection">
                <p>{team1.teamName} Score: {team1Runs}/{team1Wickets}-{team1Overs} overs</p>
                <p>{team2.teamName} Score: {team2Runs}/{team2Wickets}-{team2Overs} overs</p>
            </div>
        </div>
    );
};

export default LiveMatchCard;



