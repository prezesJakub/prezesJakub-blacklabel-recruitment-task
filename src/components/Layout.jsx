export default function Layout({ children }) {
    return (
        <div
            style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "40px",
                fontFamily: "system-ui, sans-serif"
            }}
        >
            <h1 style={{ marginBottom: "40px" }}>
                E-commerce Data Visualization
            </h1>

            {children}
        </div>
    )
}