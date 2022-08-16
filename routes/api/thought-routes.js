const router = require('express').Router();
const { 
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// set up GET and POST route for thought at /api/thoughts
router.route('/')
.get(getAllThoughts)
.post(addThought)
;

// set up GET by Id, PUT, and DELETE for thought at /api/thoughts/thoughtId#
router.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought);

// set up POST for reaction at /api/thoughts/thoughtId#/reactions
router.route('/:thoughtId/reactions')
.post(addReaction)

// set up DELETE for reaction at /api/thought/thoughtId#/reaction/reactionId#
router.route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);

module.exports = router;