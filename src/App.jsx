import data from "./data/data.json"
import Layout from "./components/Layout"
import RevenueOverTimeChart from "./components/charts/RevenueOverTimeChart"
import RevenueByCategoryChart from "./components/charts/RevenueByCategoryChart"
import RevenueByCountryChart from "./components/charts/RevenueByCountryChart"

import {
  enrichOrders,
  groupRevenueByDate,
  groupRevenueByCountry,
  groupRevenueByCategory
} from "./utils/analytics"

function App() {
  const enrichedOrders = enrichOrders(data.orders)

  const revenueByDate = groupRevenueByDate(enrichedOrders)
  const revenueByCountry = groupRevenueByCountry(enrichedOrders)
  const revenueByCategory = groupRevenueByCategory(enrichedOrders)

  return (
    <Layout>
      <RevenueOverTimeChart data={revenueByDate} />
      <RevenueByCountryChart data={revenueByCountry} />
      <RevenueByCategoryChart data={revenueByCategory} />
    </Layout>
  )
}

export default App
