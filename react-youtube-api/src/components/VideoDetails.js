import React, { Component } from 'react';

class VideoDetails extends Component {
  render() {
    return (
      <div className="video-details">
        {!this.props.video ? (
          <div className="videos-list">
            <h1>please select video from the list...</h1>
          </div>
        ) : (
          <div className="video-container">
            <iframe
              id="video"
              src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`}
              title={this.props.video.snippet.title}
            />
            <h2>{this.props.video.snippet.title}</h2>
          </div>
        )}
      </div>
    );
  }
}

export default VideoDetails;
