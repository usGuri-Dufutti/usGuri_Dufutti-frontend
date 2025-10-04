import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MapPage from "./pages/MapPage"
import ChatPage from "./pages/ChatPage" 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/chat" element={<ChatPage />} /> 
      </Routes>
    </Router>
  )
}

export default App