import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer
} from "recharts"

export default function RevenueOverTimeChart({ data }) {
    return (
        <div style={{ marginBottom: "60px" }}>
            <h2>Revenue Over Time</h2>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="revenue" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}