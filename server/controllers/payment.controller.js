import { PaymentService } from '@/services'
import { HandlerResponse } from '@/util'

export default class PaymentController {
  static save (req, res) {
    let hr = new HandlerResponse(res)
    const payment = req.body
    PaymentService.save(payment).then(result => {
      hr.send(result)
    }).catch(reason => {
      hr.error(reason)
    })
  }

  static updateById (req, res) {
    let hr = new HandlerResponse(res)
    const payment = req.body
    const paymentId = req.params.productId
    PaymentService.updateById(paymentId, payment).then(result => {
      hr.send(result)
    }).catch(reason => {
      hr.error(reason)
    })
  }

  static getById (req, res) {
    let hr = new HandlerResponse(res)
    const paymentId = req.params.paymentId
    PaymentService.getById(paymentId).then(result => {
      hr.send(result)
    }).catch(reason => {
      hr.error(reason)
    })
  }

  static getListByProductId (req, res) {
    let hr = new HandlerResponse(res)
    const productId = req.params.productId
    if (!productId) {
      return hr.error('organizationId is required', 422)
    }
    PaymentService.getListByProductId(productId).then(result => {
      hr.send(result)
    }).catch(reason => {
      hr.error(reason)
    })
  }

  static getByProductId (req, res) {
    let hr = new HandlerResponse(res)
    const productId = req.params.productId
    const paymentId = req.params.paymentId
    if (!paymentId) {
      return hr.error('paymentId is required', 422)
    }
    if (!productId) {
      return hr.error('productId is required', 422)
    }
    PaymentService.getByOrganizationId(productId, paymentId).then(result => {
      hr.send(result)
    }).catch(reason => {
      hr.error(reason)
    })
  }
}
