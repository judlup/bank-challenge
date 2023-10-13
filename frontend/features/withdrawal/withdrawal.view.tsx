const WithdrawalView = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 shadow-md rounded-md w-96">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
            Withdraw
          </h1>
          <hr className="mb-6" />

          <div className="mb-4">
            <span className="font-semibold">Balance:</span> $100
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
              <option value="573164907627">573164907627</option>
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
              type="text"
              id="withdrawAmount"
              placeholder="Amount"
              className="block w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 w-full">
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default WithdrawalView
