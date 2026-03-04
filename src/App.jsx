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

  return (
    <Layout>
      <KPICards kpis={kpis} />
      <RevenueOverTimeChart data={revenueByDate} />
      <RevenueByCountryChart data={revenueByCountry} />
      <RevenueByCategoryChart data={revenueByCategory} />
    </Layout>
  )
}

export default App
