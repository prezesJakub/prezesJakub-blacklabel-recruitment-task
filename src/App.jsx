import { useState } from "react"
import Tabs from "./components/Tabs"
import data from "./data/data.json"
import Layout from "./components/Layout"
import RevenueOverTimeChart from "./components/charts/RevenueOverTimeChart"
import RevenueByCategoryChart from "./components/charts/RevenueByCategoryChart"
import RevenueByCountryChart from "./components/charts/RevenueByCountryChart"
import { calculateKPIs, formatCurrency } from "./utils/analytics"
import KPICards from "./components/KPICards"

import {
  enrichOrders,
  groupRevenueByDate,
  groupRevenueByCountry,
  groupRevenueByCategory
} from "./utils/analytics"

function App() {
  const enrichedOrders = enrichOrders(data.orders)
  const kpis = calculateKPIs(enrichedOrders)

  const revenueByDate = groupRevenueByDate(enrichedOrders)
  const revenueByCountry = groupRevenueByCountry(enrichedOrders)
  const revenueByCategory = groupRevenueByCategory(enrichedOrders)

  const [activeTab, setActiveTab] = useState("time")

  return (
    <Layout>
      <KPICards kpis={kpis} />

      <Tabs 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <h2>Charts</h2>
      <div className="chart-container">
        {activeTab === "time" && (
          <RevenueOverTimeChart data={revenueByDate} />
        )}

        {activeTab === "country" && (
          <RevenueByCountryChart data={revenueByCountry} />
        )}

        {activeTab === "category" && (
          <RevenueByCategoryChart data={revenueByCategory} />
        )}
      </div>
    </Layout>
  )
}

export default App
