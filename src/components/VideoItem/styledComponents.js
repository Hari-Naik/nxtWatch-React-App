import styled from 'styled-components'

export const VideoListItem = styled.li`
  list-style-type: none;
  width: 100%;
  height: 270px;
  margin-bottom: ${props => props.propValue && '15px'};
  @media (min-width: 768px) {
    min-width: ${props => (props.propValue ? '100%' : '250px')};
    max-width: ${props => (props.propValue ? '100%' : '25%')};
    height: ${props => (props.propValue ? '200px' : '270px')};
    margin-right: 15px;
    margin-left: 15px;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.propValue ? 'row' : 'column')};
  align-items: flex-start;
  width: 100%;
`
export const ThumbnailImg = styled.img`
  width: ${props => (props.propValue ? '350px' : '100%')};
  height: ${props => props.propValue && '200px'};
  margin-bottom: 0px;
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0px;
  width: ${props => props.propValue && '50%'};
  color: ${props => props.isDark && '#fff'};
`

export const ProfileImage = styled.img`
  width: 30px;
  margin-top: 4px;
  display: ${props => props.propValue && 'none'};
`

export const ChannelContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  padding-top: 0px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`
export const Title = styled.p`
  font-family: 'roboto';
  font-size: ${props => (props.propValue ? '22px' : '13px')};
  margin-top: 0px;
  margin-bottom: 2px;
`
export const ChannelName = styled.p`
  font-family: 'roboto';
  font-size: 12px;
  margin-top: 0px;
  margin-right: 12px;
  display: ${props => props.screen && 'none'};
  @media (min-width: 768px) {
    display: ${props => (props.screen ? 'flex' : 'none')};
    margin-bottom: 4px;
    font-size: 15px;
  }
`

export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  color: ${props => (props.isDark ? '#ffffff' : 'grey')};
`
export const ViewsCount = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  padding-right: 8px;
  margin-top: 0px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`
export const PublishedDate = styled.p`
  margin-top: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  @media (min-width: 768px) {
    font-size: 14px;
  }
`
