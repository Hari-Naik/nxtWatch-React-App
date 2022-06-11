import {MdWhatshot} from 'react-icons/md'
import Header from '../Header'
import SideBar from '../SideBar'
import VideoItem from '../VideoItem'
import Context from '../../context/Context'

import {
  App,
  Banner,
  TrendingBanner,
  TrendingCard,
  IconContainer,
  Text,
  VideosListContainer,
  VideosContainer,
  NoSearchReultsContainer,
  NoSearchRsultsImg,
} from './styledComponents'

const SavedVideos = () => (
  <Context.Consumer>
    {value => {
      const {savedVideosList, isDark} = value

      const showNoVideosView = savedVideosList.length === 0

      /* const renderVideo = eachData => {
        const {
          id,
          thumbnailUrl,
          title,
          channelName,
          profileImgUrl,
          publishedAt,
          viewCount,
        } = eachData

        const publisedTime = formatDistanceToNow(new Date(publishedAt)).split(
          ' ',
        )
        let publishedDate
        if (publisedTime.length === 2) {
          publishedDate = publisedTime[0] + publisedTime[1]
        } else {
          publishedDate = publisedTime[1] + publisedTime[2]
        }

        return (
          <Link to={`videos/${id}`}>
            <VideoItem>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
              <ChannelContainer>
                <ProfileImage src={profileImgUrl} alt="profile" />
                <ChannelContent darkMode={isDark}>
                  <Title>{title}</Title>
                  <ChannelName screen>{channelName}</ChannelName>
                  <ViewsContainer darkMode={isDark}>
                    <ChannelName>{channelName}</ChannelName>
                    <ViewsCount>{viewCount} views</ViewsCount>
                    <PublishedDate>. {publishedDate} ago </PublishedDate>
                  </ViewsContainer>
                </ChannelContent>
              </ChannelContainer>
            </VideoItem>
          </Link>
        )
      } */

      const renderVideos = () => (
        <VideosContainer>
          {savedVideosList.map(eachData => (
            <VideoItem key={eachData.id} eachItem={eachData} notHome />
          ))}
        </VideosContainer>
      )

      const renderSavedVideos = () => (
        <VideosListContainer>
          <TrendingBanner>
            <TrendingCard>
              <IconContainer>
                <MdWhatshot size={25} color="#ff0437" />
              </IconContainer>
              <Text>Saved Videos</Text>
            </TrendingCard>
          </TrendingBanner>
          {renderVideos()}
        </VideosListContainer>
      )

      const renderNoVideosView = () => (
        <NoSearchReultsContainer>
          <NoSearchRsultsImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <h2>No Saved Videos Found</h2>
          <p>You can save your videos while watching them</p>
        </NoSearchReultsContainer>
      )

      return (
        <App data-testid="savedVideos" darkMode={isDark}>
          <Header />
          <Banner data-testid="banner">
            <SideBar />
            {showNoVideosView ? renderNoVideosView() : renderSavedVideos()}
          </Banner>
        </App>
      )
    }}
  </Context.Consumer>
)

export default SavedVideos
