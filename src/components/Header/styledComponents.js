import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  width: 100%;
  display: flex;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  background-color: ${props => (props.isDark ? '#313131' : '#ffffff')};
`
export const WebsiteLogo = styled.img`
  width: 90px;
`
export const NavRightMobile = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const Li = styled.li`
  list-style-type: none;
  padding-right: 12px;
`
export const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  color: ${props => (props.isDark ? '#fff' : '#000')};
  background-color: transparent;
`

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border-radius: 10px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#fff')};
  margin: auto;
`
export const ModalContainerText = styled.h1`
  color: ${props => (props.isDark ? '#fff' : '#00306e')};
  font-family: 'roboto';
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalButton = styled.button`
  height: 35px;
  width: 90px;
  margin-top: 15px;
  margin-right: 15px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  color: ${props => (props.outline ? '#475569' : '#fff')};
  border: ${props => (props.outline ? '1px solid #475569' : 'none')};
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
`

export const NavRightScreen = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${props => props.isDark && '#ffffff'};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ProfileImage = styled.img`
  width: 25px;
  margin-left: 15px;
`
export const LogoutButton = styled.button`
  color: ${props => (props.isDark ? '#fff' : '#3b82f6')};
  border: ${props => (props.isDark ? '2px solid #fff' : '2px solid #3b82f6')};
  background-color: transparent;
  margin-left: 15px;
  margin-right: 15px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`
