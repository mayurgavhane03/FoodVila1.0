import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your Name"),
  email: Yup.string().email().required("Please enter your EEmail"),
  password: Yup.string().min(6).required("Please enter your Password"),
  confirm_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});