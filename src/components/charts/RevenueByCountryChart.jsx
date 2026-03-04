import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts"
import { formatCurrency } from "../../utils/analytics"

export default function RevenueByCountryChart({ data }) {
    return (
        <div
            style={{
                background: "white",
                padding: "24px",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                marginBottom: "40px"
            }}
        >
            <h2>Revenue by Country</h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="country" />
                    <YAxis tickFormatter={(value) => formatCurrency(value)} />
                    <Tooltip
                        formatter={(value) => formatCurrency(value)}
                    />
                    <Bar dataKey="revenue" fill="#2563eb" radius={[6,6,0,0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}