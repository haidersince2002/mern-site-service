import { z } from "zod";

//Login validation with ZOD
const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Email must be at least of 3 characters" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  password: z
    .string({ required_error: "Password is Required" })
    .trim()
    .min(6, { message: "Password must be at least of 6 characters" })
    .max(255, { message: "Password must not be more than 255 characters" }),
});

//Signup validation with ZOD
const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Username is Required" })
    .trim()
    .min(3, { message: "username must be at least of 3 characters" })
    .max(255, { message: "username must not be more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone Number is Required" })
    .trim()
    .min(10, { message: "Phone Number must be at least of 10 characters" })
    .max(15, { message: "Phone Number must not be more than 15 characters" }),
});

//Contact validation with ZOD
//Login validation with ZOD
const contactSchema = z.object({
  username: z
    .string({ required_error: "Username is Required" })
    .trim()
    .min(3, { message: "Username must be at least of 3 characters" })
    .max(255, { message: "Username must not be more than 255 characters" }),
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Email must be at least of 3 characters" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  message: z
    .string({ required_error: "Message is Required" })
    .trim()
    .min(10, { message: "Message must be at least of 10 characters" })
    .max(1000, { message: "Message must not be more than 1000 characters" }),
});

export { signupSchema, loginSchema, contactSchema };
