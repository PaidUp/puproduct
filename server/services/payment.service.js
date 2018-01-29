import { PaymentModel } from '@/models'
import CommonService from './common.service'
const paymentModel = new PaymentModel()

export default class PaymentService extends CommonService {
  constructor () {
    super(paymentModel)
  }
}
