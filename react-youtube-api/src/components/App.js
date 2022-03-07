import React from 'react';
import SearchBar from './SearchBar';
import YoutubeApi from '../api/YoutubeApi';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component {
  state = {
    videos: [],
    video: null,
  };

  componentDidMount() {
    this.onSearchCallback('buildings');
  }

  onSearchCallback = async (userInput) => {
    if (userInput) {
      const response = await YoutubeApi.get('/search', {
        params: {
          q: userInput,
        },
      });
      this.setState({
        videos: response.data.items,
        video: response.data.items[0],
      });
    }
  };

  onSelectCallback = (videoDetail) => {
    this.setState({ video: videoDetail });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSearchCallback={this.onSearchCallback} />
        <main className="main-container">
          <VideoDetails video={this.state.video} />

          {!this.state.videos.length ? (
            <div className="videos-list">
              <h2>Loading...</h2>
            </div>
          ) : (
            <VideoList
              videos={this.state.videos}
              onSelectCallback={this.onSelectCallback}
            />
          )}
        </main>
      </div>
    );
  }
}

export default App;
