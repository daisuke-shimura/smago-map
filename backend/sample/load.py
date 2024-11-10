import osmium
import geojson


class RoadGeoJSONHandler(osmium.SimpleHandler):
    def __init__(self, max_nodes=1000, max_ways=1000):
        super().__init__()
        self.features = []
        self.max_nodes = max_nodes
        self.max_ways = max_ways
        self.node_count = 0
        self.way_count = 0

    def node(self, n):
        print(n)
        if self.node_count >= self.max_nodes:
            return
        self.node_count += 1
        # ノードの処理をここに追加

    def way(self, w):
        print(w)
        if self.way_count >= self.max_ways:
            return
        self.way_count += 1
        if 'highway' in w.tags:
            coordinates = [(node.lon, node.lat) for node in w.nodes if node.location.valid()]
            if coordinates:
                feature = geojson.Feature(
                    geometry=geojson.LineString(coordinates),
                    properties={"highway": w.tags["highway"]}
                )
                self.features.append(feature)

    def save_to_geojson(self, output_path):
        feature_collection = geojson.FeatureCollection(self.features)
        with open(output_path, 'w') as f:
            geojson.dump(feature_collection, f, ensure_ascii=False, indent=2)


if __name__ == '__main__':
    file_path = "./data/shikoku-latest.osm.pbf"
    output_path = "./data/roads.geojson"

    handler = RoadGeoJSONHandler(max_nodes=1000, max_ways=1000)
    handler.apply_file(file_path)
    handler.save_to_geojson(output_path)
    print(f"Road data has been saved to {output_path}")
