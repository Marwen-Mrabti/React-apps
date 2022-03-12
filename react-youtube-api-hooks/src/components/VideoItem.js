import React from 'react';

function VideoItem({ video, onSetVideo}) {

  const onChooseVideo = (event) => {
    event.preventDefault();
    onSetVideo(video);
  };

  return (
    <div className="video-item" onClick={onChooseVideo}>
      <img
        className="video-thumbnail"
        src={video.snippet.thumbnails.default.url}
        alt={video.snippet.title}
      />
      <hr />
    </div>
  );
}

export default VideoItem;
