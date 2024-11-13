import Map from "./components/Map";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Customer from "./components/Map";
import Delivery from "./components/Delivery";
import Shop from "./components/Shop";
function App() {
    return (
      <div>
        <div className="App">
            <div
              style={{
                // 横方向に中央揃え
                display: "flex",
                justifyContent: "center",
              }}
            >
                {/* <Map /> */}
            </div>
        </div>

        <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Customer />} />
            <Route path="/Delivery/" element={<Delivery />} />
            <Route path="/Shop" element={<Shop />} />
          </Routes>
        </div>
      </BrowserRouter>
      </div>
    );
}

export default App;
