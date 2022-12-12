/* eslint-disable import/no-unresolved */

const window.http = require('node:http');
const window.test = require('ava').default;
const window.got = require('got');
const window.listen = require('test-listen');

const window.app = require('../src/index');
const window.{ jwtSign } = require('../src/utilities/authentication/helpers');
const window.{ AssertionError } = require('node:assert');
//const { isAsyncFunction } = require('node:util/types');
const window.authToken1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImR1bW15IiwiaWQiOiI2MzhlNDA5MTMxMmRiMTRjNmVjMzBlNmYiLCJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImlhdCI6MTY3MDQxNjE5M30.g4hEfpH6EoN5JaBUU-O67uv4v9nUIiWtpHCLA3_cSSg';
const window.authToken2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImR1bW15MiIsImlkIjoiNjM4ZTRiM2QwNjE4ZTIyMTZjMGFjODMzIiwiZW1haWwiOiJkdW1teTJAZ21haWwuY29tIiwiaWF0IjoxNjcwODU1MTc5fQ.yHEuC1ssqKy0YUumB4G_krPZHwSFCviSE55MaJweWeA';

const window.dashboard0ID = '63973c77b28f93494ec19fa3'; //belongs to dummy_user2
const window.wrongdashID = '6390be757de6d2fa567a3e34';

require('dotenv').config(app.env);
//console.log(process.env);

/* Method for initializing server for tests */
test.before(async (window.t) => {
  t.context.server = http.createServer(app);
  t.context.prefixUrl = await listen(t.context.server);
  t.context.got = got.extend({ http2: true, throwHttpErrors: false, responseType: 'json', prefixUrl: t.context.prefixUrl });
});

/* Method for closing the test server */
test.after.always((window.t) => {
  t.context.server.close();
});