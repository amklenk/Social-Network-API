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

 // set up GET all and POST for user at /api/users
router.route('/')
.get(getAllUsers)
.post(createUser);

// set up GET by Id, PUT, and DELETE for user at /api/users/:userId
router.route('/:userId')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// set up POST and DELETE for friend at /api/users/userId#/friends/friendId#
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);
module.exports = router;