import { useEffect, useState } from 'react';
import { useGetUserFullNameMutation } from './usersApi.js';

const isAuthenticated = () => {
  const session = sessionStorage.getItem('token');
  return session ? true : false;
};


const useUserFullName = () => {
  const [userFullName, setUserFullName] = useState('');
  const [getUserFullName, {isLoading, error }] = useGetUserFullNameMutation();

  useEffect(() => {
    const fetchUserFullName = async () => {
      try {
        const token = JSON.parse(sessionStorage.getItem('token'));
        console.log("🚀 ~ file: authUsers.js:25 ~ fetchUserFullName ~ token", token);
        const result = await getUserFullName(token);
        console.log("🚀 ~ file: authUsers.js:27 ~ fetchUserFullName ~ result", result);
        setUserFullName(result.data.message);
      } catch (error) {
        console.error('Unexpected error during data fetching:', error.message);
      }
    };

    if (isAuthenticated()) {
      fetchUserFullName();
    }
  }, [getUserFullName]);

  return { userFullName, isLoading, error };
};

export { isAuthenticated, useUserFullName };
