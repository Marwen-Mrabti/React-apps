import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onSetVideo }) => {
  return (
    <div className="videos-list">
      {videos.map((video, index) => {
        return (
          <VideoItem
            key={index}
            video={video}
            onSetVideo={onSetVideo}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
