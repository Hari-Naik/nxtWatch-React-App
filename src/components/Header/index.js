import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {WiDaySunny} from 'react-icons/wi'
import Cookies from 'js-cookie'
import Context from '../../context/Context'

import {
  HeaderContainer,
  WebsiteLogo,
  NavRightMobile,
  Li,
  Button,
  PopupContainer,
  ModalContainer,
  ModalContainerText,
  ButtonsContainer,
  ModalButton,
  NavRightScreen,
  ProfileImage,
  LogoutButton,
} from './styledComponents'

const Header = props => (
  <Context.Consumer>
    {value => {
      const {isDark, onToggleTheme} = value

      const onConfirmLogout = () => {
        const {history} = props
        history.replace('/login')
        Cookies.remove('jwt_token')
      }

      const websiteLogo = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <HeaderContainer isDark={isDark}>
          <Link to="/">
            <WebsiteLogo src={websiteLogo} alt="website logo" />
          </Link>
          <NavRightMobile>
            <Li>
              <Button type="button" data-testid="theme" onClick={onToggleTheme}>
                {isDark ? (
                  <WiDaySunny color="#ffffff" size={22} />
                ) : (
                  <FaMoon size={17} />
                )}
              </Button>
            </Li>
            <Li>
              <GiHamburgerMenu size={17} color={isDark ? '#fff' : '#000'} />
            </Li>
            <PopupContainer>
              <Popup
                modal
                trigger={
                  <Li>
                    <Button type="button" isDark={isDark}>
                      <FiLogOut size={15} />
                    </Button>
                  </Li>
                }
              >
                {close => (
                  <ModalContainer isDark={isDark}>
                    <ModalContainerText>
                      Are you sure, you want to logout
                      <ButtonsContainer>
                        <ModalButton outline onClick={() => close()}>
                          Cancel
                        </ModalButton>
                        <ModalButton type="button" onClick={onConfirmLogout}>
                          Confirm
                        </ModalButton>
                      </ButtonsContainer>
                    </ModalContainerText>
                  </ModalContainer>
                )}
              </Popup>
            </PopupContainer>
          </NavRightMobile>
          <NavRightScreen isDark={isDark}>
            <Li>
              <Button type="button" data-testid="theme" onClick={onToggleTheme}>
                {isDark ? (
                  <WiDaySunny size={25} color="#fff" />
                ) : (
                  <FaMoon size={17} />
                )}
              </Button>
            </Li>
            <Li>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
            </Li>
            <PopupContainer>
              <Popup
                modal
                trigger={
                  <Li>
                    <LogoutButton type="button" isDark={isDark}>
                      Logout
                    </LogoutButton>
                  </Li>
                }
              >
                {close => (
                  <ModalContainer isDark={isDark}>
                    <ModalContainerText isDark={isDark}>
                      Are you sure, you want to logout
                      <div>
                        <ModalButton outline onClick={() => close()}>
                          Cancel
                        </ModalButton>
                        <ModalButton type="button" onClick={onConfirmLogout}>
                          Confirm
                        </ModalButton>
                      </div>
                    </ModalContainerText>
                  </ModalContainer>
                )}
              </Popup>
            </PopupContainer>
          </NavRightScreen>
        </HeaderContainer>
      )
    }}
  </Context.Consumer>
)
export default withRouter(Header)
