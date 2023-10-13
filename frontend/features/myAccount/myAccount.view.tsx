const MyAccountView = () => {
  return (
    <>
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 shadow-md rounded-md w-96">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
            My Account
          </h1>
          <hr className="mb-6" />

          <div className="mb-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full">
              Assign account name
            </button>
          </div>
          <div className="mb-2">
            <span className="font-semibold">Owner:</span> Julián Luna
          </div>
          <div className="mb-2">
            <span className="font-semibold">Name:</span> My Account
          </div>
          <div className="mb-2">
            <span className="font-semibold">Email:</span> judlup@gmail.com
          </div>
          <div className="mb-2">
            <span className="font-semibold">Account Number:</span> 573164907627
          </div>
          <div className="mb-2">
            <span className="font-semibold">Balance:</span> $100
          </div>
        </div>
      </div>
    </>
  )
}

export default MyAccountView
