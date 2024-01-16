import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../app.module';
import { PrismaService } from '../../prisma.service';

describe('AutomobileUsageController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/automobile-usage/usage (GET) - should get all automobile usages', () => {
    return request(app.getHttpServer())
      .get('/automobile-usage/usage')
      .expect(200)
      .expect([]);
  });

  it('/automobile-usage/usage (POST) - should create an automobile usage', () => {
    const testData = {
      // your test data here
    };

    return request(app.getHttpServer())
      .post('/automobile-usage/usage')
      .send(testData)
      .expect(201)
      .expect((response) => {
        // Verify the response body or structure if needed
      });
  });

  it('/automobile-usage/usage/:id/finish (PUT) - should finish an automobile usage', () => {
    const usageId = 1; // replace with a valid ID

    return request(app.getHttpServer())
      .put(`/automobile-usage/usage/${usageId}/finish`)
      .expect(200)
      .expect((response) => {
        // Verify the response body or structure if needed
      });
  });

  it('/automobile-usage/usage/:id (DELETE) - should delete an automobile usage', () => {
    const usageId = 1; // replace with a valid ID

    return request(app.getHttpServer())
      .delete(`/automobile-usage/usage/${usageId}`)
      .expect(204);
  });

  afterAll(async () => {
    await app.close();
  });
});
