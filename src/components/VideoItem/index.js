import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Context from '../../context/Context'

import {
  VideoListItem,
  Container,
  Title,
  ChannelName,
  ViewsContainer,
  ViewsCount,
  PublishedDate,
  ThumbnailImg,
  ChannelContainer,
  ProfileImage,
  ChannelContent,
} from './styledComponents'

const VideoItem = props => (
  <Context.Consumer>
    {value => {
      const {isDark} = value

      const {eachItem, notHome} = props
      const {
        id,
        thumbnailUrl,
        title,
        name,
        profileImgUrl,
        publishedAt,
        viewCount,
      } = eachItem

      const publishedTime = formatDistanceToNow(new Date(publishedAt)).split(
        ' ',
      )

      let publishedDate
      if (publishedTime.length === 2) {
        publishedDate = publishedTime[0] + publishedTime[1]
      } else {
        publishedDate = publishedTime[1] + publishedTime[2]
      }

      return (
        <VideoListItem propValue={notHome}>
          <Link to={`videos/${id}`}>
            <Container propValue={notHome}>
              <ThumbnailImg
                src={thumbnailUrl}
                alt="video thumbnail"
                propValue={notHome}
              />
              <ChannelContainer propValue={notHome}>
                <ProfileImage
                  src={profileImgUrl}
                  alt="channel logo"
                  propValue={notHome}
                />
                <ChannelContent isDark={isDark}>
                  <Title propValue={notHome}>{title}</Title>
                  <ChannelName screen>{name}</ChannelName>
                  <ViewsContainer isDark={isDark}>
                    <ChannelName>{name}</ChannelName>
                    <ViewsCount>{viewCount} views</ViewsCount>
                    <PublishedDate>
                      <strong>.</strong> {publishedDate} ago{' '}
                    </PublishedDate>
                  </ViewsContainer>
                </ChannelContent>
              </ChannelContainer>
            </Container>
          </Link>
        </VideoListItem>
      )
    }}
  </Context.Consumer>
)

export default VideoItem
