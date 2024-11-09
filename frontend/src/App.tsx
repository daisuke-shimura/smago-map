import Map from "./components/Map";

function App() {
    return (
        <div className="App">
            <div
              style={{
                // 横方向に中央揃え
                display: "flex",
                justifyContent: "center",
              }}
            >
                <Map />
            </div>
        </div>
    );
}

export default App;
