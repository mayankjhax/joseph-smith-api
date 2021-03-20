/**
 * Collect the user information
 * @param {object} req The request object
 * @param {object} res The responce object
 */

const getUser = (req, res) => {
  return res.json({
    name: "Joseph Smith",
    age: 23,
  });
};

/**
 * Which user is making the request?
 *
 * @param {object} req The Request Object
 * @param {object} res The Response Object
 */

const whichUser = (req, res) => {
  const name = req.body.name;

  if (!name) {
    return res.status(422).json({
      message: "You need to supply a name",
    });
  }

  return res.json({
    message: `Your name is ${name}`,
  });
};

/**
 * Update a specific user
 *
 * @param {object} req The Request Object
 * @param {object} res The Response Object
 */

const update = (req, res) => {
  const userID = req.params.userID;
  return res.json({
    message: "The user you want to update is " + userID,
  });
};

// module.exports = {
//     getUser: getUser,
//     whichUser: whichUser
// }

// since the both the key and the value are same we can also do
module.exports = {
  getUser,
  whichUser,
  update,
};

const hello = (req, res) => {
  console.log("Hello World");
};
