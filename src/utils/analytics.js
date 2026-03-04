export function enrichOrders(orders) {
    return orders.map(order => ({
        ...order,
        revenue: order.quantity * order.unitPrice
    }))
}

export function groupRevenueByDate(orders) {
    const map = {}

    orders.forEach(order => {
        const date = order.timestamp.slice(0, 10)

        if (!map[date]) {
            map[date] = 0
        }

        map[date] += order.revenue
    })

    return Object.entries(map)
        .map(([date, revenue]) => ({ 
            date, 
            revenue: Number(revenue.toFixed(2))
        }))
}

export function groupRevenueByCountry(orders) {
    const map = {}

    orders.forEach(order => {
        if (!map[order.country]) {
            map[order.country] = 0
        }

        map[order.country] += order.revenue
    })

    return Object.entries(map)
        .map(([country, revenue]) => ({
            country,
            revenue: Number(revenue.toFixed(2))
        }))
        .sort((a, b) => b.revenue - a.revenue)
}

export function groupRevenueByCategory(orders) {
    const map = {}

    orders.forEach(order => {
        if (!map[order.category]) {
            map[order.category] = 0
        }

        map[order.category] += order.revenue
    })

    return Object.entries(map)
        .map(([category, revenue]) => ({
            category,
            revenue: Number(revenue.toFixed(2))
        }))
        .sort((a, b) => b.revenue - a.revenue)
}

export function calculateKPIs(orders) {
    const totalRevenue = orders.reduce((sum, order) => sum + order.revenue, 0)
    const totalOrders = orders.length
    const averageOrderValue = totalRevenue / totalOrders

    return {
        totalRevenue: Number(totalRevenue.toFixed(2)),
        totalOrders,
        averageOrderValue: Number(averageOrderValue.toFixed(2))
    }
}

export function formatCurrency(value) {
    return new Intl.NumberFormat("en-IE", {
        style: "currency",
        currency: "EUR"
    }).format(value)
}