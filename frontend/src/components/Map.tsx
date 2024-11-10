import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import DeleteIcon from "@mui/icons-material/Delete";
import L from "leaflet";
import { LatLngExpression } from "leaflet";

const locations: [number, number][] = [
    [35.7137757, 139.7969451],
    [35.7143071, 139.7963245],
    [35.7144253, 139.7953445],
    [35.714748, 139.7952627],
    [35.7111474, 139.7965377],
    [35.7119654, 139.7963265],
    [35.7124165, 139.7963355],
    [35.7128409, 139.7963711],
    [35.7128488, 139.7960204],
    [35.7112601, 139.7963721],
];
const zoomLevel = 20;

interface MapComponentProps {
    position: LatLngExpression;
}

const MapComponent: React.FC<MapComponentProps> = ({ position }) => {
    const map = useMap();

    useEffect(() => {
        if (position) {
            map.setView(position, zoomLevel);
        }
    }, [map, position]);

    return null;
};


const Map: React.FC = () => {
    const [position, setPosition] = useState<LatLngExpression | null>(null);

    useEffect(() => {
        // http://localhost:8000/にアクセスできるかチェックする
        fetch("http://localhost:8000/")
            .then((response) => response.text())
            .then((text) => console.log("Server Response:", text))
            .catch((error) => console.error("Server Error:", error));
    }
    , []);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const { latitude, longitude } = pos.coords;
                setPosition([latitude, longitude]);
            },
            (err) => {
                console.error(err);
            }
        );
    }, []);

    return (
        <>
            <MapContainer
                center={position || [35.7137757, 139.7969451]}
                zoom={zoomLevel}
                style={{ height: "100vh", width: "100vw" }}
                zoomControl={false} // ズームコントロールを非表示に設定
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {position && (
                    <>
                        <Marker
                            position={position}
                            // iconの色を赤に変更
                            icon={L.icon({
                                iconUrl: "https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
                                shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
                                iconSize: [25, 41],
                                iconAnchor: [12, 41],
                                popupAnchor: [1, -34],
                                shadowSize: [41, 41],
                            })}
                        >
                            <Popup>Me</Popup>
                        </Marker>
                        <MapComponent position={position} />
                    </>
                )}
                {/* 配列の各地点にマーカーを配置 */}
                {locations.map((position, index) => (
                    <Marker key={index} position={position}>
                        <Popup>地点 {index + 1}</Popup>
                    </Marker>
                ))}
            </MapContainer>

            {/* 右下にボタンを配置 */}
            <button
                style={{
                    position: "absolute",
                    bottom: "20px",
                    right: "20px",
                    backgroundColor: "#3a5bf0",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    padding: "12px",
                    zIndex: 1000,
                }}
                onClick={() => alert("Requested!!!")}
            >
                <DeleteIcon
                    sx={{
                        fontSize: 32,
                    }}
                />
            </button>
        </>
    );
};

export default Map;
