#!/usr/bin/env node

import { romanize } from './index';

const commandArg = process.argv[2];

if (!commandArg) {
    throw new Error('A number must be given as command parameter.');
}

const result = romanize(Number(commandArg));

// tslint:disable-next-line:no-console
console.log(result);
