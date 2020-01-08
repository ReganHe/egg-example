const Service = require("egg").Service

class TaskService extends Service {
  async find() {
    const tasks = await this.app.mysql.get("task", {
      plan_start_date: "2018-06-26"
    })
    return tasks
  }
}

module.exports = TaskService
