import React, { useEffect } from 'react';
import axios from 'axios';

const ProtectedComponent = () => {
  useEffect(() => {
    const getProtectedData = async () => {
      const token = localStorage.getItem('access');
      
      try {
        const response = await axios.get('http://192.168.31.250:8000/users/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Protected data:', response.data);
      } catch (error) {
        console.error('Failed to retrieve protected data', error);
        
        if (error.response && error.response.status === 401) {
          console.log('Token might be expired. Attempting to refresh...');
          // Здесь можно добавить логику обновления токена
        }
      }
    };

    getProtectedData();
  }, []);

  return <div>Protected Content</div>;
};

export default ProtectedComponent;
