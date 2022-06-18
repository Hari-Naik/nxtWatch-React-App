import {Link} from 'react-router-dom'
import Context from '../../context/Context'

import {
  VideoItem,
  Image,
  Title,
  ViewsContainer,
  Views,
} from './styledComponents'

const GamingVideoItem = props => (
  <Context.Consumer>
    {value => {
      const {isDark} = value
      const {eachItem} = props
      const {id, thumbnailUrl, title, viewCount} = eachItem

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
    }}
  </Context.Consumer>
)

export default GamingVideoItem
