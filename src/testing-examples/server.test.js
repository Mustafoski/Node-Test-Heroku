import request from 'supertest';
import { app } from './server';

describe('/hello endpoint functinonality', () => {
  it('should replies with Hello! when a GET request is send', (done) => {
    request(app).get('/hello').expect('Hello!', done);
  });
});
