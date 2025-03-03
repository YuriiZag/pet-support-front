import * as yup from "yup";

export let addNoticeFirstSchema = yup.object({
  breed: yup
    .string()
    .trim()
    .required("breed field is empty")
    .max(28, "breed is too long(max 28)")
    .min(3, "breed is too short(min 3)"),
  birthDate: yup.string().required("set pet`s birth date"),
  name: yup
    .string()
    .trim()
    .required("name field is empty")
    .max(28, "name is too long(max 28)")
    .min(3, "name is too short(min 3)"),
  title: yup
    .string()
    .trim()
    .required("title field is empty")
    .max(28, "title is too long(max 28)")
    .min(3, "title is too short(min 3)"),
});

export let addNoticeSecondSchema = yup.object({
  comments: yup.string().trim().max(64, "coments is too long(max 64)"),
  avatar: yup.string().required("set pet`s avatar"),
  price: yup.string().trim().max(10, "price is too long"),
  location: yup
    .string()
    .trim()
    .required("location field is empty")
    .max(28, "location is too long(max 28)")
    .min(3, "location is too short(min 3)"),
  sex: yup.string().required("set pet`s sex"),
});
