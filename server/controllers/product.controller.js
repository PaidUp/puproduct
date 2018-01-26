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

  static getById (req, res) {
    let hr = new HandlerResponse(res)
    const productId = req.params.productId
    ProductService.getById(productId).then(result => {
      hr.send(result)
    }).catch(reason => {
      hr.error(reason)
    })
  }

  static getListByOrganizationId (req, res) {
    let hr = new HandlerResponse(res)
    const organizationId = req.params.organizationId
    if (!organizationId) {
      return hr.error('organizationId is required', 422)
    }
    ProductService.getListByOrganizationId(organizationId).then(result => {
      hr.send(result)
    }).catch(reason => {
      hr.error(reason)
    })
  }

  static getByOrganizationId (req, res) {
    let hr = new HandlerResponse(res)
    const organizationId = req.params.organizationId
    const productId = req.params.productId
    if (!organizationId) {
      return hr.error('organizationId is required', 422)
    }
    if (!productId) {
      return hr.error('productId is required', 422)
    }
    ProductService.getByOrganizationId(organizationId, productId).then(result => {
      hr.send(result)
    }).catch(reason => {
      hr.error(reason)
    })
  }
}
