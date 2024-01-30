#!/usr/bin/env python3
# Graham S. Paul - 1-fifo_cache.py
"""This display First-In First-Out caching module.
"""
from collections import OrderedDict

from base_caching import BaseCaching


class FIFOCache(BaseCaching):
    """Shows an object that allows saving and
    getting items from a dictionary with a FIFO
    removal mechanism when the limit is reached.
    """
    def __init__(self):
        """Boots the cache.
        """
        super().__init__()
        self.cache_data = OrderedDict()

    def put(self, key, item):
        """Includes an item in the cache.
        """
        if key is None or item is None:
            return
        self.cache_data[key] = item
        if len(self.cache_data) > BaseCaching.MAX_ITEMS:
            first_key, _ = self.cache_data.popitem(False)
            print("DISCARD:", first_key)

    def get(self, key):
        """gets back an item by key.
        """
        return self.cache_data.get(key, None)
