"use client";

import { useLoader } from "@/lib/hooks/context/loaderContext";
import { userRegister } from "@/lib/services/authService";
import { RegisterData } from "@/lib/types";
import { login, selectIsAuthenticated } from "@/redux/slices/authSlice";
import { Alert } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function SignupPage() {
  const router = useRouter();
  const { startLoading, stopLoading } = useLoader();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [form, setForm] = useState<RegisterData>({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    country: "india",
    user_role: "2",
  } as RegisterData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    startLoading();
    const res = await userRegister(form);
    if (res?.error) {
      setError(res.error);
      stopLoading();
      return;
    }
    dispatch(login({ user: res }));
    stopLoading();
  };

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  useEffect(() => {
    if (error) {
      const id = setTimeout(() => {
        setError("");
      }, 3000);
      return () => clearTimeout(id);
    }
  }, [error]);

  return (
    <div className="bg-bgMain text-black flex justify-center">
      <div className="fixed z-20 inset-x-0 top-10 max-w-2xl mx-auto">
        {error && (
          <Alert onDismiss={() => setError("")} color="failure">
            <span>
              <span className="font-medium">{error}</span> - Check your details
              and try again
            </span>
          </Alert>
        )}
      </div>
      <div className="max-w-screen-xl m-0 xl:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="flex-1 bg-primary-dark text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("/register_img.svg")',
            }}
          ></div>
        </div>
        <div className="lg:w-1/2 xl:w-6/12 p-6 sm:p-12">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-primary-dark">
              Welcome to My Website
            </h2>
            <p className="mt-2 text-sm">
              Please create a account to start your success journey
            </p>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex-1">
              {/* google login */}
              {/* <div className="flex flex-col items-center">
                  <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-green-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div className="bg-white p-2 rounded-full">
                      <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span className="ml-4">Sign In with Google</span>
                  </button>
                </div> */}
              {/* divider */}
              {/* <div className="my-12 border-b text-center">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or sign In with Cartesian E-mail
                  </div>
                </div> */}
              <form onSubmit={handleSubmit} className="mx-auto space-y-5">
                <div className="flex items-center justify-between *:w-1/2 gap-4">
                  <div>
                    <input
                      type="radio"
                      hidden
                      name="user_role"
                      value="2"
                      id="client"
                      checked={form.user_role === "2"}
                      required
                      onChange={handleChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="client"
                      className="flex items-center *:w-1/2 gap-2"
                    >
                      <div>
                        <Image
                          src={"/client_icon_img.svg"}
                          width={100}
                          height={100}
                          className="w-full h-full object-contain"
                          alt="client"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <p className="text-lg font-semibold">Client</p>
                        <p className="text-xs text-center text-nowrap">
                          I am a client,
                          <wbr />
                          hiring for <wbr /> a project
                        </p>
                      </div>
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      hidden
                      name="user_role"
                      id="company"
                      className="hidden"
                      required
                      checked={form.user_role === "1"}
                      value="1"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="company"
                      className="flex items-center *:w-1/2 gap-2"
                    >
                      <div>
                        <Image
                          src={"/client_icon_img.svg"}
                          width={100}
                          height={100}
                          className="w-full h-full object-contain"
                          alt="client"
                        />
                      </div>
                      <div className="flex flex-col items-center">
                        <p className="text-lg font-semibold">Company</p>
                        <p className="text-xs text-center text-nowrap">
                          I am a company, <wbr /> looking for a work
                        </p>
                      </div>
                    </label>
                  </div>
                </div>
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  name="email"
                  value={form.email}
                  required
                  onChange={handleChange}
                  placeholder="Email"
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  name="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  name="confirm_password"
                  required
                  value={form.confirm_password}
                  pattern={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                <select
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                >
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                </select>
                <button
                  type="submit"
                  className="mt-5 tracking-wide text-white font-semibold bg-primary-dark text-white-500 w-full py-4 rounded-lg hover:bg-primary-light transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy={7} r={4} />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-2">Create Account</span>
                </button>
              </form>
              <p className="mt-6 text-xs text-gray-600 text-center">
                Already have an account?{" "}
                <Link href="/login" className="text-black font-light underline">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
