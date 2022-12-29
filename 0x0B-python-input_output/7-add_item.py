#!/usr/bin/python3
"""Add all arguments to a Python list and save them to a file."""
from sys import argv

if __name__ == "__main__":
    save_to_json_file = __import__('5-save_to_json_file').save_to_json_file
load_from_json_file = __import__('6-load_from_json_file').load_from_json_file


if __name__ == "__main__":
    def create_file():
        '''creates a json file and returns py_list'''
        py_list = []
        save_to_json_file(py_list, "add_item.json")
        py_list = load_from_json_file("add_item.json")
        return py_list

    try:
        py_list = load_from_json_file("add_item.json")
    except (FileNotFoundError):
        py_list = create_file()

    py_list = load_from_json_file("add_item.json")
    for i in range(len(argv)):
        if i != 0:
            py_list.append(argv[i])
    save_to_json_file(py_list, "add_item.json")
    py_list = load_from_json_file("add_item.json")
