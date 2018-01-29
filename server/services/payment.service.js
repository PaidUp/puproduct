import { PaymentModel } from '@/models'
import { Types } from 'mongoose'
import CommonService from './common.service'
const paymentModel = new PaymentModel()

let ObjectId = Types.ObjectId

export default class PaymentService extends CommonService {
  constructor () {
    super(paymentModel)
  }

  getListByProductId (productId) {
    return paymentModel.find({productId}).then(products => products)
  }

  getByProductId (productId, paymentPlanId) {
    const fileter = {
      _id: new ObjectId(paymentPlanId),
      productId
    }
    return paymentModel.findOne(fileter).then(product => product)
  }
}
