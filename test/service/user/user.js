const httpClient = require('../../_http.js');
const test = require('ava');

test('user service test', async (t) => {
  let passport = '15919630721';
  let userService = httpClient.service('user', 'user');
  let user = await userService.getUserByPassport(passport);
  t.is(user.passport, passport);
});

