import React from 'react';
import { useState, useEffect } from 'react';

export function useData(url) {
const [data, setData] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
  
    const fetchSinglePost = async () => {
      try {
        const postData = await getRequestWithNativeFetch(
          `${url}`,
          controller.signal
        );
        setData(postData);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          setError(error);
          setData(null);
          console.log('Aborted');
          return;
        }
       
      } finally {
        setLoading(false);
      }
    }; 
    fetchSinglePost(); 
    return () => controller.abort();
  }, [url]);

  return{data, error, loading}
}

export default useData



const getRequestWithNativeFetch = async (
    url,
    signal = null
  ) => {
    const response = await fetch(url, { signal });
  
    if (!response.ok) {
      throw new Error(`HTTP error: Status ${response.status}`);
    }
  
    return response.json();
  };