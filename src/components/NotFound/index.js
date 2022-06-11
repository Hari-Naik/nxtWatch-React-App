import Context from '../../context/Context'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  AppContainer,
  Banner,
  NotFoundContainer,
  Img,
  Text,
  Description,
} from './styledComponents'

const NotFound = () => (
  <Context.Consumer>
    {value => {
      const {isDark} = value

      const renderNotFoundView = () => {
        const imgUrl = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

        return (
          <NotFoundContainer isDark={isDark}>
            <Img src={imgUrl} alt="not found" />
            <Text isDark={isDark}>Page Not Found</Text>
            <Description isDark={isDark}>
              we are sorry, the page you requested could not be found.
            </Description>
          </NotFoundContainer>
        )
      }

      return (
        <AppContainer>
          <Header />
          <Banner>
            <SideBar />
            {renderNotFoundView()}
          </Banner>
        </AppContainer>
      )
    }}
  </Context.Consumer>
)
export default NotFound
