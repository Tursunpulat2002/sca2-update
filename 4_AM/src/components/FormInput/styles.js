import styled from "styled-components";
import { Flex } from "grid-styled";

export const Input = styled.input`
	border: 2px solid turquoise;
	border-radius: 6px;
	width: 300px;
	margin: 15px;
	height: 60px;
	font-size: 30px;
`

export const Text = styled(Flex)`
	margin: 10px;
	font-size: 30px;
	font-weight: bold;
`

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
`