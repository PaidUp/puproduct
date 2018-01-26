process.env.NODE_ENV = 'test'

let common = require('./common')
let server = common.server
let token = common.token
let chai = common.chai
let results = common.results

it('POST# / it should create a product', done => {
  results.product.payload.organizationId = results.organization.organizationId
  chai
    .request(server)
    .post('/api/v1/product')
    .set('authorization', token)
    .send(results.product.payload)
    .end((err, res) => {
      res.should.have.status(200)
      res.body.should.have.property('_id')
      res.body.organizationId.should.be.a('string')
      results.product.productId = res.body._id
      done()
    })
})

it('GET# /:productId it should retrieve a product', done => {
  chai
    .request(server)
    .get('/api/v1/product/' + results.product.productId)
    .set('authorization', token)
    .end((err, res) => {
      res.should.have.status(200)
      res.body.should.have.property('_id')
      res.body._id.should.be.a('string')
      res.body._id.should.equal(results.product.productId)
      results.product.document = res.body
      done()
    })
})

it('GET# /organization/:organizationId/products it should retrieve an organization', done => {
  chai
    .request(server)
    .get('/api/v1/organization/' + results.organization.organizationId + '/products')
    .set('authorization', token)
    .end((err, res) => {
      res.should.have.status(200)
      res.body.should.to.be.an('array').that.include(results.product.document)
      results.product.documents = res.body
      done()
    })
})

it('GET# /organization/:organizationId/product/:productId it should retrieve an organization', done => {
  chai
    .request(server)
    .get('/api/v1/organization/' + results.organization.organizationId + '/product/' + results.product.productId)
    .set('authorization', token)
    .end((err, res) => {
      res.should.have.status(200)
      res.body.should.have.property('_id')
      res.body.paymentId.should.be.a('string')
      res.body._id.should.equal(results.product.productId)
      results.product.document = res.body
      done()
    })
})

it('PUT# /:productId/ it should update a product', done => {
  chai
    .request(server)
    .put('/api/v1/product/'+ results.product.productId)
    .set('authorization', token)
    .send({image: 'value image url updated'})
    .end((err, res) => {
      res.should.have.status(200)
      res.body.should.have.property('image')
      res.body.paymentId.should.be.a('string')
      res.body.image.should.equal('value image url updated')

      done()
    })
})
