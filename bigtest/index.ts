// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';

declare const require: any;

const context = require.context('./tests', true, /test\.ts$/);
// And load the modules.
context.keys().map(context);
