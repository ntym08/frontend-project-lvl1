#!/usr/bin/env node
import { queryUserName, greetUser } from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const userName = queryUserName();
greetUser(userName);
