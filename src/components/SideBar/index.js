import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {MdWhatshot} from 'react-icons/md'
import Context from '../../context/Context'

import {
  SidebarContainer,
  MenuCard,
  MenuText,
  ContactusSection,
  ContactusText,
  SocialMediaContainer,
  Image,
  Description,
} from './styledComponents'

const SideBar = () => (
  <Context.Consumer>
    {value => {
      const {isDark, onActiveTabId, activeTabId} = value

      const onClickActiveTabId = e => {
        /* console.log(e.target.innerHTML) */
        onActiveTabId(e.target.innerHTML)
      }

      const colorValue = isDark ? '#fff' : '#313131'

      return (
        <SidebarContainer isDark={isDark}>
          <div>
            <Link to="/">
              <MenuCard
                id="Home"
                onClick={onClickActiveTabId}
                isActive={activeTabId === 'Home'}
                isDark={isDark}
              >
                <AiFillHome
                  size={20}
                  color={activeTabId === 'Home' ? '#ff0000' : colorValue}
                />
                <MenuText dark={isDark} isActive={activeTabId === 'Home'}>
                  Home
                </MenuText>
              </MenuCard>
            </Link>
            <Link to="/trending">
              <MenuCard
                id="Trending"
                onClick={onClickActiveTabId}
                isActive={activeTabId === 'Trending'}
                isDark={isDark}
              >
                <MdWhatshot
                  size={20}
                  color={activeTabId === 'Trending' ? '#ff0000' : colorValue}
                />
                <MenuText dark={isDark} isActive={activeTabId === 'Trending'}>
                  Trending
                </MenuText>
              </MenuCard>
            </Link>
            <Link to="/gaming">
              <MenuCard
                id="Gaming"
                onClick={onClickActiveTabId}
                isActive={activeTabId === 'Gaming'}
                isDark={isDark}
              >
                <SiYoutubegaming
                  size={20}
                  color={activeTabId === 'Gaming' ? '#ff0000' : colorValue}
                />
                <MenuText dark={isDark} isActive={activeTabId === 'Gaming'}>
                  Gaming
                </MenuText>
              </MenuCard>
            </Link>
            <Link to="/saved-videos">
              <MenuCard
                id="savedVideos"
                onClick={onClickActiveTabId}
                isActive={activeTabId === 'Saved Videos'}
                isDark={isDark}
              >
                <BiListPlus
                  size={24}
                  color={
                    activeTabId === 'Saved Videos' ? '#ff0000' : colorValue
                  }
                />
                <MenuText
                  dark={isDark}
                  isActive={activeTabId === 'Saved Videos'}
                >
                  Saved Videos
                </MenuText>
              </MenuCard>
            </Link>
          </div>
          <ContactusSection>
            <ContactusText dark={isDark}>CONTACT US</ContactusText>
            <SocialMediaContainer>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                alt="facebook logo"
              />
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                alt="twitter logo"
              />
              <Image
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                alt="linked in logo"
              />
            </SocialMediaContainer>
            <Description dark={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </Description>
          </ContactusSection>
        </SidebarContainer>
      )
    }}
  </Context.Consumer>
)

export default SideBar
