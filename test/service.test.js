const Service = require('../app/services/service');
const expect = require('chai').expect;
const apiData = require('../app/api/api');
const mockData = require('./testdata');
const urls = require('../constants');

describe('API Test', () => {
  // testing if the function returns an array.
  it('should return the array fetched from the API', async () => {
    apiData(urls.pages)
      .then((result) => expect(result).to.be.an('array'));
  });
});

describe('services test', () => {
  // Testing if the function returns the object.
  it('should return an object', () => {
    const obj = new Service();
    const result = obj.countDict(mockData.htmlString);
    expect(result).to.be.an('object');
  });
});
