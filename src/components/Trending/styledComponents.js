import styled from 'styled-components'

export const App = styled.div`
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const Banner = styled.div`
  display: flex;
  align-items: center;
  min-height: 90vh;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;
  background-color: ${props => (props.isDark ? ' #0f0f0f' : '#f9f9f9')};
`
export const VideosListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  overflow-y: scroll;
  width: 100%;
  @media (min-width: 768px) {
    width: 100%;
  }
`

export const TrendingBanner = styled.div`
  width: 100%;
  height: 175px;
  padding: 25px;
  background-color: ${props => (props.isDark ? '#424242' : '#ebebeb')};
  @media (min-width: 768px) {
    width: 100%;
    height: 250px;
    padding-left: 15px;
  }
`

export const TrendingCard = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    margin-left: 85px;
  }
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  margin-right: 12px;
  background-color: ${props => (props.isDark ? '#000' : '#cbd5e1')};
  border-radius: 50%;
`

export const Text = styled.h1`
  color: ${props => (props.isDark ? '#fff' : '#000')};
  font-family:"roboto"
  font-size: 22px;
  font-weight:500;
`
export const GetItNowBtn = styled.button`
  height: 32px;
  width: ${props => (props.outline ? '120px' : '90px')};
  border: ${props => (props.outline ? '1px solid 1e293b' : 'none')};
  border-radius: ${props => (props.outline ? '' : '8px')};
  color: ${props => (props.outline ? '#1e293b' : '#fff')};
  cursor: pointer;
  background-color: ${props => (props.outline ? 'transparent' : '#4f46e5')};
`
export const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`
export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  padding-left: 12px;
  @media (min-width: 768px) {
    align-items: flex-start;
    margin: auto;
    margin-top: 20px;
  }
`
export const VideoItem = styled.li`
  list-style-type: none;
  width: 100%;
  height: 270px;
  margin-bottom: 35px;
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin: 0px;
    margin-right: 15px;
  }
`
export const ThumbnailImg = styled.img`
  width: 450px;
  margin-bottom: 0px;
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 0px;
`

export const ChannelContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 12px;
  padding-top: 0px;
`
export const Title = styled.p`
  font-family: 'roboto';
  font-size: 13px;
  margin-top: 0px;
  margin-bottom: 3px;
  color: ${props => props.isDark && '#fff'};
  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 8px;
  }
`
export const ChannelName = styled.p`
  font-family: 'roboto';
  font-size: 12px;
  margin-top: 0px;
  margin-right: 12px;
  color: ${props => (props.isDark ? '#d7dfe9' : '#000')};
  display: ${props => props.screen && 'none'};
  @media (min-width: 768px) {
    display: ${props => (props.screen ? 'flex' : 'none')};
    margin-bottom: 8px;
    font-weight: 400;
    font-size: 14px;
  }
`

export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  color: ${props => (props.isDark ? '#d7dfe9' : '#000')};
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
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  color: ${props => (props.isDark ? '#fff' : '#000')};
  background-color: ${props => (props.isDark ? ' #0f0f0f' : '#f9f9f9')};
`
export const FailureViewImg = styled.img`
  width: 30%;
`
