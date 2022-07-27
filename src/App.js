import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
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
    likedVideos: [],
    dislikedVideos: [],
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

  onClickLike = id => {
    const {likedVideos, dislikedVideos} = this.state
    const isIdPresent = likedVideos.some(eachId => eachId === id)

    const filterDislikedVideos = dislikedVideos.filter(eachId => eachId !== id)

    this.setState({dislikedVideos: filterDislikedVideos})

    if (isIdPresent === false) {
      this.setState(prevState => ({
        likedVideos: [...prevState.likedVideos, id],
      }))
    }
  }

  onClickDisLike = id => {
    const {likedVideos, dislikedVideos} = this.state
    const isIdPresent = dislikedVideos.some(eachId => eachId === id)

    const filterlikedVideos = likedVideos.filter(eachId => eachId !== id)

    this.setState({likedVideos: filterlikedVideos})

    if (isIdPresent === false) {
      this.setState(prevState => ({
        dislikedVideos: [...prevState.dislikedVideos, id],
      }))
    }
  }

  render() {
    const {
      savedVideosList,
      isDark,
      activeSavedVideosIds,
      activeTabId,
      likedVideos,
      dislikedVideos,
    } = this.state

    // console.log(likedVideos)
    // console.log(dislikedVideos)

    return (
      <Context.Provider
        value={{
          isDark,
          savedVideosList,
          likedVideos,
          dislikedVideos,
          activeTabId,
          activeSavedVideosIds,
          onToggleTheme: this.onToggleTheme,
          saveAndRemoveVideos: this.saveAndRemoveVideos,
          onActiveTabId: this.onActiveTabId,
          onClickLike: this.onClickLike,
          onClickDislike: this.onClickDisLike,
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
          <Redirect to="not-found" />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
