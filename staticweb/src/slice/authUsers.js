import { useEffect, useState } from 'react';
import { useGetUserFullNameMutation } from './usersApi.js';

const isAuthenticated = () => {
  const session = sessionStorage.getItem('token');
  return !!session && !!JSON.parse(session).token;
};

const useUserFullName = () => {
  const [userFullName, setUserFullName] = useState('');
  const [getUserFullName, { data, isLoading, error }] = useGetUserFullNameMutation();

  useEffect(() => {
    const fetchUserFullName = async () => {
      try {
        const result = await getUserFullName(JSON.parse(sessionStorage.getItem('token')).token);
        if (result.error) {
          console.error('Error fetching user full name:', result.error.message);
        } else {
          setUserFullName(result.data.message);
        }
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
