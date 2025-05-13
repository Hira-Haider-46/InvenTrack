import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import register_img from "../assets/login.png";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "firstName":
        if (!value) newErrors.firstName = "First name is required.";
        else delete newErrors.firstName;
        break;

      case "lastName":
        if (!value || value.length < 3)
          newErrors.lastName = "Last name must be at least 3 characters.";
        else delete newErrors.lastName;
        break;

      case "email":
        if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          newErrors.email = "Enter a valid email.";
        else delete newErrors.email;
        break;

      case "password":
        if (!value || value.length < 8)
          newErrors.password = "Password must be at least 8 characters.";
        else delete newErrors.password;

        if (form.confirmPassword && value !== form.confirmPassword)
          newErrors.confirmPassword = "Passwords do not match.";
        else delete newErrors.confirmPassword;
        break;

      case "confirmPassword":
        if (value !== form.password)
          newErrors.confirmPassword = "Passwords do not match.";
        else delete newErrors.confirmPassword;
        break;

      case "agreed":
        if (!value) newErrors.agreed = "You must accept the terms.";
        else delete newErrors.agreed;
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setForm((prev) => {
      const updatedForm = { ...prev, [name]: val };
      validateField(name, val); 
      return updatedForm;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Object.keys(form).forEach((key) => {
      validateField(key, form[key]);
    });

    if (Object.keys(errors).length === 0) {
      localStorage.setItem("token", "true");
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-white">
      <div className="w-full lg:w-[45%] hidden lg:flex items-center justify-center">
        <img src={register_img} alt="Register Illustration" className="w-full h-auto" />
      </div>

      <div className="w-full lg:w-[55%] py-10 px-5 sm:px-10 md:px-25 text-[#101540]">
        <h2 className="text-2xl font-semibold mb-2">Register</h2>
        <p className="text-base text-gray-600 mb-1 font-semibold">
          Manage all your inventory efficiently
        </p>
        <p className="text-sm text-gray-500 mb-5">
          Let's get you all set up so you can verify your personal account and begin setting up your work profile
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block mb-1 font-medium">First name</label>
              <input
                name="firstName"
                type="text"
                placeholder="Enter your name"
                value={form.firstName}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md px-4 py-2 text-sm outline-none"
              />
              {errors.firstName && <p className="text-red-700 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div className="w-1/2">
              <label className="block mb-1 font-medium">Last name</label>
              <input
                name="lastName"
                type="text"
                placeholder="Minimum 3 characters"
                value={form.lastName}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md px-4 py-2 text-sm outline-none"
              />
              {errors.lastName && <p className="text-red-700 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-md px-4 py-2 text-sm outline-none"
            />
            {errors.email && <p className="text-red-700 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block mb-1 font-medium">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Minimum 8 characters"
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md px-4 py-2 text-sm outline-none"
              />
              {errors.password && <p className="text-red-700 text-sm mt-1">{errors.password}</p>}
            </div>
            <div className="w-1/2">
              <label className="block mb-1 font-medium">Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Retype your password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md px-4 py-2 text-sm outline-none"
              />
              {errors.confirmPassword && (
                <p className="text-red-700 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="agreed"
              checked={form.agreed}
              onChange={handleChange}
              className="cursor-pointer"
            />
            <label className="cursor-pointer">
              I agree to all{" "}
              <span className="font-medium">terms, privacy policies, and fees</span>
            </label>
          </div>
          {errors.agreed && <p className="text-red-700 text-sm">{errors.agreed}</p>}

          <button
            type="submit"
            className="w-[80%] lg:w-[50%] block mx-auto bg-[#101540] text-white py-2 rounded-lg cursor-pointer hover:bg-white hover:text-[#101540] border border-[#101540] transition duration-200 mt-3"
          >
            Sign up
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="hover:underline cursor-pointer text-[#101540] font-medium">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;