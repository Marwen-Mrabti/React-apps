import React, { Component } from 'react';

class VideoItem extends Component {
  onChooseVideo = (event) => {
    event.preventDefault();
    this.props.onSelectCallback(this.props.video);
  };

  render() {
    return (
      <div className="video-item" onClick={this.onChooseVideo}>
        <img
          className="video-thumbnail"
          src={this.props.video.snippet.thumbnails.default.url}
          alt={this.props.video.snippet.title}
        />
        <hr />
      </div>
    );
  }
}

export default VideoItem;
