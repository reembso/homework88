import React from "react"
import styled from "styled-components"
import { NavigationPanel } from "./NavigationPanel"

export const Header = (props) => {
  return (
    <StyledHeader>
      <h1>A Typical Page</h1>
      {props.isAuth && (
        <NavigationPanel onChange={props.onChange} onClick={props.onClick} />
      )}
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #700170;
  padding: 20px 20px;
  color: white;
`
