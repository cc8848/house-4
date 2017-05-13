const httpClient = require('../../_http.js');
const test = require('ava');

test('/oauth/member/loginbypassport success test', async (t) => {
  let param = {
    passport: '15919630721',
    password: 'ruanzhijun',
  };
  let data = await httpClient.post('/oauth/member/loginbypassport', param);
  t.is(data.passport, param.passport);
});

test('/oauth/member/loginbypassport error test', async (t) => {
  let param = {
    passport: '15919630721',
    password: 'ib8vifdcsdvou',
  };
  let data = await httpClient.post('/oauth/member/loginbypassport', param);
  t.is(data.code, -1);
});

test('/oauth/member/info test', async (t) => {
  let data = await httpClient.get('/oauth/member/info');
  t.is(data.passport, '15919630721');
});

