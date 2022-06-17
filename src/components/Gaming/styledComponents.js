import styled from 'styled-components'

export const App = styled.div`
  color: ${props => props.darkMode && '#ffffff'};
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
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
  height: 90vh;
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  @media (min-width: 768px) {
    width: 100%;
  }
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:90vh;
  color:${props => props.isDark && '#fff'}
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const FailureImg = styled.img`
  width: 30%;
`

export const RetryBtn = styled.button`
  height: 32px;
  width: 90px;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  background-color: #4f46e5;
`
export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  width: 100%;
`

// export const GamingBanner = styled.div`
//   width: 100%;
//   height: 150px;
//   padding: 25px;
//   background-color: #ebebeb;
//   @media (min-width: 768px) {
//     width: 100%;
//     height: 160px;
//     padding-left: 15px;
//   }
// `

// export const GamingCard = styled.div`
//   display: flex;
//   align-items: center;
//   @media (min-width: 768px) {
//     margin-left: 85px;
//   }
// `
// export const IconContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 60px;
//   width: 60px;
//   margin-right: 12px;
//   background-color: #cbd5e1;
//   border-radius: 50%;
// `

// export const Text = styled.h1`
//   color: #000;
//   font-family: 'roboto';
//   font-size: 22px;
//   font-weight: 500;
// `

export const GamingBanner = styled.div`
  width: 100%;
  height: 175px;
  padding: 25px;
  background-color: ${props => (props.isDark ? '#424242' : '#ebebeb')};
  @media (min-width: 768px) {
    width: 100%;
    height: 120px;
    padding-left: 15px;
  }
`

export const GamingCard = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    margin-left: 85px;
  }
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  margin-right: 12px;
  background-color: ${props => (props.isDark ? '#000' : '#cbd5e1')};
  border-radius: 50%;
`

export const Text = styled.h1`
  color: ${props => (props.isDark ? '#fff' : '#000')};
  font-family:"roboto"
  font-size: 22px;
  font-weight:500;
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  width: 100%;
  overflow-y: scroll;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const VideoContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;
  padding-top: 45px;
  padding-left: 25px;
  @media (min-width: 768px) {
    padding-left: 65px;
  }
`
export const VideoItem = styled.li`
  width: 154px;
  flex-grow: 1;
  list-style-type: none;
  margin-right: 17px;
  margin-bottom: 25px;
  @media (min-width: 768px) {
    width: 250px;
  }
`

export const Image = styled.img`
  width: 100%;
`
export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => (props.isDark ? '#d7dfe9' : '#000')};
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
export const Title = styled.p`
font-family:"roboto"
font-size:16px;
font-weight:500;
margin-bottom:4px;
margin-top:2px;
color:${props => (props.isDark ? '#fff' : '#000')};
@media (min-width:768px){
    font-size:18px;
}
`
export const Views = styled.p`
  font-family: 'roboto';
  font-size: 14px;
  font-weight: 500;
  margin-top: 0px;
  margin-bottom: 2px;
  padding-right: 10px;
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
