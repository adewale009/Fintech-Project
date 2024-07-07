/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import { getConnection } from 'mongoose';

describe('Posts (e2e)', () => {
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

  it('/GET posts', () => {
    return request(app.getHttpServer())
      .get('/posts')
      .expect(200)
      .expect((response) => {
        expect(Array.isArray(response.body)).toBe(true);
      });
  });

  it('/POST posts', () => {
    return request(app.getHttpServer())
      .post('/posts')
      .send({ title: 'Test Post', content: 'Test Content', userId: 1 })
      .expect(201)
      .expect((response) => {
        expect(response.body.title).toBe('Test Post');
        expect(response.body.content).toBe('Test Content');
        expect(response.body.userId).toBe(1);
      });
  });

  // Additional test cases for GET /posts/:id, DELETE /posts/:id, etc.
});
