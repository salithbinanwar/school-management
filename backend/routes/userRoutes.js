import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

import { authUser, registerUser,logoutUser, getUserProfile, updateUserProfile, deleteUser } from '../controllers/userController.js';

router.post('/register', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile')
    .get(protect,getUserProfile)
     .put(protect,updateUserProfile)
      .delete(protect,deleteUser)

export default router