import mongoose from 'mongoose'
import config from '@/config/environment'

let schema = new mongoose.Schema({
  ownerId: { type: String },
  ownerFirstName: { type: String, required: true },
  ownerLastName: { type: String, required: true },
  ownerDOB: { type: Date },
  ownerSSN: { type: String, required: true },
  ownerEmail: { type: String },
  ownerPhone: { type: String },
  country: { type: String, default: 'US' },
  state: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  averagePayment: { type: String, default: '1' },
  EIN: { type: String },
  Address: { type: String, required: true },
  AddressLineTwo: { type: String },
  website: { type: String, default: 'https://www.getpaidup.com' },
  businessName: { type: String, required: true },
  businessType: { type: String, required: true },
  aba: { type: String, required: true },
  dda: { type: String, required: true },
  createAt: { type: Date, default: new Date() },
  updateAt: { type: Date, default: new Date() },
  verify: { type: String, default: 'pending' },
  referralCode: { type: String, default: '' },
  paymentId: { type: String, default: '' },
  seasons: { type: [String], default: [] }
})

let Model = mongoose.model(
  'organization',
  schema,
  config.mongo.prefix + 'organizations'
)

schema.pre('save', function (next) {
  if (!this.isNew) return next()
  this.update_at = new Date()
  next()
})

export default class OrganizationModel {
  static save (org) {
    return new Promise((resolve, reject) => {
      try {
        let organization = new Model(org)
        organization.save((err, data) => {
          if (err) {
            return reject(err)
          }
          return resolve(data)
        })
      } catch (error) {
        return reject(error)
      }
    })
  }

  static findOne (filter) {
    console.log('Filter: ', filter)
    return new Promise((resolve, reject) => {
      Model.findOne(filter, (err, data) => {
        if (err) return reject(err)
        resolve(data)
      })
    })
  }

  static updateById (id, value) {
    return new Promise((resolve, reject) => {
      Model.findByIdAndUpdate(id, value, { new: true }, (err, data) => {
        if (err) return reject(err)
        resolve(data)
      })
    })
  }

  static findById (_id) {
    return Model.findById(_id).exec()
  }
}
