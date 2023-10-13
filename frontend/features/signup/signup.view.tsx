import { FC } from "react"

interface Props {
  handleSignup: () => void
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleConfirmPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  email: string
  phone: string
  password: string
  confirmPassword: string
}

const SignupView: FC<Props> = ({
  handleSignup,
  handleNameChange,
  handleEmailChange,
  handlePhoneChange,
  handlePasswordChange,
  handleConfirmPasswordChange,
  name,
  email,
  phone,
  password,
  confirmPassword,
}) => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 shadow-md rounded-md w-96">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
            Sign Up
          </h1>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Nikola Tesla"
              onChange={handleNameChange}
              value={name}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="nikola@tesla.com"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="number"
              placeholder="57 311 2222 333"
              onChange={handlePhoneChange}
              value={phone}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="********"
              onChange={handleConfirmPasswordChange}
              value={confirmPassword}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full"
              type="button"
              onClick={handleSignup}
            >
              Register
            </button>
          </div>
          <div className="text-center">
            <span className="text-sm text-gray-600">
              Already have an account?
            </span>
            <a
              href="/signin"
              className="text-blue-500 hover:text-blue-600 text-sm"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupView
