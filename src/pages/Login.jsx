import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export const action = (store) => async() => {
  //console.log(`Store: ${store}`)
  console.log('hello')
  return null
};

function Login() {
  return (
    <section className="h-screen grid place-items-center">
      <Form className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4 ">
        <FormInput type="email" label="email" name="identifier" defaultValue="four@four.com"/>
        <FormInput type="password" label="password" name="password" defaultValue="four@four"/>
        <div className="mt-4">
          <SubmitBtn text="login" className="w-full" />
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
