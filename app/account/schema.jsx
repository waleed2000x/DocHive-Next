import * as yup from "yup";

const Schema = yup.object().shape({
  contact: yup
    .string()
    .required("Contact is required")
    .matches(/^\d{11}$/, "Contact must be a 11-digit number"),
  city: yup.string().required("City is required"),
  specialization: yup.string().required("Specialization is required"),
});

export default Schema;
