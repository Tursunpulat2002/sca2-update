import styled from "styled-components";
import { Flex } from "grid-styled";

// TODO Container
export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
`

// TODO FormContainer
export const FormContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
`

// TODO Button
export const Button = styled.button`
  width: 150px;
  height: 70px;
  background-color: white;
  margin: 10px;
  margin-top: 70px;
  margin-bottom: 140px;
  font-size: 25px;
  border: 2px solid turquoise;
  border-radius: 10px;
  color: turquoise;
`

export const Text2 = styled(Flex)`
	position: relative;
	bottom: 80px;
	font-size: 35px;
	margin-bottom: 10px;
  color: turquoise;
`

export const Text = styled(Flex)`
	position: relative;
	bottom: 80px;
	font-size: 30px;
	border: 3px solid turquoise;
  border-radius: 8px;
	width: 700px;
	height: 110px;
`