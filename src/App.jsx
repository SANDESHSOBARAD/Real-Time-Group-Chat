import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import ChatsPage from "./Pages/ChatsPage"
import LoginPage from "./Pages/LoginPage"
import { PrivateRoute } from "./routes/privateRoute"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<LoginPage/>} />
        <Route path = "/chats" element = {<PrivateRoute><ChatsPage/></PrivateRoute>}/>
      </Routes>
    </div>
  )
}

export default App
