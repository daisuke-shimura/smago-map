import json
import os

import geojson
import geopandas as gpd
import matplotlib.pyplot as plt
import osmium


class RoadGeoJSONHandler(osmium.SimpleHandler):
    def __init__(self):
        super().__init__()
        self.node_count = 0
        self.way_count = 0
        self.node_file_path = './data/nodes.json'
        self.way_file_path = './data/ways.json'
        self.make_initial_node_file()

    def make_initial_node_file(self):
        if not os.path.exists(self.node_file_path):
            with open(self.node_file_path, 'w') as f:
                json.dump({}, f)

    def node(self, n):
        self.node_count += 1

        # ノード情報をファイルに追記
        if n.location.valid():
            node_data = {
                "longitude": n.location.lon,
                "latitude": n.location.lat
            }

            # 現在のデータを読み込む
            with open(self.node_file_path, 'r') as f:
                data = json.load(f)

            # 新しいノードを `id` をキーに追加
            data[n.id] = node_data

            # ファイルに書き戻す
            with open(self.node_file_path, 'w') as f:
                json.dump(data, f, indent=4, ensure_ascii=False)

    # def way(self, w):
    #     self.way_count += 1

    #     print(w)
    #     # ノードIDリストから座標リストを生成
    #     coordinates = [self.node_dict[node.ref] for node in w.nodes if node.ref in self.node_dict]
    #     if coordinates:
    #         feature = geojson.Feature(
    #             geometry=geojson.LineString(coordinates),
    #             properties={"highway": w.tags["highway"]}
    #         )
    #         self.features.append(feature)

    #     if self.way_count % self.way_batch_size == 0:
    #         with open(self.way_file_path, 'w') as f:
    #             json.dump(self.features, f)

    # def save_to_geojson(self, output_path):
    #     feature_collection = geojson.FeatureCollection(self.features)
    #     with open(output_path, 'w') as f:
    #         geojson.dump(feature_collection, f)


if __name__ == '__main__':
    # 実行例
    handler = RoadGeoJSONHandler()
    handler.apply_file('./data/shikoku-latest.osm.pbf')  # PBFファイルを読み込む
    # handler.save_to_geojson('roads.geojson')  # 結果をGeoJSONとして保存

    # # GeoJSONファイルを読み込んで表示
    # gdf = gpd.read_file('roads.geojson')
    # gdf.plot()
    # plt.show()
