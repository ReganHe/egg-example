module.exports = app => {
  const { router, controller } = app
  router.get("/task/list", controller.task.list)
  router.get("/", controller.home.index)
}
