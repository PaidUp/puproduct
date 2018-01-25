import mongoose, { Promise } from 'mongoose'
import config from '@/config/environment'

let schema = new mongoose.Schema({
  ownerId: { type: String },
  ownerFirstName: { type: String, required: true }, // required //email //newDesign
  ownerLastName: { type: String, required: true }, // required //email //newDesign
  ownerDOB: { type: Date }, // required //email //newDesign
  ownerSSN: { type: String, required: true }, // required //email //newDesign
  ownerEmail: { type: String }, // email //response
  ownerPhone: { type: String }, // email
  country: { type: String, default: 'US' }, // required //email //response
  state: { type: String, required: true }, // required //email //newDesign
  city: { type: String, required: true }, // required //email //newDesign
  zipCode: { type: String, required: true }, // required //newDesign
  averagePayment: { type: String, default: '1' }, // email
  EIN: { type: String }, // required //email //newDesign
  Address: { type: String, required: true }, // required //email //newDesign
  AddressLineTwo: { type: String }, // required //email //newDesign
  website: { type: String, default: 'https://www.getpaidup.com' }, // email
  businessName: { type: String, required: true }, // required //email //newDesign
  businessType: { type: String, required: true }, // required //newDesign
  aba: { type: String, required: true }, // required //email //response //newDesign
  dda: { type: String, required: true }, // required //email //response //newDesign
  createAt: { type: Date, default: new Date() },
  updateAt: { type: Date, default: new Date() },
  verify: { type: String, default: 'pending' },
  referralCode: { type: String, default: '' }, // email
  paymentId: { type: String, default: '' },
  seasons: { type: [String], default: [] }
})

let Model = mongoose.model(
  'organization',
  schema,
  config.mongo.prefix + 'organizations'
)

/* 0*
* Pre-save hook
*/

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

  static findOne ({ filter }) {
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
