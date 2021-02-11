import 'regenerator-runtime/runtime';
const request = require('supertest');
const server = 'http://localhost:3000';

describe('Sign up a new user', () => {
  // test for successful signup route
  it('should create a new user', async () => {
    const res = await request(server).post('/api/auth/signup').send({
      username: "test1",
      password: "test1", 
      userType:"client",
      age:"34",
      weight:"120",
      height: "5.11",
      gender:"female",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('userId');
    expect(res.body).toHaveProperty('userType');
  });
  // test for unsuccessful signup route
  it('should not create a new user when username has existed', async () => {
    const res = await request(server).post('/api/auth/signup').send({
      username: 'test',
      password: 'test',
      userType: 'client',
      age: '34',
      weight: '120',
      height: '5.11',
      gender: 'female',
    });
    expect(res.statusCode).toEqual(409);
  });
})

describe('Sign in ', () => {
  // test for unsuccessful signin route
  it('should not log user in with incorrect credentials', async () => {
    const res = await request(server).post('/api/auth/signin').send({
      username: 'hufehif',
      password: 'tesv1',
      userType: 'client',
    });
    expect(res.statusCode).toEqual(409);
  });
  // test for successful signin route
  it('should not create a new user when username has existed', async () => {
    const res = await request(server).post('/api/auth/signin').send({
      username: 'test',
      password: 'test',
      userType: 'client',
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('userId');
    expect(res.body).toHaveProperty('userType');
  });
});
