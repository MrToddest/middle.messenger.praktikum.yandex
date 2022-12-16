import HTTPTransport from './HTTPTransport';

import { expect } from 'chai';
import { before, describe } from 'mocha';
import jsdom from 'mocha-jsdom';

describe('HTTPTransport util', () => {
  const baseUrl = 'http://localhost:1234';
  jsdom({ url: baseUrl });

  before(() => {
    require('../../../mock/server');
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        expect(xhr.response).to.have.property('message').and.equal('Server is running');
      }
    };

    xhr.open('get', `${baseUrl}/mock`);
    xhr.send();
  });

  it('GET - should return true', async () => {
    const endpoint = '/api/test/get';
    const http = new HTTPTransport(endpoint, baseUrl);

    const response = await http.get('');

    expect(response).to.have.property('status').and.equal(200);
  });

  it('POST - should return true', async () => {
    const endpoint = '/api/test/post';
    const http = new HTTPTransport(endpoint, baseUrl);

    const response = await http.post('');

    expect(response).to.have.property('status').and.equal(200);
  });

  it('PUT - should return true', async () => {
    const endpoint = '/api/test/put';
    const http = new HTTPTransport(endpoint, baseUrl);

    const response = await http.put('');

    expect(response).to.have.property('status').and.equal(200);
  });

  it('DELETE - should return true', async () => {
    const endpoint = '/api/test/delete';
    const http = new HTTPTransport(endpoint, baseUrl);

    const response = await http.delete('');

    expect(response).to.have.property('status').and.equal(200);
  });

  it('PATCH - should return true', async () => {
    const endpoint = '/api/test/patch';
    const http = new HTTPTransport(endpoint, baseUrl);

    const response = await http.patch('');

    expect(response).to.have.property('status').and.equal(200);
  });
});
