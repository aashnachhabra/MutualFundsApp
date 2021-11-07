import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { FormHelperText } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function SignUp() {
  const [count, setCount] = useState(0);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    gender: "",

    dob: "",
  };

  useEffect(() => {
    setCount(JSON.parse(window.localStorage.getItem("count")));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("count", count);
  }, [count]);

  const increaseCount = () => {
    return setCount(count + 1);
  };
  function setData(obj) {
    localStorage.setItem("User details " + (count + 1), JSON.stringify(obj));
    increaseCount();
  }
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Required"),
    password: Yup.string().min(8, "Too short!").required("Required"),
    gender: Yup.string()
      .oneOf(["male", "female"], "Required")
      .required("Required"),
    dob: Yup.date().required("Start Date is required"),
  });
  const onSubmit = (values, props) => {
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 1000);
    console.log(values);
    document.getElementById("success").style.display = "block";
    document.getElementById("show").style.display = "block";

    setData(values);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#861657",
          backgroundImage: "linear-gradient(326deg, #861657 0%, #ffa69e 74%)",

          height: "100%",
        }}
      >
        <Paper elevation={3} style={{ padding: "20px", width: "500px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div align="center" style={{ padding: "15px" }}>
              <Avatar></Avatar>
              <div
                id="success"
                style={{
                  backgroundColor: "#99ff99",
                  border: "1px solid #009900",
                  borderRadius: "10px",
                  display: "none",
                  color: "#009900",
                  padding: "10px",
                  margin: "10px",
                  fontFamily: "monospace, sans-serif",
                }}
              >
                Signup successful! Login to continue
              </div>
            </div>
            <Typography
              variant="h4"
              align="center"
              style={{ fontFamily: "monospace, sans-serif" }}
            >
              Create a new Account
            </Typography>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(props) => (
                <Form>
                  <Field
                    as={TextField}
                    id="name"
                    label="Name"
                    type="text"
                    style={{ marginTop: "15px" }}
                    placeholder="Full Name"
                    name="username"
                    helperText={
                      <ErrorMessage name="username">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    }
                  />
                  <Field
                    as={TextField}
                    id="email"
                    label="Email"
                    type="text"
                    style={{
                      marginTop: "15px",
                      marginLeft: "5px",
                    }}
                    placeholder="xyz@gmail.com"
                    name="email"
                    helperText={
                      <ErrorMessage name="email">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    }
                  />

                  <Field
                    as={TextField}
                    id="password"
                    label="Password"
                    type="password"
                    style={{ marginTop: "15px" }}
                    name="password"
                    autoComplete="current-password"
                    helperText={
                      <ErrorMessage name="password">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    }
                  />

                  <FormControl
                    component="fieldset"
                    style={{ display: "flex", marginTop: "20px" }}
                  >
                    <FormLabel component="legend">Gender</FormLabel>
                    <Field
                      as={RadioGroup}
                      aria-label="gender"
                      name="gender"
                      style={{ display: "initial" }}
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                      />
                    </Field>
                  </FormControl>
                  <FormHelperText>
                    <ErrorMessage name="gender">
                      {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                    </ErrorMessage>
                  </FormHelperText>

                  <Field
                    as={TextField}
                    id="dob"
                    label="Date of Birth"
                    type="text"
                    name="dob"
                    placeholder="mm-dd-yyyy"
                    style={{ display: "flex", width: "50%" }}
                    helperText={
                      <ErrorMessage name="dob">
                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                      </ErrorMessage>
                    }
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={props.isSubmitting}
                    style={{
                      width: "40%",
                      marginLeft: "135px",
                      marginTop: "40px",
                      padding: "10px",
                      backgroundColor: "#861657",
                      backgroundImage:
                        "linear-gradient(326deg, #861657 0%, #ffa69e 74%)",
                      fontFamily: "Poppins-Regular, sans-serif",
                    }}
                  >
                    {props.isSubmitting ? "Submitting" : "SIGN UP"}
                  </Button>
                </Form>
              )}
            </Formik>
            <div
              id="show"
              align="center"
              style={{
                padding: "20px",
                display: "none",
                fontFamily: "monospace, sans-serif",
              }}
            >
              <Link to="/login">Login to continue</Link>
            </div>
          </div>
        </Paper>
      </div>
    </>
  );
}
export default SignUp;
