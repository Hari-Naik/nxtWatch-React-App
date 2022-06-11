import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  width: 35vh;
  padding-top: 25px;
  background-color: ${props => props.isDark && '#181818'};
  @media (max-width: 592px) {
    display: none;
  }
`
// export const MenuItem = styled.Link`
//   text-decoration: none;
// `
export const HomeCard = styled.div`
  display: flex;
  align-items: center;
  width: 98%;
  padding-left: 15px;
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: ${props =>
    props.isDark
      ? props.activeTabId === 'Home' && ' #606060'
      : props.activeTabId === 'Home' && '#e2e8f0'};
`
export const TrendingCard = styled.div`
  display: flex;
  align-items: center;
  width: 98%;
  padding-left: 15px;
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: ${props =>
    props.isDark
      ? props.activeTabId === 'Trending' && ' #606060'
      : props.activeTabId === 'Trending' && '#e2e8f0'};
`
export const GamingCard = styled.div`
  display: flex;
  align-items: center;
  width: 98%;
  padding-left: 15px;
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: ${props =>
    props.isDark
      ? props.activeTabId === 'Gaming' && ' #606060'
      : props.activeTabId === 'Gaming' && '#e2e8f0'};
`
export const SavedVideosCard = styled.div`
  display: flex;
  align-items: center;
  width: 98%;
  padding-left: 15px;
  padding-top: 2px;
  padding-bottom: 2px;
  background-color: ${props =>
    props.isDark
      ? props.activeTabId === 'Saved Videos' && ' #606060'
      : props.activeTabId === 'Saved Videos' && '#e2e8f0'};
`
export const MenuText = styled.h1`
  color: ${props => (props.dark ? '#fff' : '#313131')};
  font-family: 'roboto';
  font-size: 15px;
  font-weight: 500;
  margin-left: 15px;
  text-decoration: none;
`

export const ContactusSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  margin-left: 15px;
`
export const ContactusText = styled.p`
  color: ${props => (props.dark ? '#fff' : '#1e293b')};
  font-family: 'roboto';
  font-size: 18px;
  font-weight: 500;
`
export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  width: 25px;
  margin-right: 10px;
`
export const Description = styled.p`
  color: ${props => (props.dark ? '#fff' : '#1e293b')};
  font-family: 'roboto';
  font-size: 16px;
  font-weight: 500;
`
