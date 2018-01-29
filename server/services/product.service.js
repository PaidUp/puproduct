import { ProductModel } from '@/models'
import { Types } from 'mongoose'
import CommonService from './common.service'
const productModel = new ProductModel()

let ObjectId = Types.ObjectId

export default class ProductService extends CommonService {
  constructor () {
    super(productModel)
  }

  getListByOrganizationId (organizationId) {
    return productModel.find({organizationId}).then(products => products)
  }

  getByOrganizationId (organizationId, productId) {
    const fileter = {
      _id: new ObjectId(productId),
      organizationId
    }
    return productModel.findOne(fileter).then(product => product)
  }
}
