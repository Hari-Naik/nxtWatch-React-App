import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#fff')};
`

export const Banner = styled.div`
  display: flex;
  align-items: center;
  height: 90vh;
`

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  color: ${props => (props.isDark ? '#d7dfe9' : '#000')};
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const FailureImg = styled.img`
  width: 30%;
`
export const FailureViewText = styled.h1`
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
`

export const FailureViewDescription = styled.p`
  color: #475569;
  font-family: . 'Roboto';
  font-weight: 600;
  margin-top: 1px;
  text-align: center;
`

export const RetryBtn = styled.button`
  height: 32px;
  width: 90px;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  background-color: #4f46e5;
`
export const VideoItemDetailsContainer = styled.div`
  width: 100%;
  height: 90vh;
  padding-top: 25px;
//   overflow-y: scroll;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};s
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin-left: auto;
  margin-right: 25px;
  //   padding-bottom: 25px;
`
export const Title = styled.p`
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 0px;
`
export const ViewsAndLikesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-right: 5px;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
export const VideoContainer = styled.div`
  width: 100%;
`

export const ViewsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LikesContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Views = styled.p`
  color: ${props => (props.isDark ? '#d7dfe9' : '#909090')};
  opacity: ${props => props.isDark && '0.5'};
  font-family: 'Roboto';
  font-size: 14px;
  padding-right: 12px;
`
export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
  cursor: pointer;
  background-color: transparent;
`
export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
  cursor: pointer;
  background-color: transparent;
`
export const DisLikeButton = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  color: ${props => (props.isDisLiked ? '#2563eb' : '#64748b')};
  cursor: pointer;
  background-color: transparent;
`
export const ButtonText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  padding-left: 8px;
`

export const ChannelProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`

export const ChannelContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 0px;
  margin-left: 15px;
`
export const ChannelName = styled.h1`
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 400;
  margin-top: 0px;
  margin-bottom: 2px;
`
export const Subscribers = styled.p`
  color: ${props => (props.isDark ? '#d7dfe9' : '#909090')};
  opacity: ${props => props.isDark && '0.5'};
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  margin-top: 0px;
`

export const Description = styled.p`
  color: ${props => (props.isDark ? '#fff' : '#64748b')};
  font-family: 'Roboto';
  font-size: 14px;
  @media (min-width: 768px) {
    padding-left: 55px;
  }
`
