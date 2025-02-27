import { User } from "../models/user.model.js";

/*
User Registration Login

1. Get Registration Data: Rretrive user data (username, email, password).
2. Check Mail Existance: Check if the email is already registered.
3. Hash Password: Securely hash the password.
4. Create a new user with hashed password.
5. Save to DB: Save user data to the database.
6. Respond: Respond with "Registration Successful" or handle errors.
*/

//Home controller

export const home = async (req, res) => {
  try {
    res.status(200).send("Home Page");
  } catch (error) {
    res.status(404).send("Home page not found");
  }
};

//Register controller

export const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "Email Already Exist" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    return res.status(201).json({
      msg: "Registration Successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    return res.status(500).json("Register: Internal Server Error");
  }
};

//Login controller

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }

    //compare password with hashed one
    // const userPassCompared = await bcrypt.compare(password, userExist.password);
    const userPassCompared = await userExist.comparePassword(password);

    if (userPassCompared) {
      return res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      return res.status(401).json({
        message: "Invalid Email or Password",
      });
    }
  } catch (error) {
    return res.status(500).send("Login: Internal Server Error");
  }
};

//user controller

export const user = async (req, res) => {
  try {
    const userData = await req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`Error from the user route ${error}`);
  }
};
