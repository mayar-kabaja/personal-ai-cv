import json
import os


def load_data():
    base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    path = os.path.join(base, "db_store.json")
    with open(path, "r") as f:
        return json.load(f)
