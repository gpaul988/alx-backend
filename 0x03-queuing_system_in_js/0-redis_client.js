#!/usr/bin/yarn dev
/**
 * Redis client
 * @file Redis client
 * @author Graham S. Paul
 */
import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err.toString());
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});