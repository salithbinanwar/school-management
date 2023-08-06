import asyncHandler from "express-async-handler"


//* desc: Auth user & get token
//? method: POST 
//? route:/api/users/auth
//! @access Public


const authUser = asyncHandler(async (req, res) => {
    
    res.json({ message: "authenticated" });
})


//* desc: delete user
//? method: POST 
//? route:/api/users/auth
//! @access Public

const registerUser = asyncHandler(async (req, res) => {
    res.json({ message: "user registered" });
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