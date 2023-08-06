import asyncHandler from "express-async-handler"


//* desc: Auth user & get token
//? method: POST 
//? route:/api/users/auth
//! @access Public


const authUser = asyncHandler(async (req, res) => {
    res.json({ message: "authenticated" });
})




//* desc: register a new user
//? method: POST 
//? route:/api/users/auth
//! @access Public

const registerUser = asyncHandler(async (req, res) => {
    res.json({ message: "registered" });
})




export { authUser , registerUser }