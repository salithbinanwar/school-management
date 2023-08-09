import asyncHandler from "express-async-handler"
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
//* desc: Auth user & get token
//? method: POST 
//? route:/api/users/auth
//! @access Public


const authUser = asyncHandler(async (req, res) => {
res.json({ message: "user authenticated" });
})





//* desc: register a new user
//? method: POST 
//? route:/api/users/auth
//! @access Public

const registerUser = asyncHandler(async (req, res) => {
    const {name , email, password} = req.body;
    const userExists = await User.findOne({email});


    if(userExists){
        res.status(400);
        throw new Error('user all ready exists');
    }
    const user = await User.create({
        name,
        email,
        password
    })
    if(user){
        generateToken(res, user._id)
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    }else{
        res.status(400);
        throw new Error('invalid user data');
    }

   
    
})






//* desc: logout user / clear cookie
//? method: POST 
//? route:/api/users/logout
//! @access Public

const logoutUser = asyncHandler(async (req, res) => {
    res.json({ message: "user logged out" });
})



//* desc: get user profile
//? method: GET
//? route:/api/users/profile
//! @access Private

const getUserProfile = asyncHandler(async (req, res) => {
    res.json({ message: "get user " });
})



//* desc: update existing user profile
//? method: PUT
//? route:/api/users/profile
//! @access Public

const updateUserProfile = asyncHandler(async (req, res) => {
    res.json({ message: "user update" });
})





//* desc: delete user
//? method: DELETE
//? route:/api/users/profile
//! @access Public

const deleteUser = asyncHandler(async (req, res) => {
    res.json({ message: "user deleted" });
})




export { authUser , registerUser, logoutUser, getUserProfile, updateUserProfile, deleteUser }