import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
    let token;
    token = req.cookies.jwt;
    if(token){
        try{
                    const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findbyId(decoded.id).select('-password');
        next();
        }catch{
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }
});

export { protect };