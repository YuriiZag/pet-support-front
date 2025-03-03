import * as yup from "yup";

export let addPetFirstSchema = yup.object({
  breed: yup
    .string()
    .trim()
    .required("set pet`s breed")
    .max(28, "breed is too long(max 28)")
    .min(3, "breed is too short(min 3)"),
  birthDate: yup.string().required("set pet`s birth date"),
  name: yup
    .string()
    .trim()
    .required("set pet`s name")
    .max(28, "name is too long(max 28)")
    .min(3, "name is too short(min 3)"),
});

export let addPetSecondSchema = yup.object({
  comments: yup.string().trim().max(140, "comments is too long(max 140)"),
  avatar: yup.string().required("set pet`s avatar"),
});
