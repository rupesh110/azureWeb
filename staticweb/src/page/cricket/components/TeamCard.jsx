import React from 'react'

const TeamCard = (props) => {

    const handleStatus = () => {
        if(props.status === "Test"){
            return <p style={{color:'green'}}>{props.status}</p>
        }else if(props.status === "Odi"){
            return <p style={{color:'blue'}}>{props.status}</p>
        }
        else{
            return <p style={{color:'yellow'}}>{props.status}</p>
        }
    }
  return (
    <div style={{
            height: '8rem', 
            width: '15rem', 
            borderRadius: '10px', 
            background: "gray",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '1rem',
            flexDirection: 'column',
            border: '1px solid black',
            padding: '6px',      
            cursor: 'pointer',
            boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)',
            }}>
      <h1 style={{color: "White", font: "12px"}}>{props.teamName}</h1>
        {/* <p style={{color: "green"}} >{props.status}</p> */}
        {handleStatus()}
    </div>
  )
}

export default TeamCard
