/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import { getConnection } from 'typeorm';

describe('Users (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await getConnection().close();
    await app.close();
  });

  it('/GET users', () => {
    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .expect((response) => {
        expect(Array.isArray(response.body)).toBe(true);
      });
  });

  it('/POST users', () => {
    return request(app.getHttpServer())
      .post('/users')
      .send({ name: 'Test User', email: 'test@test.com', password: '12345' })
      .expect(201)
      .expect((response) => {
        expect(response.body.name).toBe('Test User');
        expect(response.body.email).toBe('test@test.com');
      });
  });

  // Additional test cases for GET /users/:id, DELETE /users/:id, etc.
});
