import osmium


class ObjectCounterHandler(osmium.SimpleHandler):
    def __init__(self):
        osmium.SimpleHandler.__init__(self)
        self.object_counter = {'node': 0, 'way': 0, 'relation': 0, 'area': 0, 'changeset': 0}

    def count_object(self, key):
        self.object_counter[key] += 1

    def node(self, n):
        self.count_object("node")

    def way(self, w):
        self.count_object("way")

    def relation(self, r):
        self.count_object("relation")

    def area(self, a):
        self.count_object("area")

    def changeset(self, c):
        self.count_object("changeset")


if __name__ == '__main__':
    # file_path = "./data/japan-latest.osm.pbf"
    file_path = "./data/shikoku-latest.osm.pbf"
    h = ObjectCounterHandler()
    h.apply_file(file_path)
    print(h.object_counter)
