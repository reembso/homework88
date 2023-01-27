import { useState, useEffect } from "react"
import { Header } from "./components/header/Header"
import { Login } from "./components/login/Login"
import MainContent from "./components/main-content/MainContent"
import "./App.css"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentPage, setCurrentPage] = useState("users")

  useEffect(() => {
    const storageUserLoggedInfo = localStorage.getItem("isLogin")
    if (storageUserLoggedInfo === "1") {
      setIsLoggedIn("true")
    }
  }, [])

  const NavigationHandler = (page) => {
    setCurrentPage(page)
  }

  const loginHandler = () => {
    localStorage.setItem("isLogin", "1")
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem("isLogin")
    setIsLoggedIn(false)
  }
  return (
    <div>
      <Header
        onChange={NavigationHandler}
        onClick={logoutHandler}
        isAuth={isLoggedIn}
      />
      {isLoggedIn ? (
        <MainContent currentPage={currentPage} />
      ) : (
        <Login loginHandler={loginHandler} />
      )}
    </div>
  )
}

export default App
