import React from "react";
import { useGetResponseQuery } from '../../slice/api.js';

export default function Test() {
  const data= useGetResponseQuery();

  const handleClick = () => {
    console.log(data);
    console.log(data.statuscode);
  }

  return (
    <div>
      <h1>Test</h1>

      {/* Access the correct field */}
      {/* <p>{data.message}</p> */}
      <button onClick={handleClick}>Refresh</button>
    </div>
  );
}
