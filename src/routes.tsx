import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { AppContext } from "./components/AppContext"
import Conta from "./pages/Conta"
import ContaInfo from "./pages/ContaInfo"
import Home from "./pages/Home"
import { UserInfo } from "./pages/UserInfo"

const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext)

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={isLoggedIn ? <Conta /> : <Home />} />
            <Route path='/infoconta' element={<ContaInfo />} />
            <Route path='/userinfo/:id' element={<UserInfo />} />
        </Routes>
    )
}

export default MainRoutes
