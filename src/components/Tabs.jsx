import "./Tabs.css"

function Tabs({ activeTab, setActiveTab }) {
    return (
        <div className="tabs">
            <button
                className={activeTab === "time" ? "active" : ""}
                onClick={() => setActiveTab("time")}
            >
                Revenue Over Time
            </button>

            <button
                className={activeTab === "country" ? "active" : ""}
                onClick={() => setActiveTab("country")}
            >
                By Country
            </button>

            <button
                className={activeTab === "category" ? "active" : ""}
                onClick={() => setActiveTab("category")}
            >
                By Category
            </button>
        </div>
    )
}

export default Tabs