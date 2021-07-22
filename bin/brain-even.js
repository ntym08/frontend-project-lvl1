#!/usr/bin/env node

import greetUser from '../src/cli.js';
import checkEven from '../src/games/even.js';

console.log('Welcome to the Brain Games!');

greetUser();

checkEven();
