#!/usr/bin/yarn dev
/**
 * Redis Client
 * @file Redis Client
 * @typedef {import('redis').RedisClient} RedisClient
 * @typedef {import('redis').ClientOpts} ClientOpts
 * @typedef {import('redis').Callback} Callback
 * @typedef {import('redis').PrintCallback} PrintCallback
 * @typedef {import('redis').RedisError} RedisError
 * @typedef {import('util').Promisify} Promisify
 * @typedef {import('util').Callbackify} Callbackify
 * @typedef {import('util').CustomPromisifySymbol} CustomPromisifySymbol
 * @typedef {import('util').InspectOptions} InspectOptions
 * @author Graham S. Paul
 */
import { promisify } from 'util';
import { createClient, print } from 'redis';

const client = createClient();

client.on('error', (err) => {
  console.log('Redis client not connected to the server:', err.toString());
});

const setNewSchool = (schoolName, value) => {
  client.SET(schoolName, value, print);
};

const displaySchoolValue = async (schoolName) => {
  console.log(await promisify(client.GET).bind(client)(schoolName));
};

async function main() {
  await displaySchoolValue('Holberton');
  setNewSchool('HolbertonSanFrancisco', '100');
  await displaySchoolValue('HolbertonSanFrancisco');
}

client.on('connect', async () => {
  console.log('Redis client connected to the server');
  await main();
});
