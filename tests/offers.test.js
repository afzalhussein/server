const request = require('supertest');
const express = require('express');
const offersRoute = require('../routes/offers');

const app = express();
app.use(express.json());
app.use('/api/offers', offersRoute);

describe('GET /api/offers', () => {
  it('should return an array of offers', async () => {
    const res = await request(app).get('/api/offers');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('offer_id');
    expect(res.body[0]).toHaveProperty('name');
    expect(res.body[0]).toHaveProperty('cash_back');
  });

  it('should sort offers by name when sort=name', async () => {
    const res = await request(app).get('/api/offers?sort=name');
    expect(res.statusCode).toBe(200);
    const offers = res.body;
    const sorted = [...offers].sort((a, b) => a.name.localeCompare(b.name));
    expect(offers).toEqual(sorted);
  });

  it('should sort offers by cashback when sort=cashback', async () => {
    const res = await request(app).get('/api/offers?sort=cashback');
    expect(res.statusCode).toBe(200);
    const offers = res.body;
    const sorted = [...offers].sort((a, b) => b.cash_back - a.cash_back);
    expect(offers).toEqual(sorted);
  });

  it('should return 400 for invalid sort value', async () => {
    const res = await request(app).get('/api/offers?sort=invalid');
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});