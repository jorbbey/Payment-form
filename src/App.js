import MenuBar from './components/MenuBar'
import InfoPage from './components/InfoPage'
import MonthlyPlan from './components/MonthlyPlan'
import YearlyPlan from './components/YearlyPlan'
import MonthlyAddons from './components/MonthlyAddons'
import YearlyAddons from './components/YearlyAddons'
import MonthlySummary from './components/MonthlySummary'
import YearlySummary from './components/YearlySummary'
import Farewell from './components/Farewell'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div className="container">
        <MenuBar />
        {/* <InfoPage />   */}
        {/* <MonthlyPlan />   */}
        {/* <YearlyPlan />  */}

        <Routes>
          <Route exact path="/" element={<InfoPage />}></Route>
          <Route exact path="/monthly_plan" element={<MonthlyPlan />}></Route>
          <Route exact path="/yearly_plan" element={<YearlyPlan />}></Route>
          <Route
            exact
            path="/addons_monthly"
            element={<MonthlyAddons />}
          ></Route>
          <Route exact path="/addons_yearly" element={<YearlyAddons />}></Route>
          <Route
            exact
            path="/summary_monthly"
            element={<MonthlySummary />}
          ></Route>
          <Route
            exact
            path="/summary_yearly"
            element={<YearlySummary />}
          ></Route>
          <Route exact path="/thankyou" element={<Farewell />}></Route>
        </Routes>
      </div>
    </Router>
  )
}
