import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBar from '../SideBar'
import Context from '../../context/Context'

import {
  App,
  Banner,
  LoaderContainer,
  FailureViewContainer,
  FailureImg,
  RetryBtn,
  SuccessContainer,
  GamingBanner,
  GamingCard,
  IconContainer,
  Text,
  VideosContainer,
  VideoContainer,
  VideoItem,
  Image,
  Title,
  Views,
  ViewsContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {data: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getData()
  }

  onClickRetry = () => {
    this.getData()
  }

  formatData = data => {
    const formattedData = data.map(eachData => ({
      id: eachData.id,
      thumbnailUrl: eachData.thumbnail_url,
      title: eachData.title,
      viewCount: eachData.view_count,
    }))
    return formattedData
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch('https://apis.ccbp.in/videos/gaming', options)
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

  renderFailureView = isDark => {
    const img = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <FailureViewContainer isDark={isDark}>
        <FailureImg src={img} alt="failure view" />
        <h2>Oops! Something Went Wrong</h2>
        <p>We are having some trouble</p>
        <p>Please try again.</p>
        <RetryBtn type="button" onClick={this.onClickRetry}>
          Retry
        </RetryBtn>
      </FailureViewContainer>
    )
  }

  renderVideoItem = (eachData, isDark) => {
    const {id, thumbnailUrl, title, viewCount} = eachData

    return (
      <Link to={`videos/${id}`}>
        <VideoItem key={id}>
          <Image src={thumbnailUrl} alt="video thumbnail" />
          <Title isDark={isDark}>{title}</Title>
          <ViewsContainer isDark={isDark}>
            <Views>{viewCount} Watching</Views>
            <Views>Worldwide</Views>
          </ViewsContainer>
        </VideoItem>
      </Link>
    )
  }

  renderSuccessView = isDark => {
    const {data} = this.state

    return (
      <SuccessContainer>
        <GamingBanner>
          <GamingCard>
            <IconContainer>
              <SiYoutubegaming size={25} color="#ff0437" />
            </IconContainer>
            <Text>Gaming</Text>
          </GamingCard>
        </GamingBanner>
        <VideosContainer isDark={isDark}>
          <VideoContainer>
            {data.map(eachData => this.renderVideoItem(eachData, isDark))}
          </VideoContainer>
        </VideosContainer>
      </SuccessContainer>
    )
  }

  renderLoadingView = isDark => (
    <LoaderContainer isDark={isDark} data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderGaming = isDark => {
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
            <App data-testid="gaming" darkMode={isDark}>
              <Header />
              <Banner>
                <SideBar />
                {this.renderGaming(isDark)}
              </Banner>
            </App>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Gaming
