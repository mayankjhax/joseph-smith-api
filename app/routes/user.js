const userController = require("../controllers/user");

module.exports = (app) => {
  app
    .route("/api/1v/user")
    .get(userController.getUser)
    .post(userController.whichUser);

  app.route("/api/1v/user/:userID").post(userController.update);
};
