import { useState, useEffect } from 'react';
import YoutubeApi from '../api/YoutubeApi';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    onSearch(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const onSearch = async (userInput) => {
    const response = await YoutubeApi.get('/search', {
      params: {
        q: userInput,
      },
    });
    setVideos(response.data.items);
  };

  return [videos, onSearch];
};

export default useVideos;
