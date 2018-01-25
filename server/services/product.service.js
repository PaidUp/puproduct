import ProductModel from '@/models/product.model'

export default class productService {
  static save (product) {
    return ProductModel.save(product).then(product => product)
  }

  static getProductById (productId) {
    return ProductModel.findById(productId).then(product => product)
  }

  static getProductsByOrganizationId (organizationId) {
    return ProductModel.find({organizationId}).then(products => products)
  }
}
