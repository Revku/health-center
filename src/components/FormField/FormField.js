import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
    display: block;
    font-size: 15px;
    margin-bottom: 8px;
    font-weight: ${props => props.theme.font.weight.semibold};
`;

const Input = styled.input`
    background-color: ${props => props.theme.colors.secondary};
    border: none;
    border-radius: 5px;
    padding: 15px 10px;
    color: ${props => props.theme.colors.text};
    width: 100%;
`;

const Wrapper = styled.div`
    margin: 20px 0;
`;

const FormField = ({ id, type = "text", value, onChange, name = id, label, placeholder = label }) => {
  return (
    <Wrapper>
        <Label>{label}</Label>
        <Input 
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
        />
    </Wrapper>
  )
}

export default FormField