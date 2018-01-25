process.env.NODE_ENV = 'test'

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server/app').default
let should = chai.should()
let token = require('../server/config/environment').default.nodePass.me.token
let payload = {
  "paymentId": "acct_18OZ8zIhv1Yesxk9",
  "season": "test",
  "organizationId": "57b6139811627b1d0ddbee30",
  "organizationName": "Cobras Volleyball Club",
  "organizationLocation": "San Antonio, TX",
  "sku": "TX - SAN ANTONIO - COBRAS VOLLEYBALL - 17 BLACK PREMIER 2016",
  "name": "17 Black (Premier)",
  "description": "17 Black (Premier)",
  "startAt": "2016-06-25",
  "endAt": "2017-03-31",
  "location": "San Antonio, TX",
  "geojson": {},
  "visibility": true,
  "status": true,
  "image": "value image url",
  "categories": [],
  "relatedProducts": [],
  "statementDescriptor": "PaidUp Cobras 17 Black",
  "customInfo": {
    "formData": [],
    "formTemplate": [
      {
        "type": "text",
        "placeholder": "Athlete First Name",
        "name": "Athlete First Name",
        "model": "athleteFirstName",
        "displayed": true,
        "required": true
      },
      {
        "type": "text",
        "placeholder": "Athlete Last Name",
        "name": "Athlete Last Name",
        "model": "athleteLastName",
        "displayed": true,
        "required": true
      }
    ]
  },
  "processingFees": {
    "cardFeeActual": 2.9,
    "cardFeeDisplay": 2.9,
    "cardFeeFlatActual": 0.3,
    "cardFeeFlatDisplay": 0.3,
    "achFeeActual": 0.8,
    "achFeeDisplay": 2.3,
    "achFeeFlatActual": 0,
    "achFeeFlatDisplay": 0,
    "achFeeCapActual": 0.25,
    "achFeeCapDisplay": 5
  },
  "collectionsFee": {
    "fee": 3.5,
    "feeFlat": 0
  },
  "paysFees": {
    "processing": true,
    "collections": true
  }
}
let organizationId = ''
let organization = {}


chai.use(chaiHttp)

describe('loading express', function () {
  before(function (done) {
    setTimeout(() => {
      done()
    }, 4000)
  })

  after(function () {
    server.close()
  })

  describe('/GET root', () => {
    it('it should GET status 200', done => {
      chai
        .request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
  })

  describe('/api/v1/organization', () => {
    it('POST:/request it should create an organization', done => {
      chai
        .request(server)
        .post('/api/v1/organization/request')
        .set('authorization', token)
        .send(payload)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property('organizationId')
          res.body.organizationId.should.be.a('string');
          organizationId = res.body.organizationId
          done()
        })
    })

    it('GET:/response/:id it should retrieve an organization', done => {
      chai
        .request(server)
        .get('/api/v1/organization/response/'+organizationId)
        .set('authorization', token)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property('_id')
          res.body._id.should.be.a('string');
          organization = res.body
          done()
        })
    })

    it('GET:/:id it should retrieve an organization', done => {
      chai
        .request(server)
        .get('/api/v1/organization/'+organizationId)
        .set('authorization', token)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property('_id')
          res.body._id.should.be.a('string');
          organization = res.body
          done()
        })
    })

    it('POST:/response/:id/:paymentId it should create an organization', done => {
      chai
        .request(server)
        .put('/api/v1/organization/response/'+organizationId+'/paymentIdTest')
        .set('authorization', token)
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.have.property('paymentId')
          res.body.paymentId.should.be.a('string');
          res.body.paymentId.should.equal('paymentIdTest');
          
          res.body.should.have.property('verify')
          res.body.verify.should.be.a('string');
          res.body.verify.should.equal('done');

          res.body.should.have.property('ownerSSN')
          res.body.ownerSSN.should.be.a('string');
          res.body.ownerSSN.should.equal('');

          res.body.should.have.property('aba')
          res.body.aba.should.be.a('string');
          res.body.aba.should.equal('');

          res.body.should.have.property('dda')
          res.body.dda.should.be.a('string');
          res.body.dda.should.equal('');
          done()
        })
    })

  })
})
