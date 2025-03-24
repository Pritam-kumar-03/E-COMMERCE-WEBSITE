import { useState } from "react";

function App() {
    const [content, setContent] = useState("Select a category to view products.");

    const loadContent = (section) => {
        const contentData = {
            bedroom: "<h3>Bed Room Products</h3><p>Here are the latest bedroom furniture deals...</p>",
            livingroom: "<h3>Living Room Products</h3><p>Explore our comfortable sofas and chairs...</p>",
            diningroom: "<h3>Dining Room Products</h3><p>Discover stylish dining tables and chairs...</p>",
            outdoor: "<h3>Outdoor Furniture</h3><p>Check out durable and weather-resistant furniture...</p>",
            indoor: "<h3>Indoor Decor</h3><p>Find decorative pieces for your home...</p>",
        };

        setContent(contentData[section] || "<p>Content not available</p>");
    };

    return (
        <div>
            <div>
                <span className="nav-link" onClick={() => loadContent("bedroom")}>Bed Room</span>
                <span className="nav-link" onClick={() => loadContent("livingroom")}>Living Room</span>
                <span className="nav-link" onClick={() => loadContent("diningroom")}>Dining Room</span>
                <span className="nav-link" onClick={() => loadContent("outdoor")}>Outdoor</span>
                <span className="nav-link" onClick={() => loadContent("indoor")}>Indoor</span>
            </div>

            <div id="dow" dangerouslySetInnerHTML={{ __html: content }} style={{
                border: "1px solid #ccc",
                padding: "20px",
                minHeight: "200px",
                marginTop: "20px"
            }}></div>

            <style>
                {`
                    .nav-link {
                        cursor: pointer;
                        color: blue;
                        text-decoration: underline;
                        margin-right: 15px;
                    }
                `}
            </style>
        </div>
    );
}

export default App;