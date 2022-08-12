const { Thought } = require('../models');

const thoughtController = {
    // GET /api/thoughts
    getAllThoughts(req, res) {
        Thought.find({})
          .select('-__v')
          .sort({ _id: -1 })
          .then((dbThoughtData) => res.json(dbThoughtData))
          .catch((err) => {
            console.log(err);
            res.status(400).json(err);
          });
      },
    // GET /api/thoughts/thoughtId#
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.thoughtId })
        .select('-__v')
        .then((dbThoughtData) => {
          if (!dbThoughtData) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
          }
          res.json(dbThoughtData);
        })
        .catch((err) => {
          console.log(err);
          res.status(400).json(err);
        });
      },
    // POST /api/thoughts
    // expects { "thoughtText": "Here's a cool thought...", "username": "lernantino", "userId": "5edff358a0fcb779aa7b118b"}
    addThought({ params, body }, res){
       Thought.create(body).then(({ _id }) => {
        let uId = body.userId;
        console.log(uId);
        console.log(_id);
        // console.log(body);
            User.findOneAndUpdate(
                { _id: body.userId },
                { $push: { thoughts: _id } },
                { new: true }
            );
        }).then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        }).catch(err => res.json(err));
    },
    // PUT /api/thoughts/thoughtsId#
    // TODO: I think you need the user here
    updateThought({ params, body }, res) {
        Thought.findOneAndUpdate({ _id: params.thoughtId }, body, { new: true, runValidators: true })
        .then(dbThoughtData => {
          if (!dbThoughtData) {
            res.status(404).json({ message: 'No thought found with this id!' });
            return;
          }
          res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
      },
    //   DELETE /api/thoughts/thoughtId#
    removeThought({ params }, res){
        Thought.findOneAndDelete({ _id: params.thoughtId }
            ).then(deletedThought => {
                if(!deletedThought){
                    return res.status(404).json({ message: 'No thought with this id!' });
                }
                return User.findOneAndUpdate(
                    { _id: params.userId },
                    { $pull: { thoughts: params.thoughtId } },
                    { new: true }
                ).then(dbUserData => {
                if(!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            }).catch(err => res.json(err));
    },
    // POST /api/thoughts/thoughtId#/reactions
    addReaction({ params, body }, res){
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
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
    // DELETE /api/thoughts/thoughtId#/reactions
    removeReaction({ params }, res) {
        Thought.findOneAndUpdate(
          { _id: params.thoughtId },
          { $pull: { reactions: { reactionId: params.reactionId } } },
          { new: true }
        )
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.json(err));
      },
};

module.exports = thoughtController;