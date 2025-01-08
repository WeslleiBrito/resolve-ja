import styled from "styled-components/native"

interface InputProps {
    isFocused: boolean;
    isErrored: boolean;
}

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    font-size: 55px;
    font-weight: 900;
`

export const ContainerInput = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    font-size: 16px;
    padding: 20px;
`

export const InputText = styled.TextInput<InputProps>`
  width: 100%;
  border-radius: 6px;
  border: 1px solid
    ${({ isFocused, isErrored }) =>
      isFocused
        ? 'rgba(167, 139, 250, 1)'
        : isErrored
        ? 'rgba(255, 0, 0, 1)'
        : 'rgba(55, 65, 81, 1)'};
  padding: 12px 16px;
  color: rgba(17, 24, 39, 1);
  margin-bottom: 15px;
`;


export const ContainerButton = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
    width: 400px;
`

export const Button = styled.TouchableOpacity`
    width: 90%;
`

export const TextButton = styled.Text`
    color: white;
    background-color: rgba(167, 139, 250, 1);
    padding: 10px 20px;
    border-radius: 6px;
    text-align: center;
    font-size: 16px;
`

export const ContainerText = styled.View`
    margin-top: 20px;
    flex-direction: row;
    width: 400px;
    height: 40px;
    justify-content: center;  

`
export const TextDescription = styled.Text`
    font-size: 20px;
    color: rgba(55, 65, 81, 1);
    line-height: 25px;
`

export const ButtonText = styled.TouchableOpacity`
    margin-left: 5px;
`

export const NameButton = styled.Text`
    color: rgba(167, 139, 250, 1);
    font-weight: 600;
    background-color: transparent;
    font-size: 25px;
    line-height: 25px;
` 