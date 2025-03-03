import * as yup from "yup";

export let registerUserFirstSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email("enter valid email")
    .required("email field is empty"),
  password: yup
    .string()
    .trim()
    .min(6, "password is too short(min 6)")
    .max(32, "password is too long(max 32)")
    .required("password field is empty"),
});

export let registerUserSecondSchema = yup.object({
  phoneNumber: yup
    .string()
    .trim()
    .required("phone number field is empty")
    .max(20, "Phone number is too long"),
  city: yup
    .string()
    .trim()
    .required("city field is empty")
    .max(32, "Addres is too long(max 32)"),
  name: yup
    .string()
    .trim()
    .required("name field is empty")
    .max(32, "name is too long(max 32)")
    .min(3, "name is too short(min 3)"),
});
