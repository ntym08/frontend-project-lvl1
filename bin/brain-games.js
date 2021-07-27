#!/usr/bin/env node
import { getUserName, welcomeUser, greetUser } from '../src/cli.js';

welcomeUser();
const userName = getUserName();
greetUser(userName);
