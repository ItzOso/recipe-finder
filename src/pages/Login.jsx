import React from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { login } from "../firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";

function Login() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Not a valid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const loginErrorMessages = {
    "auth/user-not-found": "No account found. Please sign up.",
    "auth/invalid-credential": "Email or password is incorrect.",
    "auth/user-disabled": "Account disabled. Contact support.",
    "auth/too-many-requests": "Too many login attempts. Try again later.",
    "auth/network-request-failed": "Network error. Check your connection.",
    "auth/internal-error": "Internal error. Try again later.",
  };

  const location = useLocation();

  const from = location.state?.from || "/";

  const handleSubmit = async (values) => {
    try {
      await login(values.email, values.password);
      toast.success("Welcome back!");
      console.log("Signed In");

      navigate(from, { replace: true });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage =
        loginErrorMessages[errorCode] || "An unexpected error occured";
      setError(errorMessage);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} // Initial state
      animate={{ opacity: 1 }} // Animate to this state
      exit={{ opacity: 0 }} // Exit state
      transition={{ duration: 0.5 }} // Transition duration
      className="max-w-lg m-auto shadow-md rounded-lg text-center p-6 mt-40"
    >
      <p className="text-2xl">Welcome Back!</p>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4 my-4">
          <div className="flex flex-col text-start">
            <label htmlFor="email-signup">Email:</label>
            <Field
              className="bg-gray-300 rounded px-4 py-3 text-base outline-none"
              name="email"
              id="email-signup"
              placeholder="Email"
              type="email"
            />
            <ErrorMessage name="email" component="p" className="text-error" />
          </div>
          <div className="flex flex-col text-start">
            <label className="text-start" htmlFor="pass-signup">
              Password
            </label>
            <Field
              className="bg-gray-300 rounded px-4 py-3 text-base outline-none"
              name="password"
              id="pass-signup"
              placeholder="Password"
              type="password"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-error"
            />
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Sign In
          </button>
          {error && <p className="text-error">{error}</p>}
        </Form>
      </Formik>
      <p>
        Dont have an account?{" "}
        <Link className="text-primary" to="/signup">
          Sign Up
        </Link>
      </p>
    </motion.div>
  );
}

export default Login;
