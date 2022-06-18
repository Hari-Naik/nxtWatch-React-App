import styled from 'styled-components'

export const App = styled.div`
  background-color: ${props => (props.darkMode ? '#181818' : '#fff')};
`

export const Banner = styled.div`
  display: flex;
  align-items: center;
  min-height: 90vh;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  width: 100%;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  @media (min-width: 768px) {
    width: 100%;
  }
`
export const VideosListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  overflow-y: scroll;
  width: 100%;
  flex-grow: 1;
  color: ${props => props.darkMode && '#ffffff'};
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  @media (min-width: 768px) {
    width: 100%;
  }
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 89%;
  height: 32px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid gray;
  @media (min-width: 768px) {
    width: 450px;
    margin: 0px;
    margin-left: 12px;
    margin-top: 12px;
  }
`
export const Input = styled.input`
  width: 80%;
  height: 31px;
  padding-left: 10px;
  outline: none;
  border: none;
  color: #909090;
  background-color: transparent;
  @media (min-width: 768px) {
    width: 80%;
  }
`
export const SearchButton = styled.button`
  width: 20%;
  height: 32px;
  padding-left: 22px;
  padding-right: 15px;
  padding-top: 6px;
  border: 1px solid grey;
  background-color: gray;
  cursor: pointer;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
  }
`
export const BannerImageContainer = styled.div`
  width: 100%;
  height: 175px;
  padding: 25px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  @media (min-width: 768px) {
    width: 100%;
    height: 250px;
    padding-left: 15px;
  }
`

export const LogoCloseIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    width: 80%;
  }
`
export const WebsiteLogo = styled.img`
  width: 30%;
  @media (min-width: 768px) {
    width: 16%;
  }
`

export const BannerDescription = styled.p`
  font-family: 'roboto';
  font-size: 16px;
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
  width: 100%;
  padding-left: 12px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const NoSearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  color: ${props => props.isDark && '#fff'};
`
export const NoSearchResultsImg = styled.img`
  width: 30%;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  background-color: ${props => (props.isDark ? ' #0f0f0f' : '#f9f9f9')};
`
export const FailureViewImg = styled.img`
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
  font-family: . 'roboto';
  font-weight: 600;
  margin-top: 1px;
  text-align: center;
`
export const FailureViewContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 35px;
`
