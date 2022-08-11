const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
 } = require('../../controllers/user-controller');

 // set up GET all and Post at /api/pizzas
router.route('/')
.get(getAllUsers)
.post(createUser);

// set up GET one, PUT, and DELETE at /api/pizzas/:id
router.route('/:userId')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// set up POST and DELETE at /api/users/userId#/friends/friendId#
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);
module.exports = router;