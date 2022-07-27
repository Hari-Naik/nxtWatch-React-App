import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch} from 'react-icons/ai'
import {GrFormClose} from 'react-icons/gr'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../SideBar'
import Context from '../../context/Context'
import VideoItem from '../VideoItem'

import {
  App,
  Banner,
  HomeContainer,
  LoaderContainer,
  VideosListContainer,
  Input,
  SearchButton,
  InputContainer,
  BannerContainer,
  LogoCloseIconContainer,
  CloseButton,
  WebsiteLogo,
  BannerDescription,
  GetItNowBtn,
  VideosContainer,
  NoSearchResultsContainer,
  NoSearchResultsImg,
  FailureViewContainer,
  FailureViewContent,
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

class Home extends Component {
  state = {
    data: [],
    showBannerImg: true,
    searchInput: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getData()
  }

  onClickCloseButton = () => {
    this.setState(prevState => ({showBannerImg: !prevState.showBannerImg}))
  }

  onChangeSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }

  getSearchOutput = () => {
    this.getData()
  }

  onClickRetry = () => {
    this.getData()
  }

  formatData = data => {
    const formattedData = data.map(eachData => ({
      channel: eachData.channel,
      //   profileImgUrl: eachData.channel.profile_image_url,
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
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  renderVideos = () => {
    const {data} = this.state

    return (
      <VideosContainer>
        {data.map(eachItem => (
          <VideoItem key={eachItem.id} eachItem={eachItem} />
        ))}
      </VideosContainer>
    )
  }

  renderBannerImg = () => (
    <BannerContainer data-testid="banner">
      <LogoCloseIconContainer>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch  logo"
        />
        <CloseButton
          type="button"
          data-testid="close"
          onClick={this.onClickCloseButton}
        >
          <GrFormClose size={20} />
        </CloseButton>
      </LogoCloseIconContainer>
      <BannerDescription>
        Buy Nxt Watch Premium prepaid plans with UPI
      </BannerDescription>
      <GetItNowBtn type="button" outline>
        GET IT NOW
      </GetItNowBtn>
    </BannerContainer>
  )

  renderBanner = () => (
    <Context.Consumer>
      {value => {
        const {isDark} = value
        const {showBannerImg, searchInput} = this.state
        return (
          <VideosListContainer isDark={isDark}>
            {showBannerImg && this.renderBannerImg()}
            <InputContainer>
              <Input
                type="search"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
              <SearchButton
                type="button"
                data-testid="searchButton"
                onClick={this.getSearchOutput}
                isDark={isDark}
              >
                <AiOutlineSearch size={20} color="#7e858e" />
              </SearchButton>
            </InputContainer>
            {/* {data.length === 0
          ? this.renderNoSearchResultsView(isDark)
          : this.renderVideos(isDark)} */}
          </VideosListContainer>
        )
      }}
    </Context.Consumer>
  )

  renderFailureView = isDark => (
    <FailureViewContainer isDark={isDark}>
      <FailureViewContent>
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
        <FailureViewDescription isDark={isDark}>
          We are having some trouble to complete your request.
          <br /> Please try again.
        </FailureViewDescription>
        <GetItNowBtn
          data-testid="retryButton"
          type="button"
          onClick={this.onClickRetry}
        >
          Retry
        </GetItNowBtn>
      </FailureViewContent>
    </FailureViewContainer>
  )

  renderNoSearchResultsView = isDark => (
    <NoSearchResultsContainer isDark={isDark}>
      <NoSearchResultsImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <FailureViewText isDark={isDark}>No Search results found</FailureViewText>
      <FailureViewDescription isDark={isDark}>
        Try different key words or remove search filter
      </FailureViewDescription>
      <GetItNowBtn type="button" onClick={this.onClickRetry}>
        Retry
      </GetItNowBtn>
    </NoSearchResultsContainer>
  )

  renderSuccessView = isDark => {
    const {data} = this.state
    return (
      <>
        {data.length === 0
          ? this.renderNoSearchResultsView(isDark)
          : this.renderVideos(isDark)}
      </>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderHome = isDark => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView(isDark)
      case apiStatusConstants.failure:
        return this.renderFailureView(isDark)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
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
            <App data-testid="home" darkMode={isDark}>
              <Header />
              <Banner>
                <SideBar />
                <HomeContainer>
                  {this.renderBanner()}
                  {this.renderHome(isDark)}
                </HomeContainer>
              </Banner>
            </App>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default Home
