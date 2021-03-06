import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import Context from './context/Context'
import './App.css'

class App extends Component {
  state = {
    savedVideosList: [],
    activeSavedVideosIds: [],
    isDark: false,
    activeTabId: 'initial',
  }

  onToggleTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  saveAndRemoveVideos = videoData => {
    const {savedVideosList, activeSavedVideosIds} = this.state

    const videoObj = savedVideosList.some(
      eachItem => eachItem.id === videoData.id,
    )
    if (videoObj) {
      const filteredRes = savedVideosList.filter(
        each => each.id !== videoData.id,
      )
      const filterdIds = activeSavedVideosIds.filter(
        eachId => eachId !== videoData.id,
      )
      this.setState({
        savedVideosList: filteredRes,
        activeSavedVideosIds: filterdIds,
      })
    } else {
      this.setState({
        savedVideosList: [...savedVideosList, videoData],
        activeSavedVideosIds: [...activeSavedVideosIds, videoData.id],
      })
    }
  }

  onActiveTabId = id => {
    this.setState({activeTabId: id})
  }

  render() {
    const {
      savedVideosList,
      isDark,
      activeSavedVideosIds,
      activeTabId,
    } = this.state
    return (
      <Context.Provider
        value={{
          isDark,
          savedVideosList,
          activeTabId,
          activeSavedVideosIds,
          onToggleTheme: this.onToggleTheme,
          saveAndRemoveVideos: this.saveAndRemoveVideos,
          onActiveTabId: this.onActiveTabId,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/bad-path" component={NotFound} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
