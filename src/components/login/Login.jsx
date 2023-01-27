import React from "react"
import styled from "styled-components"
import { Card } from "../UI/card/Cards"
import { Button } from "../UI/button/Button"
import { useState, useEffect } from "react"

export const Login = ({ loginHandler }) => {
  const [completedEmail, setCompletedEmail] = useState("")
  const [comletedPassword, setCompletedpassword] = useState("")
  const [isEmailValid, setIsEmailValid] = useState()
  const [isPasswordValid, setIsPasswordVlid] = useState()
  const [isFormValid, setIsFormValid] = useState(false)

  const emailChangeHandler = (e) => {
    setCompletedEmail(e.target.value)
    setIsEmailValid(completedEmail.includes("@"))
  }
  const passwordChangeHandler = (e) => {
    setCompletedpassword(e.target.value)
    setIsPasswordVlid(comletedPassword.trim().length >= 6)
  }

  useEffect(() => {
    setIsFormValid(isEmailValid && isPasswordValid)
  }, [isEmailValid, isPasswordValid])

  const submitHandler = (e) => {
    e.preventDefault()
    loginHandler(completedEmail, comletedPassword)
  }

  const validateEmailHandler = () => {
    setIsEmailValid(completedEmail.includes("@"))
  }
  const validatePasswordHandler = () => {
    setIsPasswordVlid(comletedPassword.trim().length > 6)
  }

  return (
    <Card>
      <form>
        <StyledInputContainer>
          <label htmlFor="">Email</label>
          <StyledInput
            type="email"
            onChange={emailChangeHandler}
            value={completedEmail}
            onBlur={validateEmailHandler}
            bg={isEmailValid === false ? "#fbdada" : ""}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <label htmlFor="">Password</label>
          <StyledInput
            type="password"
            onChange={passwordChangeHandler}
            value={comletedPassword}
            onBlur={validatePasswordHandler}
            bg={isPasswordValid === false ? "#fbdada" : ""}
          />
        </StyledInputContainer>
        <ButtonContainer>
          <Button
            bgColor={"success"}
            disabled={!isFormValid}
            onClick={submitHandler}
          >
            Login
          </Button>
        </ButtonContainer>
      </form>
    </Card>
  )
}

const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

const StyledInput = styled.input`
  width: 500px;
  height: 25px;
  background-color: ${(props) => props.bg};
`

const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`
