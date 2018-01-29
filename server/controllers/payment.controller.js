import { PaymentService } from '@/services'
import { HandlerResponse } from '@/util'
const paymentService = new PaymentService()

export default class PaymentController {
  static save (req, res) {
    let hr = new HandlerResponse(res)
    const payment = req.body
    paymentService.save(payment).then(result => {
      hr.send(result)
    }).catch(reason => {
      hr.error(reason)
    })
  }

  static updateById (req, res) {
    let hr = new HandlerResponse(res)
    const payment = req.body
    const paymentId = req.params.productId
    paymentService.updateById(paymentId, payment).then(result => {
      hr.send(result)
    }).catch(reason => {
      hr.error(reason)
    })
  }

  static getById (req, res) {
    let hr = new HandlerResponse(res)
    const paymentId = req.params.paymentId
    paymentService.getById(paymentId).then(result => {
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
    paymentService.getListByProductId(productId).then(result => {
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
    paymentService.getByOrganizationId(productId, paymentId).then(result => {
      hr.send(result)
    }).catch(reason => {
      hr.error(reason)
    })
  }
}
