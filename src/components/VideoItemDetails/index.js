import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'

import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import Context from '../../context/Context'

import Header from '../Header'
import SideBar from '../SideBar'

import {
  AppContainer,
  Banner,
  LoaderContainer,
  FailureViewContainer,
  FailureImg,
  RetryBtn,
  VideoItemDetailsContainer,
  ResponsiveContainer,
  VideoContainer,
  Title,
  ViewsAndLikesContainer,
  ViewsContainer,
  LikesContainer,
  Views,
  LikeButton,
  DisLikeButton,
  SaveButton,
  ButtonText,
  ChannelProfileContainer,
  Image,
  ChannelContent,
  ChannelName,
  Subscribers,
  Description,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    data: {},
    apiStatus: apiStatusConstants.initial,
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getData()
  }

  onClickRetry = () => {
    this.getData()
  }

  formatData = data => {
    const formattedData = {
      channelName: data.channel.name,
      profileImgUrl: data.channel.profile_image_url,
      subscriberCount: data.channel.subscriber_count,
      id: data.id,
      thumbnailUrl: data.thumbnail_url,
      title: data.title,
      videoUrl: data.video_url,
      publishedAt: data.published_at,
      viewCount: data.view_count,
      description: data.description,
    }
    return formattedData
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const fetchedData = await response.json()
      const formattedData = this.formatData(fetchedData.video_details)
      this.setState({
        data: formattedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => (
    <Context.Consumer>
      {value => {
        const {saveAndRemoveVideos, isDark, activeSavedVideosIds} = value
        const {data, isLiked, isDisLiked} = this.state

        const onClickSaveAndRemoveVideos = () => {
          saveAndRemoveVideos(data)
        }

        const onClickLikeButton = () => {
          this.setState(prevState => ({
            isLiked: !prevState.isLiked,
            isDisLiked: false,
          }))
        }

        const onClickDisLikeButton = () => {
          this.setState(prevState => ({
            isDisLiked: !prevState.isDisLiked,
            isLiked: false,
          }))
        }

        const {
          videoUrl,
          title,
          viewCount,
          publishedAt,
          profileImgUrl,
          channelName,
          subscriberCount,
          description,
        } = data

        const publishedTime = formatDistanceToNow(new Date(publishedAt)).split(
          ' ',
        )
        let publishedDate
        if (publishedTime.length === 2) {
          publishedDate = publishedTime[0] + publishedTime[1]
        } else {
          publishedDate = publishedTime[1] + publishedTime[2]
        }

        const isActive = activeSavedVideosIds.some(
          activeId => activeId === data.id,
        )

        return (
          <VideoItemDetailsContainer isDark={isDark}>
            <ResponsiveContainer>
              <VideoContainer>
                <ReactPlayer url={videoUrl} width="100%" controls />
              </VideoContainer>
              <Title>{title}</Title>
              <ViewsAndLikesContainer>
                <ViewsContainer>
                  <Views>{viewCount} Views</Views>
                  <Views>. {publishedDate} ago</Views>
                </ViewsContainer>
                <LikesContainer>
                  <LikeButton
                    type="button"
                    onClick={onClickLikeButton}
                    isLiked={isLiked}
                  >
                    <BiLike size={15} />
                    <ButtonText>Like</ButtonText>
                  </LikeButton>
                  <DisLikeButton
                    type="button"
                    onClick={onClickDisLikeButton}
                    isDisLiked={isDisLiked}
                  >
                    <BiDislike size={15} />
                    <ButtonText>Dislike</ButtonText>
                  </DisLikeButton>
                  <SaveButton
                    type="button"
                    onClick={onClickSaveAndRemoveVideos}
                    isSaved={isActive}
                    id={data.id}
                  >
                    <BiListPlus size={22} />
                    <ButtonText>{isActive ? 'saved' : 'save'}</ButtonText>
                  </SaveButton>
                </LikesContainer>
              </ViewsAndLikesContainer>
              <hr color="#000" width="100%" />
              <ChannelProfileContainer>
                <Image src={profileImgUrl} alt="channel logo" />
                <ChannelContent>
                  <ChannelName>{channelName}</ChannelName>
                  <Subscribers>{subscriberCount} subscribers</Subscribers>
                </ChannelContent>
              </ChannelProfileContainer>
              <Description>{description}</Description>
            </ResponsiveContainer>
          </VideoItemDetailsContainer>
        )
      }}
    </Context.Consumer>
  )

  renderFailureView = isDark => {
    const img = isDark
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <FailureViewContainer isDark={isDark}>
        <FailureImg src={img} alt="failure view" />
        <h2>Oops! Something Went Wrong</h2>
        <p>
          We are having some trouble to complete your request. Please try again.
        </p>
        <RetryBtn type="button" onClick={this.onClickRetry}>
          Retry
        </RetryBtn>
      </FailureViewContainer>
    )
  }

  renderLoadingView = isDark => (
    <LoaderContainer isDark={isDark} data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderView = isDark => {
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
            <AppContainer isDark={isDark} data-testid="videoItemDetails">
              <Header />
              <Banner>
                <SideBar />
                {this.renderView(isDark)}
              </Banner>
            </AppContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default VideoItemDetails
