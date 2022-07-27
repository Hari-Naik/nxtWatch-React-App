import styled from 'styled-components'

export const App = styled.div`
  color: ${props => props.darkMode && '#ffffff'};
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const Banner = styled.div`
  display: flex;
  align-items: center;
  min-height: 90vh;
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

export const VideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 25px;
`

export const ThumbnailImg = styled.img`
  width: 365px;
  height: 178px;
  margin-bottom: 0px;
  @media (min-width: 576px) {
    height: 168px;
  }
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin: 0px;
  @media (min-width: 576px) {
    width: 50%;
  }
`

export const ProfileImage = styled.img`
  width: 30px;
  margin-top: 4px;
  @media (min-width: 576px) {
    display: none;
  }
`

export const ChannelContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  padding-top: 0px;
  color: ${props => props.darkMode && '#fff'};
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin-top: 0px;
  margin-bottom: 8px;
  @media (min-width: 576px) {
    font-size: 22px;
  }
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 12px
  margin-top: 0px;
  margin-right: 12px;
 display: ${props => props.screen && 'none'};
  @media (min-width: 768px) {
    display: ${props => props.screen && 'flex'};
    margin-bottom: 4px;
    font-size: 15px;
  }
`

export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  color: ${props => (props.darkMode ? '#d7dfe9' : '#0f0f0f')};
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
  color:${props => props.darkMode && '#fff'}
  background-color: ${props => (props.darkMode ? '#f9f9f9' : '#0f0f0f')};
`
export const FailureViewImg = styled.img`
  width: 30%;
`

export const TrendingBanner = styled.div`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 25px;
  background-color: ${props => (props.isDark ? '#181818' : '#ebebeb')};
  @media (min-width: 768px) {
    width: 100%;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`

export const TrendingCard = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    margin-left: 25px;
  }
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  margin-right: 12px;
  background-color: ${props => (props.isDark ? '#000' : '#cbd5e1')};
  border-radius: 50%;
  @media (min-width: 768px) {
    height: 60px;
    width: 60px;
  }
`

export const Text = styled.h1`
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
  font-family:"Roboto"
  font-size: 18px;
  font-weight:700;
@media(min-width:768px){
    font-size: 22px;
}
`

export const FailureViewText = styled.h1`
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
`

export const FailureViewDescription = styled.p`
  color: #475569;
  font-family: . 'roboto';
  font-weight: 600;
  margin-top: 1px;
  text-align: center;
`
