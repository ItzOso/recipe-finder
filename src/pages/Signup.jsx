import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signup } from "../firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

function Signup() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please provide a valid email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Please provide a password"),
  });

  const signUpErrorMessages = {
    "auth/email-already-in-use": "Email is already in use. Try signing in.",
    "auth/invalid-email": "Invalid email format.",
    "auth/weak-password": "Password too weak. Use at least 6 characters.",
    "auth/operation-not-allowed": "Sign-up is disabled. Contact support.",
    "auth/network-request-failed": "Network error. Check your connection.",
    "auth/internal-error": "Internal error. Try again later.",
    "auth/too-many-requests": "Too many attempts. Try again later.",
  };

  const location = useLocation();

  const from = location.state?.from || "/";

  const handleSubmit = async (values) => {
    try {
      await signup(values.email, values.password);
      toast.success("Welcome to YumYum!");
      console.log("Signed Up");
      navigate(from, { replace: true });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage =
        signUpErrorMessages[errorCode] || "An unexpected error occured";
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
      <p className="text-2xl">Create an account!</p>
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
            Get Started
          </button>
          {error && <p className="text-error">{error}</p>}
        </Form>
      </Formik>
      <p>
        Already have an account?{" "}
        <Link className="text-primary" to="/login">
          Sign In
        </Link>
      </p>
    </motion.div>
  );
}

export default Signup;
