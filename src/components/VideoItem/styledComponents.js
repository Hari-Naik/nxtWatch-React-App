import styled from 'styled-components'

export const VideoListItem = styled.li`
  list-style-type: none;
  width: ${props => (props.propValue ? '100%' : '270px')};
  flex-grow: 1;
  margin-right: 15px;
  margin-bottom: ${props => props.propValue && '15px'};
`
export const Container = styled.div`
  display: flex;
  flex-direction: ${props => (props.propValue ? 'row' : 'column')};
  align-items: flex-start;
  width: 100%;
  @media (max-width: 566px) {
    flex-direction: column;
  }
`
export const ThumbnailImg = styled.img`
  width: ${props => (props.propValue ? '350px' : '100%')};
  height: ${props => props.propValue && '200px'};
  margin-bottom: 0px;
`
export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 0px;
  width: 100%;
  @media (min-width: 566px) {
    width: ${props => props.propValue && '50%'};
    // flex-direction: column;
  }

  color: ${props => props.isDark && '#fff'};
`

export const ProfileImage = styled.img`
  width: 30px;
  margin-top: 4px;
  display: ${props => props.propValue && 'none'};
  @media (max-width: 566px) {
    display: flex;
  }
`

export const ChannelContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  padding-top: 0px;
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  @media screen and (min-width: 566px) {
    flex-direction: column;
  }
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  margin-top: 0px;
  margin-bottom: 2px;
  @media (min-width: 768px) {
    font-size: ${props => (props.propValue ? '22px' : '13px')};
  }
`
export const ChannelName = styled.p`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 12px;
  margin-top: 0px;
  margin-right: 12px;
  display: ${props => props.screen && 'none'};
  @media (min-width: 566px) {
    display: ${props => (props.screen ? 'flex' : 'none')};
    margin-top: 2px;
    margin-bottom: 4px;
    font-size: 14px;
  }
`

export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  color: #64748b;
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
