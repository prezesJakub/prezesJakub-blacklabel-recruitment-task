import { formatCurrency } from "../utils/analytics";

function KPICards({ kpis }) {
    return (
        <div className="kpi-grid">
            <div className="kpi-card">
                <h3>Total Revenue</h3>
                <p>{formatCurrency(kpis.totalRevenue)}</p>
            </div>
            
            <div className="kpi-card">
                <h3>Total Orders</h3>
                <p>{kpis.totalOrders}</p>
            </div>

            <div className="kpi-card">
                <h3>Average Order Value</h3>
                <p>{formatCurrency(kpis.averageOrderValue)}</p>
            </div>
        </div>
    )
}

export default KPICards