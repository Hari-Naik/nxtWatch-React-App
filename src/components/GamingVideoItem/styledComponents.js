import styled from 'styled-components'

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
