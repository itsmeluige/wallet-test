import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import uuid from '../../src/utils/utils';

axios.defaults.adapter = httpAdapter;

const card = {
  id: uuid(),
  name: 'Joe Smith',
  number: '1111 1111 1111 1111',
  validAt: '11/24',
  cvv: '999',
  type: 'green',
};

describe('axios', () => {
  it('get', () => {
    nock('https://localhost:3000').get('/cards').reply(200, card);
  });
  it('post', () => {
    nock('https://localhost:3000').post('/cards').reply(200, card);
  });
});
