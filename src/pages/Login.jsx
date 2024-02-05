import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";
function Login() {
  return (
    <section className="h-screen grid place-items-center">
      <Form className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 ">
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="login" className="w-full"/>
        </div>

        <button type="button" className="btn btn-neutral btn-block uppercase">
          guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
}

export default Login;
