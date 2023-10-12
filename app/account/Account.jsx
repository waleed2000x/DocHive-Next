"use client";
import { Alert, AlertTitle, Avatar, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import Schema from "./schema";
import Chart from "./Chart";

export default function Account() {
  const [alert, setAlert] = useState(false);
  let iValues = {
    contact: "",
    city: "",
    specialization: "",
  };
  const { errors, values, resetForm, handleChange, handleSubmit } = useFormik({
    initialValues: iValues,
    validationSchema: Schema,
    onSubmit: () => {
      iValues = {
        contact: values.contact,
        city: values.city,
        specialization: values.specialization,
      };
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 5000);
    },
  });
  // const { data } = useSession();

  return (
    <div className="profile">
      <div className="profile-center">
        <Chart values={values} />
        {alert ? (
          <div
            style={{
              position: "fixed",
              top: "-100px",
              color: "black",
              zIndex: "2",
            }}
          >
            <Alert>
              <AlertTitle>Form Submitted Successfully</AlertTitle>
              Your information has been stored <b>successfully</b>
            </Alert>
          </div>
        ) : null}
        <Avatar
          sx={{ width: 150, height: 150 }}
          style={{
            marginTop: "10px",
            border: "5px solid rgba(255, 255, 255, 0.06)",
          }}
          // src={data?.user?.image}
        />
        <StyledTextField
          color="success"
          //  value={data?.user?.name}
        />
        <StyledTextField
          color="success"
          //  value={data?.user?.email}
        />
        <StyledTextField
          color="success"
          name="specialization"
          label="Specialization"
          value={values.specialization}
          onChange={handleChange}
          placeholder="Specialization"
          error={errors.specialization}
          helperText={errors.specialization}
        />
        <StyledTextField
          color="success"
          label="Contact"
          name="contact"
          value={values.contact}
          onChange={handleChange}
          placeholder="Contact"
          error={errors.contact}
          helperText={errors.contact}
        />
        <StyledTextField
          color="success"
          label="City"
          name="city"
          value={values.city}
          onChange={handleChange}
          placeholder="City"
          error={errors.city}
          helperText={errors.city}
        />
        <StyledButton onClick={handleSubmit} variant="filled">
          Save
        </StyledButton>
      </div>
    </div>
  );
}

const StyledTextField = styled(TextField)`
  margin-top: 20px;
  .MuiOutlinedInput-root {
    text-align: center;
    color: white;
    width: 350px;
  }

  .MuiInputLabel-root {
    color: #43ff64d9;
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: #43ff64d9;
  }
`;
const StyledButton = styled(Button)`
  && {
    color: black;
    border-color: #43ff64d9;
    margin: 20px 0px;
    padding: 10px;
    font-weight: bolder;
    font-size: 15px;
    background-color: rgba(0, 250, 67, 0.6);
    width: 130px;
    & svg {
      font-size: 30px;
    }
    &:hover {
      background-color: #00fa43;
      color: black;
      & svg {
        color: black;
      }
    }
  }
`;
