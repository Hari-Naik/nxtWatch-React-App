import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#fff')};
`

export const Banner = styled.div`
  display: flex;
  align-items: center;
  height: 90vh;
  padding-bottom: 25px;
  overflow-y: scroll;
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const Img = styled.img`
  width: 40%;
`

export const Text = styled.h1`
  color: ${props => (props.isDark ? '#fff' : ' #1e293b')};
`
export const Description = styled.p`
  color: ${props => (props.isDark ? '#cbd5e1' : '#424242')};
`
