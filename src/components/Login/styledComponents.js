import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${props => props.darkMode && '#181818'};
`
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border-radius: 8px;
  background-color: ${props => props.darkMode && '#0f0f0f'};
  box-shadow: ${props => (props.darkMode ? '' : '0px 4px 4px 0px gray')};
`
export const WebsiteLogo = styled.img`
  width: 40%;
  margin-bottom: 25px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`
export const Label = styled.label`
  color: ${props => (props.darkMode ? '#ffffff' : '#475569')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 600;
  opacity: 0.7;
`
export const Input = styled.input`
  height: 36px;
  width: 90%;
  margin-top: 7px;
  margin-bottom: 15px;
  padding-left: 12px;
  color: ${props => props.darkMode && '#ffffff'};
  border: 1px solid ${props => (props.darkMode ? ' #475569' : '#cbd5e1')};
  border-radius: 3px;
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`

export const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;
`

export const ShowPasswordText = styled.label`
  color: ${props => (props.isDark ? '#fff' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: ${props => (props.isDark ? '400' : '500')};
  padding-left: 5px;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 36px;
  border-width: 0px;
  border-radius: 10px;
  color: #ffffff;
  font-family:"Roboto"
  font-size:16px;
  font-weight:600;
  margin-top:25px;
  cursor:pointer;
  background-color: #3b82f6;
  @media(min-width:768px){
      font-size:17px;
  }
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
`
