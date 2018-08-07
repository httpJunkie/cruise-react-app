import React, { Component } from 'react';
import { connect } from 'react-redux'

import Header from '../components/Header';

// Import actions
import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidSubreddit
} from '../redux/actions'

// import { BrowserRouter } from 'react-router';
// import '../styles/app.css';

// Import components
import Navbar from '../components/Navbar'
import Posts from './Posts'
import { Dimmer, Loader } from 'semantic-ui-react'

class App extends Component {
  render() {
    const { selectedSubreddit, posts, isFetching } = this.props

    return (
      <div id="app-root" className="flex-item yes-grow flex-container col">
        <Header />
        <Dimmer blurring active={isFetching}><Loader>Loading</Loader></Dimmer>
        <Navbar
          selectedSub={selectedSubreddit}
          handleSubredditChange={this.handleSubredditChange}
          handleRefreshSubreddit={this.handleRefreshSubreddit}
        />
        <Posts posts={posts} />
      </div>
    );
  }

  constructor(props) {
    super(props)
    this.handleSubredditChange = this.handleSubredditChange.bind(this)
    this.handleRefreshSubreddit = this.handleRefreshSubreddit.bind(this)
  }

  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  handleSubredditChange(e, { name }) {
    const sub = name.replace(/ /g, '')
    this.props.dispatch(selectSubreddit(sub))
    this.props.dispatch(fetchPostsIfNeeded(sub))
  }

  handleRefreshSubreddit() {
    const { dispatch, selectedSubreddit } = this.props
    dispatch(invalidSubreddit(selectedSubreddit))
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }
}

function mapStateToProps(state) {
  const { selectedSubreddit, postsBySubreddit } = state
  const { isFetching, items: posts } = 
    postsBySubreddit[selectedSubreddit] || { isFetching: true, items: [] }

  return {
    selectedSubreddit,
    posts,
    isFetching
  }
}

export default connect(mapStateToProps)(App)
