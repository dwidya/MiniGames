import MobileLegend from "./assets/Components/MobileLegends"
import CoundownTime from "./assets/Components/CountdownTime"
import SalaryCalculator from "./assets/Components/SalaryCalculator"
import Landing from "./assets/Components/Landing"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mobilelegend" element={<MobileLegend />} />
        <Route path="/count" element={<CoundownTime />} />
        <Route path="/salary" element={<SalaryCalculator />} />
      </Routes>
    </Router>
  )
}