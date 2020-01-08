const Controller = require("egg").Controller

class TaskController extends Controller {
  async list() {
    const ctx = this.ctx
    const tasks = await ctx.service.task.find()
    ctx.body = tasks || "no conetent"
  }
}

module.exports = TaskController
