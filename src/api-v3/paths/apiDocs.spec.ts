import request from 'supertest';
import { mockApp } from '../../fixtures/mocks';
import { expect } from 'chai';

const path = '/v3/apiDocs';
describe(path, () => {
  it('GET - returns apiDocs', (done) => {
    request(mockApp)
      .get(path)
      .expect(200)
      .expect(res => {
        expect(res.text.length).to.be.greaterThan(6000, 'apiDocs must be reasonable length');
      })
      .end(done);
  });
});
