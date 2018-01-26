import { PaymentModel } from '@/models'
import { Types } from 'mongoose'
const paymentModel = new PaymentModel()

let ObjectId = Types.ObjectId

export default class PaymentService {
  static save (product) {
    return paymentModel.save(product).then(product => product)
  }

  static updateById (id, product) {
    return paymentModel.updateById(id, product).then(product => product)
  }

  static getById (productId) {
    return paymentModel.findById(productId).then(product => product)
  }

  static getListByProductId (productId) {
    return paymentModel.find({productId}).then(products => products)
  }

  static getByProductId (productId, paymentPlanId) {
    const fileter = {
      _id: new ObjectId(paymentPlanId),
      productId
    }
    return paymentModel.findOne(fileter).then(product => product)
  }
}
