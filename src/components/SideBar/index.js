import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {MdWhatshot} from 'react-icons/md'
import Context from '../../context/Context'

import {
  SidebarContainer,
  HomeCard,
  TrendingCard,
  GamingCard,
  SavedVideosCard,
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

      const color = isDark ? '#fff' : '#313131'

      return (
        <SidebarContainer isDark={isDark}>
          <div>
            <Link to="/">
              <HomeCard
                id="Home"
                onClick={onClickActiveTabId}
                activeTabId={activeTabId}
                isDark={isDark}
              >
                <AiFillHome
                  size={18}
                  color={activeTabId === 'Home' ? '#ff0000' : `${color}`}
                />
                <MenuText dark={isDark}>Home</MenuText>
              </HomeCard>
            </Link>
            <Link to="trending">
              <TrendingCard
                id="Trending"
                onClick={onClickActiveTabId}
                activeTabId={activeTabId}
                isDark={isDark}
              >
                <MdWhatshot
                  size={18}
                  color={activeTabId === 'Trending' ? '#ff0000' : `${color}`}
                />
                <MenuText dark={isDark}>Trending</MenuText>
              </TrendingCard>
            </Link>
            <Link to="/gaming">
              <GamingCard
                id="Gaming"
                onClick={onClickActiveTabId}
                activeTabId={activeTabId}
                isDark={isDark}
              >
                <SiYoutubegaming
                  size={18}
                  color={activeTabId === 'Gaming' ? '#ff0000' : `${color}`}
                />
                <MenuText dark={isDark}>Gaming</MenuText>
              </GamingCard>
            </Link>
            <Link to="/saved-videos">
              <SavedVideosCard
                id="savedVideos"
                onClick={onClickActiveTabId}
                activeTabId={activeTabId}
                isDark={isDark}
              >
                <BiListPlus
                  size={22}
                  color={
                    activeTabId === 'Saved Videos' ? '#ff0000' : `${color}`
                  }
                />
                <MenuText dark={isDark} activeTabId={activeTabId}>
                  Saved Videos
                </MenuText>
              </SavedVideosCard>
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
