import { Outlet } from "react-router"
import { useState } from "react"
import NavBar from "./components/navbar/navbar"

function App() {
    const [cart, setCart] = useState({});

  return (
    <>
      <NavBar />
      <Outlet context={[cart, setCart]} />
    </>
  )
}

export default App
