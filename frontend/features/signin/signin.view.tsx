import { FC } from "react"

interface Props {
  handleSignin: () => void
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  email: string
  password: string
}

const SigninView: FC<Props> = ({
  handleSignin,
  handleEmailChange,
  handlePasswordChange,
  email,
  password,
}) => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-md w-96">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
          Sign In
        </h1>

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
            type="text"
            placeholder="Email"
            onChange={handleEmailChange}
            value={email}
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
        <div className="mb-6 text-right">
          <a
            href="/signup"
            className="text-blue-500 hover:text-blue-600 text-sm"
          >
            Sign Up
          </a>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full"
            type="button"
            onClick={handleSignin}
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  )
}

export default SigninView
