import styled from 'styled-components'

export const SidebarContainer = styled.div`
  display: none;
  justify-content: space-between;
  flex-direction: column;
  min-height: 90vh;
  //   max-height: 100vh;
  padding-top: 25px;
  background-color: ${props => (props.isDark ? '#313131' : '#ffffff')};
  @media (min-width: 768px) {
    display: flex;
    width: 35vh;
  }
`
// export const MenuItem = styled.Link`
//   text-decoration: none;

// `

export const MenuCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  padding-bottom: 2px;
  margin-bottom: 8px;
  background-color: ${props =>
    props.isDark ? props.isActive && ' #606060' : props.isActive && '#e2e8f0'};
  @media (min-width: 592px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 0px;
    padding-left: 15px;
    padding-top: 2px;
  }
`

export const MenuText = styled.h1`
  color: ${props => (props.dark ? '#fff' : '#313131')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: ${props => (props.isActive ? '800' : '500')};
  text-decoration: none;
  padding-left: 15px;
  @media (max-width: 592px) {
    padding-left: 0px;
    margin-left: 15px;
    font-size: 15px;
  }
`

export const ContactusSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  margin-left: 15px;
  @media (max-width: 767px) {
    display: none;
  }
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
