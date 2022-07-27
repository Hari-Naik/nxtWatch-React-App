import styled from 'styled-components'

export const App = styled.div`
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
`

export const Banner = styled.div`
  display: flex;
  align-items: center;
  min-height: 90vh;
`
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  width: 100%;
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  overflow-y: scroll;
  width: 100%;
`
export const VideosListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${props => props.darkMode && '#ffffff'};
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  width: 90%;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #cccccc;
  @media (min-width: 566px) {
    width: 450px;
    margin-left: 10px;
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
  border: 1px solid #cccccc;
  border-right: 0px;
  background-color: ${props => (props.isDark ? '#424242' : '#ebebeb')};
  cursor: pointer;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
  }
`
export const BannerContainer = styled.div`
  width: 100%;
  height: 175px;
  padding-left: 25px;
  padding-right: 25px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  @media (min-width: 768px) {
    height: 230px;
  }
`

export const LogoCloseIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding-top: 15px;
  @media (min-width: 768px) {
    padding-top: 25px;
  }
`
export const WebsiteLogo = styled.img`
  width: 30%;
  @media (min-width: 768px) {
    width: 150px;
  }
`

export const BannerDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #1e293b;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`
export const GetItNowBtn = styled.button`
  height: 36px;
  width: ${props => (props.outline ? '100px' : '90px')};
  border: ${props => (props.outline ? '1px solid 1e293b' : 'none')};
  border-radius: ${props => (props.outline ? '' : '4px')};
  color: ${props => (props.outline ? '#1e293b' : '#fff')};
  cursor: pointer;
  background-color: ${props => (props.outline ? 'transparent' : '#4f46e5')};
  font-weight: 600;
  font-size: 14px;
  //   margin-top: 15px;
  opacity: ${props => props.outline && 0.8};
  @media (min-width: 768px) {
    margin-top: 15px;
  }
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
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 12px;
  @media (min-width: 567px) {
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
  padding-bottom: 25px;
  padding-top: 25px;
`
export const NoSearchResultsImg = styled.img`
  width: 30%;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  padding-bottom: 25px;
`
export const FailureViewImg = styled.img`
  width: 30%;
`

export const FailureViewText = styled.h1`
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  @media (min-width: 576px) {
    font-size: 20px;
  }
`

export const FailureViewDescription = styled.p`
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-family: . 'Roboto';
  font-weight: 400;
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
