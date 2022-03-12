import React from 'react';

const VideoDetails = ({ video }) => {
  return (
    <div className="video-details">
      {!video ? (
        <div className="videos-list">
          <h1>please select video from the list...</h1>
        </div>
      ) : (
        <div className="video-container">
          <iframe
            id="video"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
          />
          <h2>{video.snippet.title}</h2>
        </div>
      )}
    </div>
  );
};

export default VideoDetails;
