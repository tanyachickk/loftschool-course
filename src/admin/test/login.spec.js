const fs = require('fs');
const webdriverio = require('webdriverio');
const options = require('../../../wdio.conf');
const client = webdriverio.multiremote(options);

jest.setTimeout(90000);

beforeAll(() => {
    return client.init().url('http://localhost:8081/admin');
});

test('На странице есть кнопка "Авторизоваться"', () => {
  return client
    .isExisting('.basic-button')
    .then(browsers => {
      for (const browserName in browsers) {
        expect(browsers[browserName]).toBe(true);
      }
    })
});

afterAll(() => {
  return client.end();
});