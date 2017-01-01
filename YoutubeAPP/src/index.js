'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
//components
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//youtube api key
const key = <YOUTUBE_API_KEY_HERE>;



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: null,
      videos: []
    };
    this.videoSearch('Elon Musk');
  }

  videoSearch(term) {
    YTSearch({ key, term }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return(
      <div>
      <SearchBar onSearchTermChange={videoSearch}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
    );
  }
}

render(<App />, document.querySelector('.container'));
