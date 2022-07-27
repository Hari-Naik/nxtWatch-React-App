import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Context from '../../context/Context'

import {
  VideoListItem,
  Container,
  Title,
  ChannelName,
  ViewsContainer,
  ViewContainer,
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
        channel,
        thumbnailUrl,
        title,
        publishedAt,
        viewCount,
      } = eachItem

      const published = formatDistanceToNow(new Date(publishedAt)).split(' ')

      let videoPublishedAt
      if (published.length === 2) {
        videoPublishedAt = `${published[0]} ${published[1]}`
      } else {
        videoPublishedAt = `${published[1]} ${published[2]}`
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
                  src={channel.profile_image_url}
                  alt="channel logo"
                  propValue={notHome}
                />
                <ChannelContent isDark={isDark}>
                  <Title propValue={notHome}>{title}</Title>
                  <ViewsContainer isDark={isDark}>
                    <ChannelName propValue={notHome}>
                      {channel.name}
                    </ChannelName>
                    <ViewContainer>
                      <ViewsCount>{viewCount} views</ViewsCount>
                      <PublishedDate>
                        <strong>.</strong> {videoPublishedAt} ago
                      </PublishedDate>
                    </ViewContainer>
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
