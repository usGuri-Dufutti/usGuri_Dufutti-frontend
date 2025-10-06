import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MapPage from "./pages/MapPage"
import RegisterPage from "./pages/RegisterPage"
import RegisterAreaPage from "./pages/RegisterAreaPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/register-plant" element={<RegisterPage />} /> 
        <Route path="/register-area" element={<RegisterAreaPage />} /> 
      </Routes>
    </Router>
  )
}

export default App