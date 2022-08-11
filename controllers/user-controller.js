const { User } = require('../models');

const userController = {
  // GET /api/users
    getAllUsers(req, res) {
        User.find({})
          .populate({
            path: 'thoughts',
            select: '-__v'
          })
          .select('-__v')
          .sort({ _id: -1 })
          .then((dbUserData) => res.json(dbUserData))
          .catch((err) => {
            console.log(err);
            res.status(400).json(err);
          });
      },
      // GET api/users/userid#
      getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
          path: 'thoughts',
          select: '-__v'
        })
        .select('-__v')
        .then((dbUserData) => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch((err) => {
          console.log(err);
          res.status(400).json(err);
        });
      },

      // POST /api/users
      createUser({ body }, res){
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err));
      },

      // PUT /api/users/userId#
      updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
      },

      // DELETE /api/users/userId#
      deleteUser({ params }, res){
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
          if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
          }
          res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
      },
      // TODO: Don't think this is what I want to do for removing associated thoughts
      // // remove associated thoughts
      // removeThought({ params }, res) {
      //   User.findOneAndUpdate(
      //     { _id: params.userId },
      //     { $pull: { thoughts: { thoughtId: params.thoughtId } } },
      //     { new: true }
      //   )
      //     .then(dbUserData => res.json(dbUserData))
      //     .catch(err => res.json(err));
      // },
      // POST /api/users/userId#/friends/friendId#
    addFriend({ params, body }, res){
      User.findOneAndUpdate(
          { _id: params.userId },
          { $push: { friends: body } },
          { new: true, runValidators: true }
      )
      .then(dbUserData => {
          if (!dbUserData){
              res.status(404).json({ message: 'No user found with this id!' });
              return;
          }
          res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },
  // DELETE api/users/userId#/friends/friendsId#
  removeFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: { friendId: params.friendId } } },
      { new: true }
    )
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  }
};

module.exports = userController;