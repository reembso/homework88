import React from "react"
import styled from "styled-components"

export const Button = ({ children, color, disabled, onClick }) => {
  return (
    <StyledButton color={color} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  width: 80px;
  height: 30px;
  padding: 5px 10px;
  background-color: ${(props) => (props.color ? "#50015f" : "violet")};
  border: none;
  border-radius: 10px;
  color: white;
  :disabled {
    background-color: gray;
  }
`