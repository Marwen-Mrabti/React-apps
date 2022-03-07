import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {
  render() {
    return (
      <div className="videos-list">
        {this.props.videos.map((video, index) => {
          return (
            <VideoItem
              key={video.id.videoId}
              video={video}
              onSelectCallback={this.props.onSelectCallback}
            />
          );
        })}
      </div>
    );
  }
}

export default VideoList;
