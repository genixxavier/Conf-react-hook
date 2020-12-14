import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}key=AIzaSyBdWdyCU_vHiOWjheIBRvC-dKd82pNUnY4`;

  useEffect(async () => {
    const response = await axios.get(API);
    setMap(response.data.result[0].geometry.location);
    return () => {
      cleanup;
    };
  }, []);

  return {
    map,
  };
};

export default useGoogleAddress;
