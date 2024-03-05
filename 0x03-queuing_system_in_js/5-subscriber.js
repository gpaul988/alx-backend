#!/usr/bin/yarn dev
import { createClient } from 'redis';

/**
 * Subscriber
 * @file Subscriber
 * @return {void}
 * @author Graham S. Paul
 */
const EXIT_MSG = 'KILL_SERVER';
const client = createClient();

client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err.toString());
});

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.subscribe('holberton school channel');

client.on('message', (_err, msg) => {
  console.log(msg);
  if (msg === EXIT_MSG) {
    client.unsubscribe();
    client.quit();
  }
});
