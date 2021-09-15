import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app();
// }

const Signin = () => {
  const [showSpinner, setShowSpinner] = useState(false);
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    setShowSpinner(true);
    const email = data.email;
    const password = data.password;
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex align-items-center justify-content-center">
              <h2>Sign in to your account</h2>
            </div>
          </div>
          <div className="col-md-6 mb-5 pb-5">
            <div className="container ">
              {showSpinner ? (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                ""
              )}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="px-3 px-md-5 mx-md-5"
              >
                <div className="my-2">
                  <label className="form-label fs-14" htmlFor="email">
                    Email
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control input-background py-2"
                    type="email"
                    id="email"
                    placeholder="example@email.com"
                    defaultValue=""
                    {...register("email")}
                  />
                  <span role="alert" className="text-danger">
                    {errors.email?.message}
                  </span>
                </div>

                <div className="mb-2">
                  <label className="form-label fs-14" htmlFor="password">
                    Password
                  </label>
                  <input
                    autoComplete="off"
                    className="form-control input-background py-2"
                    type="password"
                    id="password"
                    defaultValue=""
                    placeholder="Password"
                    {...register("password")}
                  />
                  <span role="alert" className="text-danger">
                    {errors.password?.message}
                  </span>
                </div>

                <small
                  style={{ cursor: "pointer" }}
                  className="text-primary fs-6 d-block text-end"
                >
                  <Link href="/resetPassword" className="text-primary">
                    <a>Forget password</a>
                  </Link>{" "}
                </small>

                <button className="btn btn-primary w-100 mt-3" type="submit">
                  Sign In
                </button>
              </form>

              <small className="text-center d-block mt-1">
                <strong>
                  Don&apos;t have any account?{" "}
                  <Link href="/signup">
                    <a className="text-primary">Sign Up</a>
                  </Link>{" "}
                </strong>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
