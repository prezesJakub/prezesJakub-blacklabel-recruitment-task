import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from "recharts"

export default function RevenueByCategoryChart({ data }) {
    return (
        <div style={{ marginBottom: "60px" }}>
            <h2>Revenue by Category</h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}