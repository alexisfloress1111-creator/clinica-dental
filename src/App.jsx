import "./App.css"

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Servicios from "./pages/Servicios"
import DisenoSonrisa from "./pages/DisenoSonrisa"
import Ortodoncia from "./pages/Ortodoncia"
import Blanqueamiento from "./pages/Blanqueamiento"
import Reserva from "./pages/Reserva"

function App() {

  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/servicios" element={<Servicios />} />

      <Route
        path="/diseno-sonrisa"
        element={<DisenoSonrisa />}
      />

      <Route
        path="/ortodoncia"
        element={<Ortodoncia />}
      />

      <Route
        path="/blanqueamiento"
        element={<Blanqueamiento />}
      />
      <Route
  path="/reserva"
  element={<Reserva />}
/>
<Route
  path="/reserva"
  element={<Reserva />}
/>

    </Routes>
  )
}

export default App