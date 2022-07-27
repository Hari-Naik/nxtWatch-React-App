import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {MdWhatshot} from 'react-icons/md'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import Context from '../../context/Context'

import {
  App,
  Banner,
  LoaderContainer,
  VideosListContainer,
  TrendingBanner,
  TrendingCard,
  IconContainer,
  Text,
  GetItNowBtn,
  VideosContainer,
  FailureViewContainer,
  FailureViewImg,
  FailureViewText,
  FailureViewDescription,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {data: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getData()
  }

  onClickRetry = () => {
    this.getData()
  }

  formatData = data => {
    const formattedData = data.map(eachData => ({
      channel: eachData.channel,
      id: eachData.id,
      thumbnailUrl: eachData.thumbnail_url,
      title: eachData.title,
      publishedAt: eachData.published_at,
      viewCount: eachData.view_count,
    }))
    return formattedData
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const formattedData = this.formatData(fetchedData.videos)
      this.setState({
        data: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderFailureView = () => (
    <Context.Consumer>
      {value => {
        const {isDark} = value

        /* const img = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png' */

        return (
          <FailureViewContainer isDark={isDark}>
            <FailureViewImg
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailureViewText isDark={isDark}>
              Oops! Something Went Wrong
            </FailureViewText>
            <FailureViewDescription>
              We are having some trouble to complete your request. <br />
              Please try again
            </FailureViewDescription>
            <GetItNowBtn
              data-testid="retryButton"
              type="button"
              onClick={this.onClickRetry}
            >
              Retry
            </GetItNowBtn>
          </FailureViewContainer>
        )
      }}
    </Context.Consumer>
  )

  renderVideos = () => {
    const {data} = this.state

    return (
      <VideosContainer>
        {data.map(eachData => (
          <VideoItem key={eachData.id} eachItem={eachData} notHome />
        ))}
      </VideosContainer>
    )
  }

  renderSuccessView = isDark => (
    <VideosListContainer>
      <TrendingBanner isDark={isDark}>
        <TrendingCard>
          <IconContainer isDark={isDark}>
            <MdWhatshot size={25} color="#ff0437" />
          </IconContainer>
          <Text isDark={isDark}>Trending</Text>
        </TrendingCard>
      </TrendingBanner>
      {this.renderVideos()}
    </VideosListContainer>
  )

  renderLoadingView = isDark => (
    <LoaderContainer isDark={isDark} data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderTrending = isDark => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView(isDark)
      case apiStatusConstants.failure:
        return this.renderFailureView(isDark)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView(isDark)
      default:
        return null
    }
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const {isDark} = value
          return (
            <App data-testid="trending" darkMode={isDark}>
              <Header />
              <Banner data-testid="banner">
                <SideBar />
                {this.renderTrending(isDark)}
              </Banner>
            </App>
          )
        }}
      </Context.Consumer>
    )
  }
}
export default Trending
