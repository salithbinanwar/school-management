import express from 'express';
const router = express.Router();

import { authUser, registerUser,logoutUser, getUserProfile, updateUserProfile, deleteUser } from '../controllers/userController.js';

router.post('/register', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile).delete(deleteUser)

export default router