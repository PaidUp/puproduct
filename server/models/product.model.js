import mongoose from 'mongoose'
import config from '@/config/environment'

const formData = {
  model: { type: String, required: true },
  value: { type: String, required: true }
}

const formTemplate = {
  type: { type: String, required: true },
  placeholder: { type: String, required: true },
  name: { type: String, required: true },
  model: { type: String, required: true },
  displayed: { type: Boolean, required: true },
  required: { type: Boolean, required: true }
}

const processingFees = {
  cardFeeActual: { type: Number, required: true },
  cardFeeDisplay: { type: Number, required: true },
  cardFeeFlatActual: { type: Number, required: true },
  cardFeeFlatDisplay: { type: Number, required: true },
  achFeeActual: { type: Number, required: true },
  achFeeDisplay: { type: Number, required: true },
  achFeeFlatActual: { type: Number, required: true },
  achFeeFlatDisplay: { type: Number, required: true },
  achFeeCapActual: { type: Number, required: true },
  achFeeCapDisplay: { type: Number, required: true }
}

const collectionsFee = {
  fee: { type: Number, required: true },
  feeFlat: { type: Number, required: true }
}

const paysFees = {
  processing: { type: Boolean, required: true },
  collections: { type: Boolean, required: true }
}

const geojson = {
  type: { type: String, required: true, default: 'Point' },
  coordinates: {type: [Number], required: true}
}

const schema = new mongoose.Schema({
  paymentId: { type: String, required: true },
  season: { type: String, required: true },
  organizationId: { type: String, required: true },
  organizationName: { type: String, required: true },
  organizationLocation: { type: String, required: true },
  sku: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  startAt: { type: Date, required: true },
  endAt: { type: Date, required: true },
  location: { type: String, required: true },
  geojson: {type: geojson},
  visibility: { type: Boolean, required: true, default: true },
  status: { type: Boolean, required: true, default: true },
  image: { type: String, required: true },
  categories: { type: [String] },
  relatedProducts: { type: [String] },
  statementDescriptor: { type: String, required: true },
  customInfo: {
    formData: { type: [formData], required: true },
    formTemplate: { type: [formTemplate], required: true }
  },
  processingFees: { type: processingFees, required: true },
  collectionsFee: { type: collectionsFee, required: true },
  paysFees: { type: paysFees, required: true },
  created: { type: Date, required: true, default: Date.now },
  updated: { type: Date, required: true, default: Date.now }
})
const Model = mongoose.model(
  'product',
  schema,
  config.mongo.prefix + 'products'
)

schema.pre('save', function (next) {
  if (this.isNew) this.updated = Date.now
  else {
    this.created = Date.now
  }
  next()
})

export default class ProductModel {
  static save (prod) {
    return new Promise((resolve, reject) => {
      try {
        let product = new Model(prod)
        product.save((err, data) => {
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

  static find (filter) {
    return new Promise((resolve, reject) => {
      try {
        Model.find(filter, (err, data) => {
          if (err) return reject(err)
          resolve(data)
        })
      } catch (error) {
        reject(error)
      }
    })
  }

  static findOne (filter) {
    return new Promise((resolve, reject) => {
      try {
        Model.findOne(filter, (err, data) => {
          if (err) return reject(err)
          resolve(data)
        })
      } catch (error) {
        reject(error)
      }
    })
  }

  static findById (_id) {
    return Model.findById(_id).exec()
  }

  static updateById (id, values) {
    return new Promise((resolve, reject) => {
      try {
        Model.findByIdAndUpdate(id, values, { new: true }, (err, data) => {
          if (err) return reject(err)
          resolve(data)
        })
      } catch (error) {
        reject(error)
      }
    })
  }
}
