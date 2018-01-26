import { ProductService } from '@/services'
import { HandlerResponse } from '@/util'

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

  static updateById (req, res) {
    let hr = new HandlerResponse(res)
    const product = req.body
    const productId = req.params.productId
    ProductService.updateById(productId, product).then(result => {
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

  static getProductByOrganizationId (req, res) {
    let hr = new HandlerResponse(res)
    const organizationId = req.params.organizationId
    const productId = req.params.productId
    if (!organizationId) {
      return hr.error('organizationId is required', 422)
    }
    if (!productId) {
      return hr.error('productId is required', 422)
    }
    ProductService.getProductByOrganizationId(organizationId, productId).then(result => {
      hr.send(result)
    }).catch(reason => {
      hr.error(reason)
    })
  }
}
