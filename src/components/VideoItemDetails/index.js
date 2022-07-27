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
  FailureViewText,
  FailureViewDescription,
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
  HrLine,
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
    // isLiked: false,
    // isDisLiked: false,
  }

  componentDidMount() {
    this.getData()
  }

  onClickRetry = () => {
    this.getData()
  }

  formatData = data => {
    const formattedData = {
      channel: data.channel,
      //   name: data.channel.name,
      //   profileImgUrl: data.channel.profile_image_url,
      //   subscriberCount: data.channel.subscriber_count,
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
      //   console.log(fetchedData)
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
        const {
          saveAndRemoveVideos,
          isDark,
          activeSavedVideosIds,
          likedVideos,
          dislikedVideos,
          onClickDislike,
          onClickLike,
        } = value
        const {data} = this.state

        const onClickSaveAndRemoveVideos = () => {
          saveAndRemoveVideos(data)
        }

        const onClickLikeButton = () => {
          this.setState(prevState => ({
            isLiked: !prevState.isLiked,
            isDisLiked: false,
          }))
          onClickLike(data.id)
        }

        const onClickDisLikeButton = () => {
          this.setState(prevState => ({
            isDisLiked: !prevState.isDisLiked,
            isLiked: false,
          }))
          onClickDislike(data.id)
        }

        const {
          id,
          channel,
          videoUrl,
          title,
          viewCount,
          publishedAt,
          description,
        } = data

        const published = formatDistanceToNow(new Date(publishedAt)).split(' ')
        let videoPublishedAt
        if (published.length === 2) {
          videoPublishedAt = `${published[0]} ${published[1]}`
        } else {
          videoPublishedAt = `${published[1]} ${published[2]}`
        }

        const isActive = activeSavedVideosIds.some(
          activeId => activeId === data.id,
        )

        const isLiked = likedVideos.some(eachId => eachId === data.id)
        const isDisLiked = dislikedVideos.some(eachId => eachId === data.id)

        return (
          <VideoItemDetailsContainer isDark={isDark}>
            <ResponsiveContainer>
              <VideoContainer>
                <ReactPlayer
                  url={videoUrl}
                  width="100%"
                  height={360}
                  controls
                />
              </VideoContainer>
              <Title isDark={isDark}>{title}</Title>
              <ViewsAndLikesContainer>
                <ViewsContainer>
                  <Views isDark={isDark}>{viewCount} views</Views>
                  <Views isDark={isDark}>. {videoPublishedAt} ago</Views>
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
                    id={id}
                  >
                    <BiListPlus size={22} />
                    <ButtonText>{isActive ? 'Saved' : 'Save'}</ButtonText>
                  </SaveButton>
                </LikesContainer>
              </ViewsAndLikesContainer>
              <HrLine isDark={isDark} />
              <ChannelProfileContainer>
                <Image src={channel.profile_image_url} alt="channel logo" />
                <ChannelContent>
                  <ChannelName isDark={isDark}>{channel.name}</ChannelName>
                  <Subscribers isDark={isDark}>
                    {channel.subscriber_count} subscribers
                  </Subscribers>
                </ChannelContent>
              </ChannelProfileContainer>
              <Description isDark={isDark}>{description}</Description>
            </ResponsiveContainer>
          </VideoItemDetailsContainer>
        )
      }}
    </Context.Consumer>
  )

  renderFailureView = isDark => (
    <FailureViewContainer isDark={isDark}>
      <FailureImg
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
        Please try again.
      </FailureViewDescription>
      <RetryBtn
        data-testid="retryButton"
        type="button"
        onClick={this.onClickRetry}
      >
        Retry
      </RetryBtn>
    </FailureViewContainer>
  )

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
