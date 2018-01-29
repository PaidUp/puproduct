export default class CommonService {
  constructor (model) {
    this.model = model
  }
  save (entity) {
    return this.model.save(entity).then(entity => entity)
  }

  updateById (id, values) {
    return this.model.updateById(id, values).then(entity => entity)
  }

  getById (entityId) {
    return this.model.findById(entityId).then(entity => entity)
  }
}
