import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts"

export default function RevenueByCountryChart({ data }) {
    return (
        <div style={{ marginBottom: "60px" }}>
            <h2>Revenue by Country</h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="country" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}