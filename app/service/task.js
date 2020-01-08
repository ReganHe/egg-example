const Service = require("egg").Service

class TaskService extends Service {
  async get(id) {
    const tasks = await this.app.mysql.get("task", {
      id: id
    })
    return tasks
  }

  async getList() {
    const tasks = await this.app.mysql.select("task", {
      where: {
        plan_start_date: "2018-06-26"
      }
    })
    return tasks
  }
}

module.exports = TaskService
