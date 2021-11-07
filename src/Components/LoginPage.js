import React from "react";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { withRouter } from "react-router";
import * as Yup from "yup";

function LoginPage(props) {
  const { history } = props;
  const initialValues = {
    email: "",
    password: "",
  };
  function checkData(obj) {
    let found = false;
    for (let i = 1; i < localStorage.length; i++) {
      let userData = localStorage.getItem(`User details ${i}`);
      userData = JSON.parse(userData);
      let email2 = userData.email;
      let password2 = userData.password;
      if (obj.email === email2 && obj.password === password2) {
        found = true;
        break;
      }
    }
    return found;
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values, props) => {
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 1000);
    if (checkData(values) === true) {
      history.push("/funds");
    } else {
      document.getElementById("error").style.display = "block";
    }
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
        <Paper
          elevation={3}
          style={{
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src="/icons/img-01.png" alt="IMG" width="100px" />
            <Typography
              variant="h5"
              align="center"
              style={{
                fontFamily: "monospace, sans-serif",
                padding: "10px",
                fontSize: "35px",
              }}
            >
              Login
            </Typography>
            <div
              id="error"
              style={{
                backgroundColor: "#ffcccc",
                border: "1px solid #ff4d4d",
                borderRadius: "10px",
                display: "none",
                color: "#ff4d4d",
                padding: "10px",
                margin: "10px",
                fontFamily: "monospace, sans-serif",
              }}
            >
              ERROR : Please enter a correct email and password
              <br />
              **Note that both fields may be case sensitive
            </div>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              {(props) => (
                <Form>
                  <div>
                    <EmailIcon
                      color="disabled"
                      style={{ height: "50px", margin: "10px" }}
                      fontSize="medium"
                    />
                    <Field
                      as={TextField}
                      required
                      name="email"
                      label="Email"
                      type="text"
                      style={{ width: "60%" }}
                      autoComplete="current-password"
                      helperText={
                        <ErrorMessage name="email">
                          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                        </ErrorMessage>
                      }
                    />
                  </div>
                  <div>
                    <LockOutlinedIcon
                      color="disabled"
                      style={{ height: "50px", margin: "10px" }}
                      fontSize="medium"
                    />
                    <Field
                      as={TextField}
                      required
                      name="password"
                      id="outlined-password-input"
                      label="Password"
                      type="password"
                      style={{ width: "60%" }}
                      autoComplete="current-password"
                      helperText={
                        <ErrorMessage name="password">
                          {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                        </ErrorMessage>
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{
                      width: "45%",
                      marginLeft: "50px",
                      backgroundColor: "#861657",
                      backgroundImage:
                        "linear-gradient(326deg, #861657 0%, #ffa69e 74%)",
                    }}
                    disabled={props.isSubmitting}
                  >
                    {props.isSubmitting ? "Loading" : "Sign in"}
                  </Button>
                </Form>
              )}
            </Formik>
            <p
              style={{
                textAlign: "center",
                padding: "20px",
                fontFamily: "monospace, sans-serif",
              }}
            >
              Don't have an account? <Link to="/signup">Create one</Link>
            </p>
          </div>
        </Paper>
      </div>
    </>
  );
}
export default withRouter(LoginPage);
