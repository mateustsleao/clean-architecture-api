import request from 'supertest'
import app from '@/main/config/app'

describe('CORS Middleware', () => {
  test('should enable CORS', async () => {
    app.post('/test_cors', (req, res) => {
      res.send()
    })
    await request(app)
      .get('/test_cors')
      .expect('acess-control-allow-origin', '*')
      .expect('acess-control-allow-headers', '*')
      .expect('acess-control-allow-methods', '*')
  })
})
