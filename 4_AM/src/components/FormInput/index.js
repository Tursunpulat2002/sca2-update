import React from "react"
import { Input, Text, Container } from "./styles"

const FormInput = ({label, update }) => (
    <Container>
        <Text>{`Enter ${label}:`}</Text>
        <Input onChange={update} />
    </Container>
)

export default FormInput