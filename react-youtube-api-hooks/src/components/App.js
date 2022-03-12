import React, { useState, useEffect } from 'react';
//costume hooks
import useVideos from '../CustomeHooks/useVideos';
//local components
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

function App() {
  const [video, setVideo] = useState(null);
  const [videos, onSearch] = useVideos('javasript hooks');
  
  useEffect(() => {
    setVideo(videos[0]);
  }, [videos]);


  return (
    <div className="App">
      <SearchBar onSearchCallback={onSearch} />
      <main className="main-container">
        <VideoDetails video={video} />
        {!videos.length ? (
          <div className="videos-list">
            <h2>Loading...</h2>
          </div>
        ) : (
          <VideoList videos={videos} onSetVideo={(video) => setVideo(video)} />
        )}
      </main>
    </div>
  );
}

export default App;
