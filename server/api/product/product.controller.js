import ProductService from '@/services/product.service'
import HandlerResponse from '@/util/handlerResponse'

export default class ProductController {
  static save (req, res) {
    let hr = new HandlerResponse(res)
    const product = req.body
    ProductService.save(product).then(result => {
      hr.send(result)
    }).catch(reason => {
      hr.error(reason)
    })
  }

  static getProductById (req, res) {
    let hr = new HandlerResponse(res)
    const productId = req.params.productId
    ProductService.getProductById(productId).then(result => {
      hr.send(result)
    }).catch(reason => {
      hr.error(reason)
    })
  }

  static getProductsByOrganizationId (req, res) {
    let hr = new HandlerResponse(res)
    const organizationId = req.params.organizationId
    if (!organizationId) {
      return hr.error('organizationId is required', 422)
    }
    ProductService.getProductsByOrganizationId(organizationId).then(result => {
      hr.send(result)
    }).catch(reason => {
      hr.error(reason)
    })
  }
}
