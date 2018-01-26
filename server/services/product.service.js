import { ProductModel } from '@/models'
import { Types } from 'mongoose'

let ObjectId = Types.ObjectId

export default class productService {
  static save (product) {
    return ProductModel.save(product).then(product => product)
  }

  static updateById (id, product) {
    // const values = {$set: product}
    return ProductModel.updateById(id, product).then(product => product)
  }

  static getProductById (productId) {
    return ProductModel.findById(productId).then(product => product)
  }

  static getListByOrganizationId (organizationId) {
    return ProductModel.find({organizationId}).then(products => products)
  }

  static getByOrganizationId (organizationId, productId) {
    const fileter = {
      _id: new ObjectId(productId),
      organizationId
    }
    return ProductModel.findOne(fileter).then(product => product)
  }
}
