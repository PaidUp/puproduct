process.env.NODE_ENV = 'test'

let common = require('./common')
let server = common.server
let token = common.token
let chai = common.chai

let payload = {
  userId: '33333',
  organizationInfo: {
    ownerFirstName: 'Ricardo',
    ownerLastName: 'Lara',
    ownerDOB: '2017-04-17T03:00:00.000Z',
    ownerSSN: 'uVOoJjSe/Ti4',
    ownerEmail: 'riclara222@gmail.com',
    ownerPhone: '3017718888',
    state: 'AK',
    city: 'Enviado',
    zipCode: '00000',
    EIN: '111111111',
    Address: 'Cll 40aa Sur # 32 70, 306',
    AddressLineTwo: '',
    businessName: 'Test',
    businessType: 'Non-Profit',
    aba: 'uVOpJzWf/Dm5',
    dda: 'uFKpJjec+Dy/Foz/',
    ownerId: '59af4f5d5d31df6d2db0f265',
    seasons: ['Season A', 'Season B'],
    paymentId: 'acct_18OZ8zIhv1Yesxk9',
    referralCode: 'done',
    verify: 'pending',
    updateAt: '2017-09-06T01:28:13.367Z',
    createAt: '2017-09-06T01:28:13.367Z',
    website: 'https://www.getpaidup.com',
    averagePayment: '1',
    country: 'US'
  }
}
let organizationId = ''
let organization = {}

it('POST:/request it should create an organization', done => {
  chai
    .request(server)
    .post('/api/v1/organization/request')
    .set('authorization', token)
    .send(payload)
    .end((err, res) => {
      res.should.have.status(200)
      res.body.should.have.property('organizationId')
      res.body.organizationId.should.be.a('string')
      organizationId = res.body.organizationId
      done()
    })
})

it('GET:/response/:id it should retrieve an organization', done => {
  chai
    .request(server)
    .get('/api/v1/organization/response/' + organizationId)
    .set('authorization', token)
    .end((err, res) => {
      res.should.have.status(200)
      res.body.should.have.property('_id')
      res.body._id.should.be.a('string')
      organization = res.body
      done()
    })
})

it('GET:/:id it should retrieve an organization', done => {
  chai
    .request(server)
    .get('/api/v1/organization/' + organizationId)
    .set('authorization', token)
    .end((err, res) => {
      res.should.have.status(200)
      res.body.should.have.property('_id')
      res.body._id.should.be.a('string')
      organization = res.body
      done()
    })
})

it('POST:/response/:id/:paymentId it should create an organization', done => {
  chai
    .request(server)
    .put('/api/v1/organization/response/' + organizationId + '/paymentIdTest')
    .set('authorization', token)
    .end((err, res) => {
      res.should.have.status(200)
      res.body.should.have.property('paymentId')
      res.body.paymentId.should.be.a('string')
      res.body.paymentId.should.equal('paymentIdTest')

      res.body.should.have.property('verify')
      res.body.verify.should.be.a('string')
      res.body.verify.should.equal('done')

      res.body.should.have.property('ownerSSN')
      res.body.ownerSSN.should.be.a('string')
      res.body.ownerSSN.should.equal('')

      res.body.should.have.property('aba')
      res.body.aba.should.be.a('string')
      res.body.aba.should.equal('')

      res.body.should.have.property('dda')
      res.body.dda.should.be.a('string')
      res.body.dda.should.equal('')
      done()
    })
})
