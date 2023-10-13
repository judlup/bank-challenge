import { FC } from "react"
import { UserInterface } from "../../models/user/user.interface"
import { currencyFormatter } from "../../utils/currency/currentu.util"

interface Props {
  user: UserInterface | null
  balance: number | null
  amount: number
  handleAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleWithdrawal: () => void
}

const WithdrawalView: FC<Props> = ({
  user,
  balance,
  amount,
  handleWithdrawal,
  handleAmountChange,
}) => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 shadow-md rounded-md w-96">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
            Withdraw
          </h1>
          <hr className="mb-6" />

          <div className="mb-4">
            <span className="font-semibold">Balance:</span>
            {currencyFormatter(Number(balance))}
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="withdrawAccountNumber"
            >
              Account Number
            </label>
            <select
              id="withdrawAccountNumber"
              className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            >
              <option>Select Account Number</option>
              <option value={user?.phone}>{user?.phone}</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="withdrawAmount"
            >
              Amount
            </label>
            <input
              type="number"
              id="withdrawAmount"
              placeholder="Amount"
              className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              onChange={handleAmountChange}
              value={amount}
            />
          </div>

          <div className="mb-4">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 w-full"
              onClick={() => handleWithdrawal()}
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default WithdrawalView
