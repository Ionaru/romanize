#!/usr/bin/env node

import { romanize } from './index';

const commandArg = process.argv[2] as unknown;

if (!commandArg) {
    throw new Error('A number must be given as command parameter.');
}

const result = romanize(commandArg as number);

// tslint:disable-next-line:no-console
console.log(result);
