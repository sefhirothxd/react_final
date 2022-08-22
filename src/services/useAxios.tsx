import { useState } from 'react';

import axios from 'axios';

type Profile = {
  method: string;
  url: string;
  headers?: {
    Authorization?: string;
  };
  data?: {
    projects?: Profile;
  };
};

export const useAxios = () => {
  const [error, setError] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async (params: Profile) => {
    try {
      const result = await axios.request(params);
      if (result.status === 200) {
        console.log(result);
        console.log(loading);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        return result;
      }
    } catch (error: any) {
      setError(error);
      console.log(error);
      setLoading(false);
      setTimeout(() => {
        setError([]);
      }, 3000);
    }
  };

  return { error, loading, fetchData };
};
