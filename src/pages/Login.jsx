import { useState } from 'react';
import login_img from '../assets/login.png';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const validateEmail = (value) => {
    if (!value) return 'Email is required.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'Please enter a valid email address.';
    return '';
  };

  const validatePassword = (value) => {
    if (!value) return 'Password is required.';
    if (value.length < 8) return 'Password must be at least 8 characters.';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setErrors({ email: emailError, password: passwordError });

    if (!emailError && !passwordError) {
      localStorage.setItem('token', true);
      navigate('/');
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrors((prev) => ({ ...prev, password: validatePassword(value) }));
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-white">
      <div className="w-full md:w-[60%] lg:w-[40%] py-10 px-10 lg:px-25 text-[#101540]">
        <h2 className="text-2xl font-medium mb-2">Login</h2>
        <p className="text-sm text-gray-600 mb-5">See your growth and get support!</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
       
          <div>
            <label className="block text-base font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className='w-full border rounded-md px-4 py-2 text-sm outline-none border-gray-400'
              value={email}
              onChange={handleEmailChange}
            />
            {errors.email && (
              <p className="text-red-700 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-base font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Minimum 8 characters"
              className='w-full border rounded-md px-4 py-2 text-sm outline-none border-gray-400'
              value={password}
              onChange={handlePasswordChange}
            />
            {errors.password && (
              <p className="text-red-700 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 cursor-pointer" />
              Remember me
            </label>
            <a className="hover:underline cursor-pointer font-medium">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-[80%] block mx-auto bg-[#101540] text-white py-2 rounded-lg cursor-pointer hover:bg-white hover:text-[#101540] border border-[#101540] transition duration-200 mt-5"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600 text-center">
          Not registered yet?{" "}
          <Link to='/register' className="hover:underline cursor-pointer text-[#101540] font-medium">Create a new account</Link>
        </p>
      </div>

      <div className="w-full lg:w-[60%] flex items-center justify-center">
        <img
          src={login_img}
          alt="Login Illustration"
          className="hidden lg:block w-[77.5%] h-auto"
        />
      </div>
    </div>
  );
}

export default Login;