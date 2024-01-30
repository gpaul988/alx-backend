#!/usr/bin/env python3
# Graham S. Paul - 0-basic_cache.py
""" This task show basic caching module.
"""
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """ Shows an  object that allows saving and
    getting items from a dictionary.
    """
    def put(self, key, item):
        """ Includes an item in the cache.
        """
        if key is None or item is None:
            return
        self.cache_data[key] = item

    def get(self, key):
        """ Gets an item by key.
        """
        return self.cache_data.get(key, None)
