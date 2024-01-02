import React from 'react';
import { isAuthenticated, useUserFullName } from '../../slice/authUsers';

const PrivatePage = () => {
  const isAuth = isAuthenticated();
  console.log("🚀 ~ file: PrivatePage.jsx:6 ~ PrivatePage ~ isAuth:", isAuth)
  
  const userFullName = useUserFullName();
  console.log("🚀 ~ file: PrivatePage.jsx:9 ~ PrivatePage ~ userFullName:", userFullName)
  return (
    <div>
        <h1>Private Page</h1>
    </div>
  )
}

export default PrivatePage
