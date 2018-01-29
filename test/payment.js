process.env.NODE_ENV = 'test'

let common = require('./common')
let server = common.server
let token = common.token
let chai = common.chai
let results = common.results

it('POST# / it should create a payment plan', done => {
  results.payment.payload.productId = results.product.productId
  chai
    .request(server)
    .post('/api/v1/payment')
    .set('authorization', token)
    .send(results.payment.payload)
    .end((err, res) => {
      res.should.have.status(200)
      res.body.should.have.property('_id')
      res.body.productId.should.be.a('string')
      results.payment.paymentId = res.body._id
      done()
    })
})

it('GET# /:paymentId it should retrieve a payment plan', done => {
  chai
    .request(server)
    .get('/api/v1/payment/' + results.payment.paymentId)
    .set('authorization', token)
    .end((err, res) => {
      res.should.have.status(200)
      res.body.should.have.property('_id')
      res.body._id.should.be.a('string')
      res.body._id.should.equal(results.payment.paymentId)
      results.payment.document = res.body
      done()
    })
})

it('GET# /product/:productId/payments it should retrieve an payment plan list by product', done => {
  chai
    .request(server)
    .get('/api/v1/product/' + results.product.productId + '/payments')
    .set('authorization', token)
    .end((err, res) => {
      res.should.have.status(200)
      res.body.should.to.be.an('array').that.include(results.payment.document)
      results.payment.documents = res.body
      done()
    })
})

it('GET# /organization/:organizationId/product/:productId it should retrieve a payment plan by product', done => {
  chai
    .request(server)
    .get('/api/v1/product/' + results.product.productId + '/payment/' + results.payment.paymentId)
    .set('authorization', token)
    .end((err, res) => {
      res.should.have.status(200)
      res.body.should.have.property('_id')
      res.body.productId.should.be.a('string')
      res.body._id.should.equal(results.payment.paymentId)
      results.payment.document = res.body
      done()
    })
})

it('PUT# /:paymentId it should update a payment plan', done => {
  chai
    .request(server)
    .put('/api/v1/payment/'+ results.payment.paymentId)
    .set('authorization', token)
    .send({description: 'Monthly Payments updated'})
    .end((err, res) => {
      res.should.have.status(200)
      res.body.should.have.property('description')
      res.body.description.should.be.a('string')
      res.body.description.should.equal('Monthly Payments updated')
      done()
    })
})
