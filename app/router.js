module.exports = app => {
  const { router, controller } = app
  router.get("/task/list", controller.task.getList)
  router.get("/task/:id", controller.task.get)
  router.get("/", controller.home.index)
}
