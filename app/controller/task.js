const Controller = require("egg").Controller

class TaskController extends Controller {
  async get() {
    const ctx = this.ctx
    const task = await ctx.service.task.get(ctx.params.id)
    ctx.body = task || "no conetent"
  }

  async getList() {
    const ctx = this.ctx
    const tasks = await ctx.service.task.getList()
    ctx.body = tasks || "no conetent"
  }
}

module.exports = TaskController
