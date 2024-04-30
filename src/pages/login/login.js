import { useState } from "react";
import MyNavbar from "../../components/navbar";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
export default function Login() {
  let [username, setusername] = useState();
  let [password, setpassword] = useState();

  // TODO using navigate outside of the jsx
  const redirect = useNavigate();

  const submitHandler = () => {
    if (username == "admin" && password == "1234") {
      document.cookie = "username=admin; expire:2025/1/1 path:'/'";
      //  if username and password was correct.
      redirect("/panel");
    } else {
      Swal.fire({
        title: "Error",
        text: "incorrect username or password",
        icon: "error",
        confirmButtonText: "try again",
      });
    }
  };
  return (
    <>
      <MyNavbar />
      <div className="flex items-center justify-center h-screen">
        <div className="flex  flex-col justify-center p-4 border-2 border-[#94d2bd] rounded-md w-[360px] md:w-[400px]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> */}
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    onChange={(e) => setusername(e.target.value)}
                    placeholder="admin"
                    type="email"
                    autocomplete="email"
                    required
                    className="block px-2 outline-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-gray-700 hover:text-gray-700"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    onChange={(e) => setpassword(e.target.value)}
                    placeholder="1234"
                    type="password"
                    autocomplete="current-password"
                    required
                    className="block px-2 outline-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  onClick={submitHandler}
                  type="button"
                  className="flex w-full justify-center rounded-md bg-[#94d2bd] px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900  shadow-sm hover:bg-[#8fcfba] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
