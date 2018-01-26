import { ProductModel } from '@/models'
import { Types } from 'mongoose'
const productModel = new ProductModel()

let ObjectId = Types.ObjectId

export default class ProductService {
  static save (product) {
    return productModel.save(product).then(product => product)
  }

  static updateById (id, product) {
    return productModel.updateById(id, product).then(product => product)
  }

  static getById (productId) {
    return productModel.findById(productId).then(product => product)
  }

  static getListByOrganizationId (organizationId) {
    return productModel.find({organizationId}).then(products => products)
  }

  static getByOrganizationId (organizationId, productId) {
    const fileter = {
      _id: new ObjectId(productId),
      organizationId
    }
    return productModel.findOne(fileter).then(product => product)
  }
}
