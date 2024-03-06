import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const initialFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [fail, setFail] = useState(false);

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  const loginUser = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_LOGIN_URL, options);
      const data = await response.json();
      if (data.success) {
        navigate("/foods");
      } else {
        setFail(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <div className="w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 group"
        onSubmit={handleSubmit}
      >
        <strong className="mb-5">Protein Project Admin Panel</strong>
        <label className="block mb-4" htmlFor="email">
          <span className="text-gray-700 text-sm font-bold mb-2">Email</span>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
            onChange={handleChange}
            required
            type="email"
            name="email"
            placeholder=" "
            pattern="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/"
          />
          <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
            Please enter a valid email address!
          </span>
        </label>
        <label className="block" htmlFor="password">
          <span className="text-gray-700 text-sm font-bold mb-2">Password</span>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 peer"
            onChange={handleChange}
            required
            type="password"
            name="password"
            pattern=".{7,}"
            placeholder="******************"
          />
          <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
            Please enter a valid password!
          </span>
        </label>
        {fail ? (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-2  mt-4 rounded relative"
            role="alert"
          >
            <span className="mt-4 text-sm text-red-500">
              Invalid email address or password!
            </span>
          </div>
        ) : null}
        <div className="flex py-5 items-center justify-between">
          <button
            className="shadow-md bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 group-invalid:pointer-events-none group-invalid:opacity-30"
            type="submit"
          >
            Submit
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-700"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
