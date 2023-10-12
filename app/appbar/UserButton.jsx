"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Avatar, Button, Menu, MenuItem, TextField } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import axios from "axios";
const iValues = {
  username: "",
  password: "",
};
const Schema = Yup.object({
  username: Yup.string().required("User Name is Required"),
  password: Yup.string()
    .required("Password is Required")
    .min(8, "Password lenght must be > 7"),
});
const status = "authenticated";
export default function UserButton() {
  const { values, errors, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: iValues,
    validationSchema: Schema,
    onSubmit: () => {
      resetForm();
    },
  });
  const router = usePathname();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDashboard = () => {
    setAnchorEl(null);
  };

  const handleLogin = async () => {
    const requestData = {
      email: "user@example.com",
      password: "userPassword",
    };

    try {
      const response = await axios.post(
        "https://your-strapi-api-url.com/api/local-users",
        requestData
      );
      console.log("Response from Strapi:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      {status === "authenticated" ? (
        <>
          <Button
            variant="text"
            className="appbar-dropdown"
            size="large"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Avatar />
            {/* <Avatar alt={data?.user?.name} src={data?.user?.image} /> */}
            <KeyboardArrowDownIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              href="/dashboard"
            >
              <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
            </Link>
            <Link
              href="/account"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem onClick={handleClose}>Account</MenuItem>
            </Link>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem
            //  onClick={signOut}
            >
              Logout
            </MenuItem>
          </Menu>
        </>
      ) : (
        <>
          {router === "/login" ? null : (
            <div className="login">
              <form
                method="post"
                onSubmit={handleSubmit}
                className="appbar-form"
              >
                <TextField
                  color="success"
                  variant="outlined"
                  size="small"
                  label="User Name"
                  className="appbar-inputs"
                  autoComplete="off"
                  placeholder="username"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  error={Boolean(errors.username)}
                  helperText={errors?.username || " "}
                />
                <TextField
                  color="success"
                  variant="outlined"
                  size="small"
                  label="Password"
                  className="appbar-inputs"
                  autoComplete="off"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  error={Boolean(errors.password)}
                  helperText={errors?.password || " "}
                />
                <Button
                  variant="outlined"
                  size="large"
                  type="submit"
                  className="appbar-login-button"
                >
                  Login
                </Button>
              </form>
            </div>
          )}
        </>
      )}
    </>
  );
}
