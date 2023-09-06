// import jwt from "jsonwebtoken";

// export const generateToken = (user) => {
//   return jwt.sign(
//     {
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//     },
//     process.env.JWT_SECRET,
//     {
//       expiresIn: "30d",
//     }
//   );
// };

// use rafc 
import axios from "axios"
// utilities folder is for universal, reusable functions

export const signUp = async (formData) => {
 let serverResponse = await axios
 ({
   method: "POST",
   url: "/users/signup",
   // route to do signup
   data: formData 
 });
 return serverResponse;
}

export const signIn = async (formData) => {
    let serverResponse = await axios
    ({
        method: "PUT",
        url: "users/signin",
        // route to user login
        data: formData
    });
    console.log(serverResponse);
  return serverResponse;
}

export const getUserFromSession = async () => {
    let response = await axios('/session-info')
    console.log(response);
    // WE HAVE A SUCCESSFUL USER LOG IN
    if (response.data.session.passport) {
        let user = response.data.session.passport.user;
        return user;
    } else {
        return false
    }
}